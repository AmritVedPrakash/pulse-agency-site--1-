import { ArrowUpRight, Package } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";
import useSEO from "../../hooks/useSEO";
import imageOne from "../../assets/PackagingDesign/img1.png";
import imageTwo from "../../assets/PackagingDesign/img2.png";
import imageThree from "../../assets/PackagingDesign/img3.png";
import imageFour from "../../assets/PackagingDesign/img4.png";
import imageFive from "../../assets/PackagingDesign/img5.png";
import imageSix from "../../assets/PackagingDesign/img6.png";

const gallery = [
  { src: imageOne, alt: "VYNK streetwear brand packaging and visual identity" },
  { src: imageTwo, alt: "Little Explorers children's backpack packaging and lookbook" },
  { src: imageThree, alt: "Hina Girl beauty product packaging and brand identity" },
  { src: imageFour, alt: "Siply beverage packaging and campaign design" },
  { src: imageFive, alt: "Cloudy Bakes bakery packaging and visual identity" },
  { src: imageSix, alt: "Casey phone case packaging and product brand design" },
];

export default function PackagingDesign() {
  useSEO(
    "Packaging Design | Frame Theory Socials",
    "Eye-catching packaging that communicates your brand identity and makes your products stand out.",
  );

  return (
    <>
      

      <section className="section">
        <div className="container-x">
          <ScrollReveal className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">Selected work</p>
            <h2 className="h-section mt-3">Packaging that brings every brand to life.</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Explore a selection of brand worlds shaped through distinctive packaging, considered details, and memorable visual identities.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <ScrollReveal
                key={image.src}
                delay={(index % 3) * 0.08}
                className="group overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_18px_50px_-38px_rgba(64,3,13,.45)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-violet-soft">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-semibold text-ink/70">Packaging &amp; identity</span>
                  <span className="text-xs font-bold tracking-[0.18em] text-violet">0{index + 1}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <ScrollReveal className="flex flex-col gap-6 rounded-[2rem] bg-violet-soft p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">Make your first impression count</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Let’s create packaging that feels unmistakably yours.</h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet"
            >
              Contact us
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
