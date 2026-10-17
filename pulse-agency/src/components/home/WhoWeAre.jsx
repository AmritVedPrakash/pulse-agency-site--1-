
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const testimonials = [
  {
    name: "PAHEL",
    category: "JEWELS",
    text: "The influencer strategy helped us reach a premium audience and grow our sales significantly.",
    delay: 0.1,
  },
  {
    name: "Underneath",
    category: "LIFESTYLE",
    text: "Authentic creators and strong campaign execution. Truly a growth partner.",
    delay: 0.25,
  },
  {
    name: "DOT & KEY",
    category: "SKINCARE",
    text: "Creative storytelling and the right influencers helped us drive massive reach and brand love.",
    delay: 0.4,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#ffe482] px-5 py-20 text-[#4b160f] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#69291b]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em]">
              Who We Are
            </span>
            <Sparkles size={17} className="ml-1 text-[#b17a25]" />
          </div>

          <h2 className="max-w-2xl text-[2.85rem] font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl xl:text-[4.5rem]">
            We turn D2C brands into{" "}
            <span className="relative inline-block text-[#b17a25]">
              growth stories.
              <svg
                className="absolute -right-5 -top-4 hidden w-12 text-[#b17a25] sm:block"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 3L14 18M39 12L25 24M43 30L29 32"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#6f4435] sm:text-lg sm:leading-8">
            We are a full-service growth partner for D2C brands, helping them
            scale through strategic influencer marketing, content-led social
            media, and performance-driven campaigns. By connecting brands with
            the right creators, we build trust, increase visibility, and drive
            measurable growth at every stage of the customer journey.
          </p>

          {/* Mission and Approach */}
          <div className="mt-12 grid gap-9 sm:grid-cols-2 sm:gap-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-[#b17a25]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Our Mission
                </span>
              </div>

              <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
                Empowering D2C brands to grow with influence.
              </h3>

              <p className="mt-4 text-[15px] leading-6 text-[#775044]">
                We help brands unlock sustainable growth through creator
                partnerships, social media, and performance marketing. Our
                mission is to build campaigns that strengthen credibility,
                expand reach, and deliver measurable business impact.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="border-t border-[#b88c54]/50 pt-7 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-[#b17a25]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Our Approach
                </span>
              </div>

              <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
                Creators first. Strategy always.
              </h3>

              <p className="mt-4 text-[15px] leading-6 text-[#775044]">
                We design end-to-end influencer marketing solutions tailored
                to every brand's goals, from creator discovery and campaign
                execution to performance tracking and optimisation. Every
                collaboration is backed by data, creativity, and a focus on
                real business results.
              </p>
            </motion.div>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#4b160f] px-7 py-4 text-sm font-bold text-[#ffe482] shadow-lg shadow-[#4b160f]/10 transition-colors hover:bg-[#6b2519]"
          >
            Let's Grow Together
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>

        {/* RIGHT TESTIMONIAL VISUAL */}
        <div className="relative mx-auto w-full max-w-[540px] py-5 sm:py-10">

          {/* Solid decorative shape */}
          <div className="absolute -right-10 top-0 h-[92%] w-[73%] rounded-[45%_15%_35%_25%] bg-[#4b160f] sm:-right-4" />

          <div className="absolute right-0 top-3 h-40 w-40 rounded-full border border-[#f5cd50]/80" />

          <motion.div
            animate={{ rotate: [0, 7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-1 top-12 text-[#f8d84f]"
          >
            <Sparkles size={32} strokeWidth={1.5} />
          </motion.div>

          {/* Floating testimonial cards */}
          <div className="relative z-10 flex flex-col gap-4">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 35, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: item.delay,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  rotate: index === 1 ? -1 : 1,
                }}
                className={`relative w-[94%] rounded-2xl border border-white/80 bg-[#fffaf0] p-5 shadow-[0_16px_45px_rgba(88,44,16,0.12)] sm:p-6 ${
                  index === 1
                    ? "ml-auto w-[91%]"
                    : index === 2
                    ? "ml-auto mr-[7%] w-[91%]"
                    : "mr-auto"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`font-serif text-[1.45rem] font-bold leading-tight ${
                        index === 1 ? "italic" : ""
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[9px] font-bold tracking-[0.3em] text-[#8d6551]">
                      {item.category}
                    </p>
                  </div>

                  <div
                    className="flex shrink-0 gap-0.5 pt-1 text-[#70271b]"
                    aria-label="Five star rating"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={13}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[#694437] sm:text-[15px]">
                  “{item.text}”
                </p>
              </motion.div>
            ))}
          </div>

          {/* Community stats card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.025 }}
            className="relative z-20 mx-auto mt-3 flex w-[90%] max-w-[360px] items-center gap-4 rounded-2xl bg-[#4b160f] px-5 py-5 text-[#ffe482] shadow-xl sm:ml-0 sm:w-[78%] sm:px-6"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5">
              <div className="relative">
                <ChartNoAxesColumnIncreasing
                  size={33}
                  strokeWidth={2.5}
                />
                <TrendingUp
                  size={17}
                  className="absolute -right-1 -top-2"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <div className="h-12 w-px bg-[#d7b95b]/60" />

            <div>
              <p className="text-4xl font-black leading-none tracking-tight sm:text-5xl">
                100K+
              </p>
              <p className="mt-2 text-sm text-[#ffeab6]">
                Creator community
              </p>
            </div>
          </motion.div>

          {/* Decorative floating icon */}
          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -bottom-5 right-2 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e9c767] bg-[#fff9e6] text-[#b77b21] shadow-lg"
          >
            <Users size={25} />
          </motion.div>

          <div className="absolute -left-4 top-[43%] text-[#7a2b1d]">
            <Zap size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}