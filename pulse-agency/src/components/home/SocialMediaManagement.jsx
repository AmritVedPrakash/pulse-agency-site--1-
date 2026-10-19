import { ArrowDown, ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";
import useSEO from "../../hooks/useSEO";
import { site } from "../../data/site";
import imageOne from "../../assets/OurServices/img1.png";
import imageTwo from "../../assets/OurServices/img2.png";
import imageThree from "../../assets/OurServices/img3.jpg";
import imageFour from "../../assets/OurServices/4.png";
import imageFive from "../../assets/OurServices/5.png";
import imageSix from "../../assets/OurServices/img6.png";

const gallery = [
  { src: imageOne, alt: "Luxury fragrance social media campaign and product photography" },
  { src: imageTwo, alt: "Skincare product campaign with colorful social media visuals" },
  { src: imageThree, alt: "Ayurvedic skincare brand campaign creative" },
  { src: imageFour, alt: "Fresh juice brand social media campaign" },
  { src: imageFive, alt: "Pastel beauty product campaign and content direction" },
  { src: imageSix, alt: "Matcha drink social media campaign and lifestyle content" },
];

export default function SocialMediaManagement() {
  useSEO(
    "Social Media Management | Frame Theory Socials",
    "Creative content, consistent posting, and community engagement to grow your online presence.",
  );

  return (
    <>
      

      <section id="creative-work" className="section">
        <div className="container-x">
          <ScrollReveal className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">Creative work</p>
            <h2 className="h-section mt-3">Content made to make people stop and look.</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              From product storytelling to scroll-stopping campaign visuals, we create social content that gives every brand a distinctive presence.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <ScrollReveal
                key={image.src}
                delay={(index % 3) * 0.08}
                className="group overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_18px_50px_-38px_rgba(64,3,13,.45)]"
              >
                <div className="aspect-square overflow-hidden bg-violet-soft">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-semibold text-ink/70">Social campaign</span>
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">Ready to grow?</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Let’s build a social presence your audience remembers.</h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25a55a] px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1e914d]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet"
              >
                Contact us
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
