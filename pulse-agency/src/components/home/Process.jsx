
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your brand, audience, and business goals.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    description: "Build a tailored growth plan that fits your vision.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Create",
    description: "Produce engaging campaigns and compelling content.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Optimize",
    description: "Analyze performance and improve results continuously.",
    icon: TrendingUp,
  },
];

export default function Process() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#ffebaa] px-5 py-16 text-[#4b160f] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-[#e4c46d]/40 sm:h-[440px] sm:w-[440px]">
        <div className="absolute inset-4 rounded-full border border-[#e4c46d]/30" />
        <div className="absolute inset-8 rounded-full border border-[#e4c46d]/25" />
      </div>

      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-[#fff5d0] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <div className="mb-4 flex items-center justify-center gap-2 text-[#986322]">
              <Sparkles size={17} />
              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                Our Process
              </span>
              <Sparkles size={17} />
            </div>

            <h2 className="font-serif text-4xl font-black italic tracking-tight text-[#4b160f] sm:text-5xl md:text-6xl">
              How We Work
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 72 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-5 h-1 rounded-full bg-[#d5a23d]"
            />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#79513b] sm:text-base">
              A simple, strategic process that turns creative ideas into
              meaningful brand growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <ol
            ref={ref}
            className="relative grid grid-cols-4 gap-6 pt-3"
          >
            {/* Base line */}
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-[43px] h-[3px] rounded-full bg-[#4b160f]/10"
            />

            {/* Animated progress line */}
            <motion.div
              aria-hidden="true"
              style={{ width: lineWidth }}
              className="absolute left-[12.5%] top-[43px] h-[3px] max-w-[75%] rounded-full bg-[#c58b2e]"
            />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 flex h-[62px] w-[62px] items-center justify-center rounded-full border-[5px] border-[#ffebaa] bg-[#4b160f] text-lg font-extrabold text-[#fff0b4] shadow-lg shadow-[#4b160f]/15"
                  >
                    {step.number}
                  </motion.div>

                  {/* Step card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="mt-7 flex h-full w-full flex-col items-center rounded-2xl border border-[#d8b76c]/50 bg-[#fff7dc]/80 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#70401d]/10 lg:p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7e4a5] text-[#6b281b]">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a27432]">
                      Step {index + 1}
                    </p>

                    <h3 className="text-xl font-extrabold tracking-tight text-[#4b160f] lg:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#79513b]">
                      {step.description}
                    </p>

                    <div className="mt-5 h-[2px] w-8 rounded-full bg-[#d5a23d] transition-all duration-300 hover:w-14" />
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <ol className="relative space-y-7 pl-2">
            {/* Vertical base line */}
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[27px] top-7 w-[3px] rounded-full bg-[#4b160f]/10"
            />

            {/* Animated vertical line */}
            <motion.div
              aria-hidden="true"
              style={{ height: lineHeight }}
              className="absolute left-[27px] top-7 w-[3px] rounded-full bg-[#c58b2e]"
            />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative grid grid-cols-[52px_minmax(0,1fr)] items-start gap-4"
                >
                  {/* Number circle */}
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 mt-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border-4 border-[#ffebaa] bg-[#4b160f] text-sm font-extrabold text-[#fff0b4] shadow-md"
                  >
                    {step.number}
                  </motion.div>

                  {/* Content card */}
                  <div className="rounded-2xl border border-[#d8b76c]/50 bg-[#fff7dc]/90 p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7e4a5] text-[#6b281b]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a27432]">
                      Step {index + 1}
                    </p>

                    <h3 className="text-xl font-extrabold text-[#4b160f]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#79513b]">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="text-sm font-medium text-[#79513b] sm:text-base">
            <span className="font-bold text-[#4b160f]">
              Four steps. One goal.
            </span>{" "}
            Growing your brand, together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
