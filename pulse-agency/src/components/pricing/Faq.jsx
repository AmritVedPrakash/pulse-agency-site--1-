import ScrollReveal from '../common/ScrollReveal'
import FaqItem from './FaqItem'
import { faqs as defaultFaqs } from '../../data/pricing'
export default function Faq({ items = defaultFaqs, title = 'Questions, answered' }) {
  return (
    <section className="section"><div className="container-x max-w-3xl">
      <ScrollReveal><h2 className="h-section mb-6">{title}</h2></ScrollReveal>
      {items.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}
    </div></section>
  )
}
