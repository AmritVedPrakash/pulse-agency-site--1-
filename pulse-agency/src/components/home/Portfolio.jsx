import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, MessageCircle, Sparkles, TrendingUp } from 'lucide-react'
import Button from '../common/Button'
import ScrollReveal from '../common/ScrollReveal'
import Counter from '../common/Counter'
import SmartImg from '../common/SmartImg'
import { IMG } from '../../data/site'
import { portfolio, process, brands, stats } from '../../data/services'


export default function Portfolio() {
  const [active, setActive] = useState(null)
  return (
    <section className="section bg-ink text-cream">
      <div className="container-x">
        <ScrollReveal><h2 className="h-section max-w-2xl">Work that gets thumbs to stop.</h2><p className="mt-3 text-cream/60">Sample campaign concepts. Replace with your real case studies.</p></ScrollReveal>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i % 3) * 0.08} className={p.cls}>
              <button onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i} className="group relative h-full w-full overflow-hidden rounded-3xl text-left">
                <SmartImg id={p.image} alt={`${p.title}: ${p.tag} campaign concept`} w={800} className="h-full w-full transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink">{p.tag}</span>
                <span className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-violet-deep/95 via-violet/50 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${active === i ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-xl font-bold">{p.title}</span><span className="mt-1 text-sm text-white/85">{p.blurb}</span>
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
