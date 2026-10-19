import ScrollReveal from './ScrollReveal'
import TestimonialCarousel from './TestimonialCarousel'
export default function Testimonials() {
  return (
    <section className="section"><div className="container-x">
      <ScrollReveal className="mb-10 text-center">
        <h2 className="h-section">What Our Clients Say</h2>
      </ScrollReveal>
      <TestimonialCarousel />
    </div></section>
  )
}
