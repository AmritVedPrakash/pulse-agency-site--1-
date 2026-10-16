import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, TrendingUp } from 'lucide-react'
import Button from '../common/Button'
import ScrollReveal from '../common/ScrollReveal'
import Counter from '../common/Counter'
import SmartImg from '../common/SmartImg'
import { IMG } from '../../data/site'
import { portfolio, process, brands, stats } from '../../data/services'

const line = { hidden: { y: '110%' }, show: (i) => ({ y: 0, transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }) }
const float = (d) => ({ y: [0, -14, 0], transition: { duration: 5 + d, repeat: Infinity, ease: 'easeInOut' } })

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -90])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160])
  return (
    <section ref={ref} className="grain relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div aria-hidden className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-violet/25 blur-3xl" />
      <div aria-hidden className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-coral/25 blur-3xl" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}><Sparkles size={16} className="text-violet" aria-hidden /></motion.span>Creative Minds. Measurable Growth.
          </motion.p>
          <h1 className="h-display mt-6" aria-label="Make Your Brand Impossible to Ignore.">
            {['Make Your Brand', 'Impossible', 'to Ignore.'].map((t, i) => (
              <span key={t} className="block overflow-hidden pb-2" aria-hidden>
                <motion.span className="block" variants={line} custom={i} initial="hidden" animate="show">{t}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-6 max-w-xl text-lg text-ink/70">
            We turn bold ideas into powerful digital experiences that capture attention, build communities, and drive measurable growth.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="mt-9 flex flex-wrap gap-4">
            <Button href="#services" variant="dark" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>Explore Our Services</Button>
            <Button to="/contact" variant="ghost" arrow>Let’s Work Together</Button>
          </motion.div>
        </div>
        <div className="relative mx-auto h-[420px] w-full max-w-md lg:col-span-5 lg:h-[560px]" aria-hidden>
          <motion.div style={{ y: y1 }} className="absolute left-0 top-4 w-[62%]">
            <motion.div animate={float(0)} className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-violet/20 [transform:rotate(-5deg)]">
              <SmartImg id={IMG.phone} alt="" w={500} h={600} eager className="aspect-[4/5] w-full rounded-[1.4rem]" />
              <div className="flex items-center gap-3 px-2 pb-1 pt-3 text-sm"><Heart size={16} className="fill-coral text-coral" />12.4k <MessageCircle size={16} className="ml-2" />386</div>
            </motion.div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute right-0 top-24 w-[52%]">
            <motion.div animate={float(1)} className="overflow-hidden rounded-[1.6rem] [transform:rotate(6deg)]">
              <SmartImg id={IMG.design} alt="" w={400} h={500} eager className="aspect-[4/5] w-full" />
            </motion.div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-6 left-6 sm:left-2">
            <motion.div animate={float(2)} className="glass flex items-center gap-3 rounded-2xl p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet text-white"><TrendingUp size={20} /></span>
              <div><p className="text-xs text-ink/60">Demo widget: engagement</p><p className="font-display text-lg font-bold">+38%</p></div>
            </motion.div>
          </motion.div>
          <motion.div animate={float(0.5)} className="absolute bottom-24 right-4 h-16 w-16 rounded-full bg-coral" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute right-12 top-0 h-12 w-12 rounded-xl border-4 border-violet" />
        </div>
      </div>
    </section>
  )
}
