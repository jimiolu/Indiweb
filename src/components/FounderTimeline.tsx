"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { buttonSecondary } from "./Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: "/icons/ideate.jpg",
    title: "Ideate",
    description:
      "Consult an idea, add missing capabilities, expand your team, or hand over a project – we’ve got you covered.",
  },
  {
    icon: "/icons/design.jpg",
    title: "Design",
    description:
      "Delightful user experiences crafted to solve real problems and drive metrics with beautiful interfaces.",
  },
  {
    icon: "/icons/dev.jpg",
    title: "Develop",
    description:
      "Build fast, scalable, and secure applications tailored to your exact business goals.",
  },
  {
    icon: "/icons/support.jpg",
    title: "Maintain",
    description:
      "We’re here 24/7 to keep your systems healthy while you scale and innovate.",
  },
  {
    icon: "/icons/scale.jpg",
    title: "Scale",
    description:
      "Expand boldly. Tech partnerships that adapt with your growing vision.",
    disabled: true,
  },
];

export default function FounderTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="text-white px-6 md:px-20 py-24 font-sans">
      <div className="hero-container grid md:grid-cols-[1fr_2fr] gap-20 items-start">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Founders helping founders
            <br />
            <span className="text-white/70">— minus the fluff</span>
          </h1>

          <Image
            src="/images/founder-avatar.jpeg"
            alt="Ali Raza"
            width={280}
            height={340}
            className="rounded-xl border border-white/10 shadow-xl"
          />

          <h3 className="text-2xl font-semibold mt-6">Jimi Oluwale</h3>
          <p className="text-green-400 text-sm mt-1">
            ● Connect with real human today
          </p>

          <Link href="/contact" className={`mt-6 ${buttonSecondary}`}>
            <span>Hire elite devs today</span>
            <MoveRight size={16} />
          </Link>
        </div>

        {/* Right Timeline */}
        <div ref={ref} className="relative flex flex-col gap-0 pl-6">
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-6 items-start">
              {/* Left icon with line connector */}
              <div className="flex flex-col items-center relative z-10">
                {/* Icon Box */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-md overflow-hidden bg-[#1A1A1A] border border-white/10`}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Vertical Line to Next */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={controls}
                    variants={{
                      visible: { height: "48px" },
                    }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="w-[2px] bg-white/20 mt-0.5"
                  />
                )}
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className={`pb-12 ${
                  step.disabled ? "opacity-40 pointer-events-none" : ""
                }`}
              >
                <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                <p className="text-gray-300 text-sm max-w-xl">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
