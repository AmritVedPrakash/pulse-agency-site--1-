import { Link } from 'react-router-dom'
import { site } from '../../data/site'
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-display text-xl font-extrabold ${light ? 'text-cream' : 'text-ink'}`} aria-label={`${site.name} home`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet text-white">P</span>{site.name}
    </Link>
  )
}
