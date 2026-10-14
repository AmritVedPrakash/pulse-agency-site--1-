import ScrollReveal from '../common/ScrollReveal'
import { about } from '../../data/about'
export default function Values() {
  return (
    <section className="section"><div className="container-x">
      <ScrollReveal><h2 className="h-section">What we stand for</h2></ScrollReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.values.map(({ icon: I, title, text }, i) => (
          <ScrollReveal key={title} delay={i * 0.08} className="rounded-3xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-violet">
            <I className="text-violet" aria-hidden /><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-1 text-ink/65">{text}</p>
          </ScrollReveal>
        ))}
      </div>
    </div></section>
  )
}
