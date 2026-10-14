import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const styles = {
  primary: 'bg-violet text-white hover:bg-violet-deep',
  dark: 'bg-ink text-cream hover:bg-violet',
  light: 'bg-white text-ink hover:bg-blush',
  ghost: 'border border-ink/25 text-ink hover:bg-ink hover:text-cream',
}
// Magnetic CTA: nudges toward the pointer. Disabled automatically for reduced motion via MotionConfig.
export default function Button({ to, href, children, variant = 'primary', arrow = false, className = '', ...rest }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.2); y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  const reset = () => { x.set(0); y.set(0) }
  const cls = `group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 font-medium transition-colors ${styles[variant]} ${className}`
  const inner = (<>{children}{arrow && <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />}</>)
  const wrap = { style: { x, y }, onMouseMove: move, onMouseLeave: reset, className: cls }
  if (to) return <motion.span style={{ display: 'inline-block', x, y }} onMouseMove={move} onMouseLeave={reset}><Link to={to} className={cls} {...rest}>{inner}</Link></motion.span>
  if (href) return <motion.a href={href} {...wrap} {...rest}>{inner}</motion.a>
  return <motion.button {...wrap} {...rest}>{inner}</motion.button>
}
