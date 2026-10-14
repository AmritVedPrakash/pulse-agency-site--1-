import ScrollReveal from '../common/ScrollReveal'
import { about } from '../../data/about'
export default function MissionVision() {
  return (
    <section className="section bg-sand"><div className="container-x grid gap-6 md:grid-cols-2">
      {about.mission.map(({ icon: I, title, text, cls }, i) => (
        <ScrollReveal key={title} delay={i * 0.1} className={`rounded-[2rem] p-8 sm:p-12 ${cls} ${i ? 'md:mt-12' : ''}`}>
          <I size={34} aria-hidden /><h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">{title}</h2><p className="mt-3 text-lg opacity-85">{text}</p>
        </ScrollReveal>
      ))}
    </div></section>
  )
}
