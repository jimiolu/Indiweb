"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const caseStudies = [
  {
    name: "Tankee",
    image: "/projects/kleos.png",
    topics: "100 TOPICS",
    featured: true,
  },
  {
    name: "Cosmo",
    image: "/projects/kleos.png",
    topics: "",
    featured: false,
  },
  {
    name: "PayWith",
    image: "/projects/kleos.png",
    topics: "",
    featured: false,
  },
];

export default function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="case-studies"
      className="text-white py-24 px-6 md:px-20 font-sans"
    >
      <div className="hero-container grid md:grid-cols-[1fr_3fr] gap-12 items-start">
        {/* Left Text Section */}
        <div className="space-y-6 sticky top-24 self-start">
          <h2 className="text-4xl font-semibold leading-tight">
            See how
            <br />
            we solve things
          </h2>
          <button className="bg-basecolor hover:bg-basecolor/95 text-primary font-medium px-5 py-2.5 rounded-md transition">
            Featured Case Study
          </button>
        </div>

        {/* Right Case Studies */}
        <div className="flex flex-col md:flex-row gap-6 h-[500px]">
          {caseStudies.map((cs, index) => {
            const isHovered = hoveredIndex === index;
            const isMiniCard = !cs.featured;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  flexGrow: cs.featured ? 1 : isHovered ? 1 : 0.33,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`
                  relative overflow-hidden rounded-[20px] group
                  flex flex-col justify-end cursor-pointer
                  transition-all duration-300 ease-in-out
                  ${cs.featured ? "min-w-0" : "min-w-[100px]"}
                `}
              >
                <Image
                  src={cs.image}
                  alt={cs.name}
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-lg font-semibold">{cs.name}</h3>
                  {cs.topics && (
                    <p className="text-sm text-gray-300">{cs.topics}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center mt-20 text-gray-400 text-sm md:text-base">
        How our clients went from <span className="italic">“what if”</span>{" "}
        to&nbsp;
        <span className="italic text-white">“holy sh*t”</span>
      </div>
    </section>
  );
}
