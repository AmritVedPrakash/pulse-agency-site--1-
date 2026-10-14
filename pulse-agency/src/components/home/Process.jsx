import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, TrendingUp } from 'lucide-react'
import Button from '../common/Button'
import ScrollReveal from '../common/ScrollReveal'
import Counter from '../common/Counter'
import SmartImg from '../common/SmartImg'
import { IMG } from '../../data/site'
import { portfolio, process, brands, stats } from '../../data/services'


export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <ScrollReveal><h2 className="h-section max-w-xl">How we work</h2></ScrollReveal>
        <ol ref={ref} className="relative mt-14 space-y-10 pl-12 sm:pl-16">
          <span aria-hidden className="absolute bottom-2 left-5 top-2 w-0.5 bg-ink/10 sm:left-7"><motion.span style={{ height: h }} className="block w-full bg-violet" /></span>
          {process.map((p, i) => (
            <li key={p.t} className="relative">
              <ScrollReveal>
                <span className="absolute -left-12 grid h-10 w-10 place-items-center rounded-full bg-violet font-bold text-white sm:-left-16 sm:h-14 sm:w-14 sm:text-xl">{i + 1}</span>
                <h3 className="text-2xl font-bold sm:text-4xl">{p.t}</h3><p className="mt-1 max-w-md text-ink/70">{p.d}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
