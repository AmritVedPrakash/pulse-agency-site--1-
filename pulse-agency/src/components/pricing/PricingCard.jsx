import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '../common/Button'

export default function PricingCard({ plan, i }) {
  const pop = plan.popular
  return (
    <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}
      whileHover={{ y: -10 }}
      className={`relative flex flex-col rounded-[2rem] p-8 ${pop ? 'bg-ink text-cream shadow-2xl shadow-violet/30 lg:-my-4 lg:py-12' : 'glass'}`}>
      {pop && <span className="absolute -top-3 left-8 rounded-full bg-coral px-4 py-1 text-sm font-bold text-white">Most Popular</span>}
      <h3 className="text-2xl font-bold">{plan.id}</h3>
      <p className={`mt-1 ${pop ? 'text-cream/70' : 'text-ink/60'}`}>{plan.blurb}</p>
      <p className="mt-6 flex items-baseline gap-1"><span className="font-display text-5xl font-extrabold">₹{plan.price.toLocaleString('en-IN')}</span><span className={pop ? 'text-cream/60' : 'text-ink/50'}>/month</span></p>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f, k) => (
          <motion.li key={f} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + k * 0.05 }} className="flex gap-3">
            <Check size={18} className={`mt-1 shrink-0 ${pop ? 'text-blush' : 'text-violet'}`} aria-hidden /><span>{f}</span>
          </motion.li>
        ))}
      </ul>
      <div className="mt-8"><Button to={`/contact?plan=${plan.id}`} variant={pop ? 'primary' : 'dark'} arrow className="w-full">Choose {plan.id}</Button></div>
    </motion.article>
  )
}
