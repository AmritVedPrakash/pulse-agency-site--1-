import { motion } from 'framer-motion'
// Shared hero for inner pages. Props: title, text, align ('left' | 'center')
export default function PageHero({ title, text, align = 'left', blob = 'bg-blush/60' }) {
  const c = align === 'center'
  return (
    <section className={`grain relative overflow-hidden pb-12 pt-36 sm:pt-44 ${c ? 'text-center' : ''}`}>
      <div aria-hidden className={`absolute -right-20 top-20 h-96 w-96 rounded-full blur-3xl ${blob}`} />
      <div className="container-x relative">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className={`h-display max-w-5xl ${c ? 'mx-auto' : ''}`}>{title}</motion.h1>
        {text && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className={`mt-6 max-w-xl text-lg text-ink/70 ${c ? 'mx-auto' : ''}`}>{text}</motion.p>}
      </div>
    </section>
  )
}
