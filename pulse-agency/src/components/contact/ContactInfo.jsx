import { Mail, MessageCircle, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react'
import ScrollReveal, { ClipReveal } from '../common/ScrollReveal'
import SmartImg from '../common/SmartImg'
import { site, IMG } from '../../data/site'

export default function ContactInfo() {
  return (
    <aside className="space-y-5">
            <ScrollReveal className="rounded-3xl bg-ink p-6 text-cream">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet"><Mail aria-hidden /></span><span><span className="block text-sm text-cream/60">Email us</span><span className="font-bold">{site.email}</span></span></a>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25a55a]"><MessageCircle aria-hidden /></span><span><span className="block text-sm text-cream/60">WhatsApp</span><span className="font-bold">Chat with us</span></span></a>
              <div className="mt-6 flex gap-3">{[[Instagram, 'instagram'], [Linkedin, 'linkedin'], [Facebook, 'facebook'], [Youtube, 'youtube']].map(([I, k]) => <a key={k} href={site.socials[k]} target="_blank" rel="noreferrer" aria-label={k} className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 hover:bg-violet"><I size={18} /></a>)}</div>
            </ScrollReveal>
            <ClipReveal><SmartImg id={IMG.space} alt="Bright creative studio workspace" w={800} h={700} className="aspect-[8/7] w-full rounded-3xl" /></ClipReveal>
          </aside>
  )
}
