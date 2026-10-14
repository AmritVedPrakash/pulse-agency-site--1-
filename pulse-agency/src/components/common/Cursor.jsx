import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
// Desktop-only, fine-pointer-only soft cursor ring. Never replaces the native cursor.
export default function Cursor() {
  const [on, setOn] = useState(false)
  const [big, setBig] = useState(false)
  const x = useSpring(useMotionValue(-100), { stiffness: 400, damping: 30 })
  const y = useSpring(useMotionValue(-100), { stiffness: 400, damping: 30 })
  useEffect(() => {
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!ok) return
    setOn(true)
    const mv = (e) => { x.set(e.clientX - 16); y.set(e.clientY - 16); setBig(!!e.target.closest?.('a,button,[role=button]')) }
    window.addEventListener('mousemove', mv)
    return () => window.removeEventListener('mousemove', mv)
  }, [x, y])
  if (!on) return null
  return <motion.div aria-hidden style={{ x, y }} animate={{ scale: big ? 2 : 1 }} className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border-2 border-violet mix-blend-multiply" />
}
