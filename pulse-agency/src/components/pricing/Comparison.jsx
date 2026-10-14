import ScrollReveal from '../common/ScrollReveal'
import { plans, comparison } from '../../data/pricing'
export default function Comparison() {
  return (
    <section className="section bg-sand"><div className="container-x">
      <ScrollReveal><h2 className="h-section">Compare plans</h2></ScrollReveal>
      <div className="mt-8 overflow-x-auto rounded-3xl border border-ink/10 bg-white">
        <table className="w-full min-w-[620px] text-left">
          <caption className="sr-only">Plan comparison</caption>
          <thead><tr className="bg-ink text-cream"><th scope="col" className="p-4">Feature</th>{plans.map(p => <th scope="col" key={p.id} className="p-4">{p.id}</th>)}</tr></thead>
          <tbody>{comparison.map(r => <tr key={r[0]} className="border-t border-ink/10 even:bg-cream/60"><th scope="row" className="p-4 font-medium">{r[0]}</th>{r.slice(1).map((c, i) => <td key={i} className="p-4 text-ink/75">{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div></section>
  )
}
