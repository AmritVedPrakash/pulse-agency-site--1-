
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

const blogs = [
  {
    number: "01",
    category: "INFLUENCER MARKETING",
    title: "How Influencer Marketing Helps D2C Brands Grow",
    description:
      "Discover how the right creators can build trust, expand your reach, and turn audiences into loyal customers.",
    date: "12 Oct, 2026",
    readTime: "5 min read",
  },
  {
    number: "02",
    category: "SOCIAL MEDIA",
    title: "Building a Social Media Presence That Stands Out",
    description:
      "Learn how consistent content, creative storytelling, and audience engagement can strengthen your brand identity.",
    date: "08 Oct, 2026",
    readTime: "6 min read",
  },
  {
    number: "03",
    category: "PERFORMANCE MARKETING",
    title: "Turning Ad Spend Into Measurable Growth",
    description:
      "Explore smarter campaign strategies, audience targeting, and performance insights that help improve ROI.",
    date: "04 Oct, 2026",
    readTime: "7 min read",
  },
  {
    number: "04",
    category: "BRAND STRATEGY",
    title: "What Makes a Brand Memorable in a Crowded Market?",
    description:
      "Understand how brand positioning, visual identity, and authentic communication help businesses stand apart.",
    date: "29 Sep, 2026",
    readTime: "4 min read",
  },
  {
    number: "05",
    category: "CONTENT CREATION",
    title: "Creating Content That Connects and Converts",
    description:
      "Explore practical ways to create engaging content that captures attention and inspires meaningful action.",
    date: "24 Sep, 2026",
    readTime: "5 min read",
  },
  {
    number: "06",
    category: "DIGITAL GROWTH",
    title: "The Essential Digital Growth Strategy for Modern Brands",
    description:
      "Bring content, creators, and paid campaigns together with a strategy designed for sustainable business growth.",
    date: "18 Sep, 2026",
    readTime: "8 min read",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-[#8b6225]">
            <Sparkles size={17} />
            <span className="text-xs font-bold uppercase tracking-[0.28em]">
              Ideas & Insights
            </span>
            <Sparkles size={17} />
          </div>

          <h2 className="font-serif text-4xl font-black italic tracking-tight text-[#4b160f] sm:text-5xl md:text-6xl">
            Our Blog
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 76 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#d5a23d]"
          />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Fresh ideas, expert insights, and practical strategies to help
            your brand stand out and grow in the digital world.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {blogs.map((blog, index) => {
            const isYellow = index % 2 !== 0;

            return (
              <motion.article
                key={blog.number}
                variants={cardVariants}
                whileHover={{ y: -7 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                  isYellow
                    ? "border-[#ffe482] bg-[#ffe482] hover:border-[#e4c95d]"
                    : "border-[#eee5d7] bg-white hover:border-[#d5a23d]/70"
                } hover:shadow-[0_18px_45px_rgba(75,22,15,0.09)]`}
              >
                {/* Card Top */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#8b6225]">
                    {blog.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-[#4b160f] transition-colors duration-300 group-hover:bg-[#4b160f] group-hover:text-white">
                    <BookOpen size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Category */}
                <span className="mb-3 text-[10px] font-extrabold leading-5 tracking-[0.16em] text-[#8b6225]">
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-extrabold leading-snug text-[#4b160f] transition-colors duration-300 group-hover:text-[#8b4c15] sm:text-2xl">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-6 text-[#624b3e]">
                  {blog.description}
                </p>

                {/* Metadata */}
                <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#4b160f]/15 pt-4 text-xs text-[#79513b]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {blog.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {blog.readTime}
                  </span>
                </div>

                {/* Read More */}
               

                {/* Bottom Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#4b160f] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="text-sm text-gray-600 sm:text-base">
            Ideas that inspire. Strategies that deliver.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
