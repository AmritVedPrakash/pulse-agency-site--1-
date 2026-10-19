import ScrollReveal from '../common/ScrollReveal'
import { nextSteps } from '../../data/contact'
export default function NextSteps() {
  return (
    <section className="section bg-sand"><div className="container-x">
      <ScrollReveal>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">Getting started</p>
        <h2 className="h-section mt-3 max-w-xl">A simple way to get the conversation going</h2>
      </ScrollReveal>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {nextSteps.map(([t, d], i) => (
          <ScrollReveal key={t} delay={i * 0.1} className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(64,3,13,.45)] sm:p-8">
            <span className="text-sm font-bold tracking-[0.15em] text-violet">0{i + 1}</span>
            <h3 className="mt-5 text-xl font-bold">{t}</h3>
            <p className="mt-2 leading-relaxed text-ink/70">{d}</p>
          </ScrollReveal>
        ))}
      </ol>
    </div></section>
  )
}
