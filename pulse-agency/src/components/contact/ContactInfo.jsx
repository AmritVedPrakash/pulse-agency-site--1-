import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import ScrollReveal, { ClipReveal } from "../common/ScrollReveal";
import SmartImg from "../common/SmartImg";
import { site, IMG } from "../../data/site";

export default function ContactInfo() {
  return (
    <div className="grid overflow-hidden rounded-[2rem] bg-[#40030d] shadow-[0_24px_70px_-35px_rgba(64,3,13,.35)] lg:grid-cols-2">
      <ScrollReveal className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffe482]">Let’s connect</p>
        <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl">Good work starts with a conversation.</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-white/75">
          Tell us what you’re building. Choose the way that works best for you and let’s talk about what’s next.
        </p>

        <div className="mt-8 space-y-3">
          <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#40030d] text-white">
              <Mail aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-ink/60">Email us</p>
              <a href={`mailto:${site.email}`} className="block break-all font-bold hover:text-[#8b4c15]">
                {site.email}
              </a>
              <p className="mt-3 text-sm text-ink/60">For job applications, email HR</p>
              <a href={`mailto:${site.careersEmail}`} className="block break-all font-bold hover:text-[#8b4c15]">
                {site.careersEmail}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#40030d] text-white">
              <Phone aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-ink/60">Call or WhatsApp</p>
              <p className="font-bold">{site.phone}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="rounded-full bg-violet/10 px-3 py-1.5 text-sm font-semibold text-violet transition hover:bg-violet hover:text-white"
                >
                  Call us
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#25a55a]/10 px-3 py-1.5 text-sm font-semibold text-[#1b7f43] transition hover:bg-[#25a55a] hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#40030d] text-white">
              <MapPin aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-ink/60">Visit us</span>
              <span className="block font-bold leading-relaxed">{site.address}</span>
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6">
          <p className="text-sm font-semibold text-white/80">Follow along</p>
          <div className="mt-3 flex gap-3">
            {[
              [Instagram, "instagram", "Instagram"],
              [Linkedin, "linkedin", "LinkedIn"],
              [Facebook, "facebook", "Facebook"],
              [Youtube, "youtube", "YouTube"],
            ].map(([Icon, key, label]) => (
              <a
                key={key}
                href={site.socials[key]}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white transition hover:-translate-y-0.5 hover:border-violet hover:bg-violet hover:text-white"
              >
                <Icon size={18} aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ClipReveal className="relative min-h-[20rem] lg:min-h-full">
        <SmartImg
          id={IMG.space}
          alt="Bright creative studio workspace"
          w={1000}
          h={1100}
          className="absolute inset-0 h-full w-full"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
        <p className="absolute bottom-7 left-7 right-7 max-w-sm text-2xl font-bold leading-snug text-white sm:bottom-10 sm:left-10">
          Let’s make something meaningful together.
        </p>
      </ClipReveal>
    </div>
  );
}
