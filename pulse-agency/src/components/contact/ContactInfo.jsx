import {
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import ScrollReveal, { ClipReveal } from "../common/ScrollReveal";
import SmartImg from "../common/SmartImg";
import { site, IMG } from "../../data/site";

export default function ContactInfo() {
  return (
    <div className="grid overflow-hidden rounded-[2rem] bg-violet-soft shadow-[0_24px_70px_-35px_rgba(64,3,13,.35)] lg:grid-cols-2">
      <ScrollReveal className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">Let’s connect</p>
        <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">Good work starts with a conversation.</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-ink/70">
          Tell us what you’re building. Choose the way that works best for you and let’s talk about what’s next.
        </p>

        <div className="mt-8 space-y-3">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 transition hover:-translate-y-0.5 hover:border-violet/40 hover:shadow-lg"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet text-white">
              <Mail aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-ink/60">Email us</span>
              <span className="block break-all font-bold">{site.email}</span>
            </span>
            <ArrowUpRight className="shrink-0 text-ink/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" size={20} aria-hidden />
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#25a55a]/50 hover:shadow-lg"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25a55a] text-white">
              <MessageCircle aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-ink/60">WhatsApp</span>
              <span className="block font-bold">+{site.whatsapp}</span>
            </span>
            <ArrowUpRight className="shrink-0 text-ink/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#25a55a]" size={20} aria-hidden />
          </a>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-6">
          <p className="text-sm font-semibold text-ink/70">Follow along</p>
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
