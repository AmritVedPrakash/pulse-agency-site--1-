import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SmartImg from './SmartImg'

export default function TestimonialCarousel() {
  const [i, setI] = useState(0)
  const go = (d) => setI((i + d + testimonials.length) % testimonials.length)
  const t = testimonials[i]
  return (
    <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-7 sm:p-12" aria-roledescription="carousel" aria-label="Client testimonials">
      <Quote className="text-violet" size={36} aria-hidden />
      <div className="min-h-[190px]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
            <blockquote className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">{t.quote}</blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              {t.imageSrc ? (
                <img src={t.imageSrc} alt={`Portrait of ${t.name}`} loading="lazy" decoding="async" className="h-14 w-14 rounded-full object-cover" />
              ) : (
                <SmartImg id={t.image} alt={`Portrait of ${t.name}`} w={120} h={120} className="h-14 w-14 rounded-full" />
              )}
              <div><p className="font-bold">{t.name}</p><p className="text-sm text-ink/60">{t.role}</p></div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="pr-4 text-sm text-ink/55">Real stories. Real collaborations. Meaningful growth.</p>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 hover:bg-ink hover:text-cream"><ChevronLeft size={20} /></button>
          <button onClick={() => go(1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full bg-violet text-white hover:bg-violet-deep"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  )
}
