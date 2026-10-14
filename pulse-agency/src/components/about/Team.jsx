import ScrollReveal from '../common/ScrollReveal'
import SmartImg from '../common/SmartImg'
import { team } from '../../data/testimonials'
export default function Team() {
  return (
    <section className="section bg-ink text-cream"><div className="container-x">
      <ScrollReveal><h2 className="h-section">Our team</h2><p className="mt-2 text-cream/60">Sample profiles. Replace with your real team in src/data/testimonials.js.</p></ScrollReveal>
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {team.map((m, i) => (
          <ScrollReveal key={m.name} delay={i * 0.08} className={i % 2 ? 'lg:mt-12' : ''}>
            <div className="group overflow-hidden rounded-3xl"><SmartImg id={m.image} alt={`Portrait of ${m.name}, ${m.role}`} w={600} h={750} className="aspect-[4/5] w-full transition duration-700 group-hover:scale-110" /></div>
            <h3 className="mt-3 text-lg font-bold">{m.name}</h3><p className="text-sm text-cream/60">{m.role}</p>
          </ScrollReveal>
        ))}
      </div>
    </div></section>
  )
}
