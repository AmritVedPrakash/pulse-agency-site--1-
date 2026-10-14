import PricingCard from './PricingCard'
import { plans } from '../../data/pricing'
export default function PricingCards() {
  return (
    <section className="pb-10 pt-10">
      <div className="container-x grid items-stretch gap-6 lg:grid-cols-3">{plans.map((p, i) => <PricingCard key={p.id} plan={p} i={i} />)}</div>
      <p className="container-x mt-8 text-center text-sm text-ink/60">Example pricing. Advertising spend, taxes and additional services are excluded unless explicitly included.</p>
    </section>
  )
}
