import { motion } from 'framer-motion'
export default function ScrollReveal({ children, delay = 0, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </M>
  )
}
// Clip-path image reveal
export function ClipReveal({ children, className = '' }) {
  return (
    <motion.div className={className} initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}>
      {children}
    </motion.div>
  )
}
