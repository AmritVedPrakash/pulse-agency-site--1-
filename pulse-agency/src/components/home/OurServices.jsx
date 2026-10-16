
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  ChartNoAxesCombined,
  Code2,
  Megaphone,
  Package,
  Play,
  Podcast,
  Share2,
  Sparkles,
} from "lucide-react";

// Manually import images from your assets folder
import packagingImg from "../../assets/packaging-design.png";
import photographyImg from "../../assets/photography-videography.png";
import socialMediaImg from "../../assets/social-media-management.png";
import metaAdsImg from "../../assets/meta-ads-video.png";
import influencerImg from "../../assets/influencer-marketing.png";
import podcastImg from "../../assets/podcast-shoots.png";
import performanceImg from "../../assets/performance-marketing.png";
import websiteImg from "../../assets/website-development.png";

const services = [
  {
    number: "01",
    title: "Packaging Design",
    description:
      "Eye-catching packaging that communicates your brand identity and makes your products stand out.",
    image: packagingImg,
    icon: Package,
  },
  {
    number: "02",
    title: "Photography & Videography",
    description:
      "Professional product shoots and compelling videos that bring your brand story to life.",
    image: photographyImg,
    icon: Camera,
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Creative content, consistent posting, and community engagement to grow your online presence.",
    image: socialMediaImg,
    icon: Share2,
  },
  {
    number: "04",
    title: "Meta Ads Video",
    description:
      "Scroll-stopping video creatives designed to capture attention and drive conversions.",
    image: metaAdsImg,
    icon: Play,
  },
  {
    number: "05",
    title: "Influencer Marketing",
    description:
      "Connect with relevant creators to build trust, reach new audiences, and grow your brand.",
    image: influencerImg,
    icon: Megaphone,
  },
  {
    number: "06",
    title: "Podcast Shoots & Editing",
    description:
      "High-quality podcast production, professional editing, and engaging short-form clips.",
    image: podcastImg,
    icon: Podcast,
  },
  {
    number: "07",
    title: "Performance Marketing",
    description:
      "Data-driven advertising strategies focused on qualified leads, sales, and measurable ROI.",
    image: performanceImg,
    icon: ChartNoAxesCombined,
  },
  {
    number: "08",
    title: "Website Development",
    description:
      "Modern, responsive websites that showcase your brand and turn visitors into customers.",
    image: websiteImg,
    icon: Code2,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#ffebaa] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-[430px] w-[430px] rounded-full border border-[#e7cb72]/40 sm:h-[560px] sm:w-[560px]">
        <div className="absolute inset-3 rounded-full border border-[#e7cb72]/35">
          <div className="absolute inset-3 rounded-full border border-[#e7cb72]/30" />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-[#fff6d5] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-[#925321]">
            <Sparkles size={17} />
            <span className="text-xs font-bold uppercase tracking-[0.28em]">
              What We Do
            </span>
            <Sparkles size={17} />
          </div>

          <h2 className="font-serif text-4xl font-black italic tracking-tight text-[#4b160f] sm:text-5xl md:text-6xl">
            Our Services
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 76 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-1 rounded-full bg-[#d5a23d]"
          />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#79513b] sm:text-base">
            From creative storytelling to performance-driven campaigns, we
            deliver everything your brand needs to stand out, connect, and grow.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-[4/4.7] overflow-hidden rounded-xl bg-[#f6df9b] shadow-sm transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-[#71401c]/15">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#35130f]/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Service number */}
                  <span className="absolute left-3 top-3 rounded-full bg-[#fff5d9]/95 px-3 py-1 text-[10px] font-bold tracking-wider text-[#4b160f] shadow-sm">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[#ffedb5] text-[#4b160f] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-[#4b160f] text-[#fff1bc] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col px-1 pt-4 sm:px-2 sm:pt-5">
                  <h3 className="text-center text-base font-bold leading-snug text-[#4b160f] transition-colors duration-300 group-hover:text-[#a56c22] sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-center text-xs leading-5 text-[#79513b] sm:text-sm sm:leading-6">
                    {service.description}
                  </p>

                  <div className="mx-auto mt-3 h-[2px] w-0 rounded-full bg-[#bd8a30] transition-all duration-500 group-hover:w-12" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center sm:mt-20"
        >
          <p className="mb-5 text-sm text-[#79513b] sm:text-base">
            Have a project in mind? Let's make it happen.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#4b160f] px-7 py-4 text-sm font-bold text-[#fff1bc] shadow-lg shadow-[#4b160f]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#70271b] hover:shadow-xl"
          >
            Discuss Your Project
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
