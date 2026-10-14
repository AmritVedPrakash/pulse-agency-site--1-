import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, TrendingUp } from 'lucide-react'
import Button from '../common/Button'
import ScrollReveal from '../common/ScrollReveal'
import Counter from '../common/Counter'
import SmartImg from '../common/SmartImg'
import { IMG } from '../../data/site'
import { portfolio, process, brands, stats } from '../../data/services'


export default function Results() {
  return (
    <section className="section">
      <div className="container-x">
        <ScrollReveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="h-section max-w-xl">Numbers we are working toward for you.</h2>
          <p className="max-w-sm text-sm text-ink/60">Illustrative demo statistics. Replace with verified business data before publishing.</p>
        </ScrollReveal>
        <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08} className={`rounded-[2rem] p-6 sm:p-8 ${['bg-violet-soft', 'bg-blush/60', 'bg-sand', 'bg-violet text-white'][i]}`}>
              <dd className="font-display text-4xl font-extrabold sm:text-6xl"><Counter to={s.n} dec={s.dec} suffix={s.suffix} /></dd>
              <dt className="mt-2 text-sm font-medium opacity-80">{s.label}</dt>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
