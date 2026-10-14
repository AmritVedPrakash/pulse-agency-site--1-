import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
export default function Counter({ to, dec = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [v, setV] = useState(reduce ? to : 0)
  useEffect(() => {
    if (!inView || reduce) { if (reduce) setV(to); return }
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: setV })
    return () => c.stop()
  }, [inView, to, reduce])
  return <span ref={ref}>{v.toFixed(dec)}{suffix}</span>
}
