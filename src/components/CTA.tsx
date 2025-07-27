"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-24 relative overflow-hidden">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Let’s build something{" "}
          <span className="text-basecolor">legendary</span> together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-base md:text-lg mb-10"
        >
          Work with senior developers who move fast, solve real problems, and
          help you scale like a startup rocketship.
        </motion.p>

        <Link
          href="https://indisis.fillout.com/business"
          target="_blank"
          className="bg-basecolor hover:bg-basecolor/90 transition-all text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 focus:outline-none"
        >
          🚀 Hire elite devs now
        </Link>
      </div>

      {/* Optional glowing backdrop */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#0050FF]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
    </section>
  );
}
