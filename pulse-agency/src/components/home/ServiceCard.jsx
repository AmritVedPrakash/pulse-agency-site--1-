import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import SmartImg from '../common/SmartImg'

export default function ServiceCard({ s, i }) {
  const Icon = s.icon
  return (
    <ScrollReveal delay={(i % 3) * 0.08} className={`${s.span} col-span-12`}>
      <Link to="/contact" className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-7 text-cream transition-transform duration-500 hover:-translate-y-1">
        <SmartImg id={s.image} alt="" w={900} className="absolute inset-0 h-full w-full opacity-40 transition duration-700 group-hover:scale-110 group-hover:opacity-55" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-violet"><Icon size={22} aria-hidden /></span>
        <div className="relative">
          <h3 className="text-2xl font-bold sm:text-3xl">{s.title}</h3>
          <p className="mt-2 max-w-md text-cream/75">{s.desc}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blush">Ask about this <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" aria-hidden /></span>
        </div>
      </Link>
    </ScrollReveal>
  )
}
