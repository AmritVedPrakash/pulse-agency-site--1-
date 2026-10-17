import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, TrendingUp } from 'lucide-react'
import Button from '../common/Button'
import ScrollReveal from '../common/ScrollReveal'
import Counter from '../common/Counter'
import SmartImg from '../common/SmartImg'
import { IMG } from '../../data/site'
import { portfolio, process, brands, stats } from '../../data/services'


export default function Marquee() {
  const row = [...brands, ...brands]
  return (
    <section aria-label="Brands we have worked with (placeholder names)" className="border-y border-ink/10 bg-white py-6">
      <p className="sr-only">Placeholder brand names</p>
      <div className="overflow-hidden"><div className="flex w-max animate-marquee gap-14 motion-reduce:animate-none">
        {row.map((b, i) => <span key={i} className="whitespace-nowrap font-display text-2xl font-bold text-ink/40">{b}</span>)}
      </div></div>
    </section>
  )
}
