import Button from './Button'
import ScrollReveal from './ScrollReveal'
export default function CtaBlock({ title, text, label = 'Start Your Project', to = '/contact' }) {
  return (
    <section className="section">
      <div className="container-x">
        <ScrollReveal className="grain relative overflow-hidden rounded-[2.5rem] bg-violet px-6 py-16 text-center text-white sm:px-16 sm:py-24">
          <div aria-hidden className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-coral/60 blur-3xl" />
          <div aria-hidden className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-blush/40 blur-3xl" />
          <h2 className="h-section relative mx-auto max-w-3xl">{title}</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/80">{text}</p>
          <div className="relative mt-9"><Button to={to} variant="light" arrow>{label}</Button></div>
        </ScrollReveal>
      </div>
    </section>
  )
}
