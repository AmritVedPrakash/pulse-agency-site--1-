import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Camera,
  ChartNoAxesCombined,
  Code2,
  Megaphone,
  Package,
  Podcast,
  Share2,
  Sparkles,
  Play,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Packaging Design",
    description:
      "Eye-catching packaging that communicates your brand identity and makes your products stand out.",
    icon: Package,
  },
  {
    number: "02",
    title: "Photography & Videography",
    description:
      "Professional product shoots and compelling videos that bring your brand story to life.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Creative content, consistent posting, and community engagement to grow your online presence.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Meta Ads Video",
    description:
      "Scroll-stopping video creatives designed to capture attention and drive conversions.",
    icon: Play,
  },
  {
    number: "05",
    title: "Influencer Marketing",
    description:
      "Connect with relevant creators to build trust, reach new audiences, and grow your brand.",
    icon: Megaphone,
  },
  {
    number: "06",
    title: "Podcast Shoots & Editing",
    description:
      "High-quality podcast production, professional editing, and engaging short-form clips.",
    icon: Podcast,
  },
  {
    number: "07",
    title: "Performance Marketing",
    description:
      "Data-driven advertising strategies focused on qualified leads, sales, and measurable ROI.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "08",
    title: "Website Development",
    description:
      "Modern, responsive websites that showcase your brand and turn visitors into customers.",
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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-[#a56c22]">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#d5a23d]"
          />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From creative storytelling to performance-driven campaigns, we
            deliver everything your brand needs to stand out, connect, and grow.
          </p>
        </motion.div>
        {/* Text-Based Service Cards */}
        
        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isYellow = index % 2 !== 0;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{ y: -7 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                  isYellow
                    ? "border-[#ffe482] bg-[#ffe482] hover:border-[#e5c957] hover:shadow-[0_18px_45px_rgba(75,22,15,0.10)]"
                    : "border-[#eee5d7] bg-white hover:border-[#d5a23d]/70 hover:shadow-[0_18px_45px_rgba(75,22,15,0.09)]"
                }`}
              >
                {["Packaging Design", "Social Media Management"].includes(service.title) && (
                  <Link
                    to={service.title === "Packaging Design" ? "/packaging-design" : "/social-media-management"}
                    aria-label={`Explore ${service.title}`}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline"
                  />
                )}
                {service.title === "Meta Ads Video" && (
                  <a
                    href="https://drive.google.com/drive/folders/1zuB270-NCrqy5dYQsf8OmUe9WMDrZTPW?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Meta Ads videos on Google Drive"
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline"
                  />
                )}
                {/* Card Header */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#8b6225]">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-[#4b160f] shadow-sm transition-all duration-300 group-hover:bg-[#4b160f] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="text-xl font-bold leading-snug text-[#4b160f] transition-colors duration-300 group-hover:text-[#8b4c15]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#624b3e]">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                {["Packaging Design", "Social Media Management"].includes(service.title) && (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#4b160f]">
                    Explore service
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                )}

                {/* Bottom Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#4b160f] transition-all duration-500 group-hover:w-full" />
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
          <p className="mb-5 text-sm text-gray-600 sm:text-base">
            Have a project in mind? Let's make it happen.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#4b160f] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#4b160f]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#70271b] hover:shadow-xl"
          >
            Discuss Your Project
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
