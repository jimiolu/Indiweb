"use client";

import { motion } from "framer-motion";
import { CheckCircle, Code2, Smartphone, Brain } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Automations",
    description:
      "We automate your workflows so you can scale without hiring 10 more people. Custom-built and done-for-you for profits.",
    icon: <CheckCircle size={40} />,
  },
  {
    id: "02",
    title: "Web Apps",
    description:
      "We design and develop fast, beautiful, and bulletproof web apps that actually work (and don’t crash on demo day).",
    icon: <Code2 size={40} />,
  },
  {
    id: "03",
    title: "Mobile Apps",
    description:
      "We build mobile apps that don’t crash, lag, or make users rage-quit. iOS or Android? Both? Doesn’t matter.",
    icon: <Smartphone size={40} />,
  },
  {
    id: "04",
    title: "AI/ML Solutions",
    description:
      "We help you sprinkle AI on your product – the useful kind, not the “ask me anything and I’ll hallucinate” kind.",
    icon: <Brain size={40} />,
  },
];

export default function Whatwedo() {
  return (
    <section id="services" className="hero-container py-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 capitalize">
          What we do so well
        </h2>
        <p className="text-gray-400 text-lg">Our devs are extremely good at</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-[#111] rounded-2xl p-6 hover:shadow-lg hover:bg-[#1a1a1a] transition duration-300 border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4 text-white">{service.icon}</div>
            <div className="text-basecolor font-semibold text-sm mb-1">
              {service.id}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
