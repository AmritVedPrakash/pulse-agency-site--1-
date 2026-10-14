import ScrollReveal from '../common/ScrollReveal'
import { nextSteps } from '../../data/contact'
export default function NextSteps() {
  return (
    <section className="section bg-sand"><div className="container-x">
      <ScrollReveal><h2 className="h-section max-w-xl">What happens after you hit send</h2></ScrollReveal>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {nextSteps.map(([t, d], i) => (
          <ScrollReveal key={t} delay={i * 0.1} className="rounded-3xl bg-white p-6">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-violet font-bold text-white">{i + 1}</span>
            <h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-1 text-ink/70">{d}</p>
          </ScrollReveal>
        ))}
      </ol>
    </div></section>
  )
}
