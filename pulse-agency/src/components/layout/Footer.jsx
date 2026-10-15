import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'
import Logo from '../common/Logo'
import { site } from '../../data/site'
import { services } from '../../data/services'

const social = [[Instagram, 'instagram', 'Instagram'], [Linkedin, 'linkedin', 'LinkedIn'], [Facebook, 'facebook', 'Facebook'], [Youtube, 'youtube', 'YouTube']]
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 animate-pulse rounded-full bg-violet/30 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light full />
          <p className="mt-5 max-w-sm text-cream/70">{site.tagline} We help brands build attention, communities and results that can be measured.</p>
          <div className="mt-6 flex gap-3">
            {social.map(([Icon, k, label]) => (
              <a key={k} href={site.socials[k]} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition hover:border-violet hover:bg-violet"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer"><h3 className="mb-4 text-lg font-bold">Explore</h3>
          <ul className="space-y-2 text-cream/70">{[['/', 'Home'], ['/about', 'About Us'], ['/pricing', 'Pricing'], ['/contact', 'Contact Us']].map(([t, l]) => <li key={t}><Link className="hover:text-white" to={t}>{l}</Link></li>)}</ul>
        </nav>
        <div><h3 className="mb-4 text-lg font-bold">Services</h3>
          <ul className="space-y-2 text-cream/70">{services.map(s => <li key={s.title}><Link className="hover:text-white" to="/contact">{s.title}</Link></li>)}</ul>
          <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 text-cream/70 hover:text-white"><Mail size={16} />{site.email}</a>
        </div>
      </div>
      <div className="container-x relative flex flex-col gap-2 border-t border-cream/10 py-6 text-sm text-cream/60 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="flex gap-5"><Link to="/contact" className="hover:text-white">Privacy Policy</Link><Link to="/contact" className="hover:text-white">Terms & Conditions</Link></p>
      </div>
    </footer>
  )
}
