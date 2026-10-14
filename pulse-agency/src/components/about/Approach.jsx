import ScrollReveal, { ClipReveal } from '../common/ScrollReveal'
import SmartImg from '../common/SmartImg'
import { IMG } from '../../data/site'
import { about } from '../../data/about'
export default function Approach() {
  const a = about.approach
  return (
    <section className="section"><div className="container-x grid items-center gap-12 lg:grid-cols-2">
      <ScrollReveal>
        <h2 className="h-section">{a.title}</h2><p className="mt-5 text-lg text-ink/70">{a.text}</p>
        <ul className="mt-6 space-y-3 text-lg">{a.points.map(x => <li key={x} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-coral" />{x}</li>)}</ul>
      </ScrollReveal>
      <ClipReveal><SmartImg id={IMG.data} alt="Analytics dashboard on a laptop beside a notebook" w={1000} h={750} className="aspect-[4/3] w-full rounded-[2rem]" /></ClipReveal>
    </div></section>
  )
}
