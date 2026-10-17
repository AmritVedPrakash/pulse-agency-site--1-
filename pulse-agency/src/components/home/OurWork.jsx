
import React from "react";
import { motion } from "framer-motion";

// Manually import all 11 images
import work1 from "../../assets/ourwork/ourwork-1.png";
import work2 from "../../assets/ourwork/ourwork-2.png";
import work3 from "../../assets/ourwork/ourwork-3.png";
import work4 from "../../assets/ourwork/ourwork-4.png";
import work5 from "../../assets/ourwork/ourwork-5.png";
import work6 from "../../assets/ourwork/ourwork-6.png";
import work7 from "../../assets/ourwork/ourwork-7.png";
import work8 from "../../assets/ourwork/ourwork-8.png";
import work9 from "../../assets/ourwork/ourwork-9.png";
import work10 from "../../assets/ourwork/ourwork-10.png";
import work11 from "../../assets/ourwork/ourwork-11.png";

const workImages = [
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
  work10,
  work11,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-3xl font-extrabold tracking-tight text-[#4b160f] sm:text-5xl md:text-6xl">
            <span className="text-[#b17a25]">350+</span>
            <span>Brands Worked With</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 85 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#ffe482]"
          />
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white"
            >
              <img
                src={image}
                alt={`Brand portfolio ${index + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
                className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
