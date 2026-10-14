import { Check } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import { included } from '../../data/pricing'
export default function Included() {
  return (
    <section className="section"><div className="container-x">
      <ScrollReveal><h2 className="h-section max-w-xl">Included with every plan</h2></ScrollReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {included.map(([t, d], i) => (
          <ScrollReveal key={t} delay={i * 0.08} className="rounded-3xl bg-violet-soft p-6">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-violet text-white"><Check size={18} aria-hidden /></span>
            <h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-1 text-ink/70">{d}</p>
          </ScrollReveal>
        ))}
      </div>
    </div></section>
  )
}
