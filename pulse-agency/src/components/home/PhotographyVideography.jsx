import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";
import useSEO from "../../hooks/useSEO";
import photographyWork from "../../assets/PhotographyVideography/WhatsApp Image 2026-10-20 at 1.54.45 PM.jpeg";

export default function PhotographyVideography() {
  useSEO(
    "Photography & Videography | Frame Theory Socials",
    "Explore photography and videography work by Frame Theory Socials.",
  );

  return (
    <>
      <section className="section">
        <div className="container-x">
          <ScrollReveal className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
              Selected work
            </p>
            <h1 className="h-section mt-3">
              Photography &amp; videography that brings every story to life.
            </h1>
            <p className="mt-4 leading-relaxed text-ink/70">
              A glimpse into our product, fashion, and campaign storytelling.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_18px_50px_-38px_rgba(64,3,13,.45)]">
            <img
              src={photographyWork}
              alt="Photography and videography portfolio featuring fashion and jewelry campaigns"
              loading="eager"
              decoding="async"
              className="h-auto w-full"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <ScrollReveal className="flex flex-col gap-6 rounded-[2rem] bg-violet-soft p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
                Make your story stand out
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Let’s create visuals your audience remembers.
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet"
            >
              Contact us
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
