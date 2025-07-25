"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Founder, FemTech Africa",
    avatar: "/images/founder-avatar.jpeg",
    companyLogo: "/brands/clafiya.png",
    rating: 5,
    quote:
      "Working with Indisis was a game-changer. Their speed, precision, and startup mindset made our MVP launch feel effortless.",
  },
  {
    name: "Daniel K.",
    role: "CEO, Payloop",
    avatar: "/images/founder-avatar.jpeg",
    companyLogo: "/brands/brandfetch.svg",
    rating: 4,
    quote:
      "Indisis Studio felt like a true tech co-founder. They didn’t just write code — they helped shape our entire product direction.",
  },
  {
    name: "Maya N.",
    role: "Product Lead, MediqAI",
    avatar: "/images/founder-avatar.jpeg",
    companyLogo: "/brands/geeg.png",
    rating: 5,
    quote:
      "Their engineering team plugged into our stack instantly. Clean handoffs, no micromanaging. Just world-class execution.",
  },
  {
    name: "Samuel E.",
    role: "CTO, Credvia",
    avatar: "/images/founder-avatar.jpeg",
    companyLogo: "/brands/slack.png",
    rating: 5,
    quote:
      "We’ve tried agencies before — Indisis blew them out of the water. Efficient, dependable, and incredibly sharp.",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-[#0b0b0e] text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 bg-gradient-to-r from-basecolor to-white text-transparent bg-clip-text">
          Loved by founders across industries
        </h2>

        <div className="relative w-full h-full">
          <div className="flex flex-wrap justify-center md:justify-evenly gap-8 md:gap-12 relative">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`bg-[#16161a] rounded-2xl shadow-md max-w-sm w-full px-6 py-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                  idx % 2 === 0 ? "md:translate-y-4" : "md:-translate-y-4"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 text-basecolor mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star fill="currentColor" key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  “{item.quote}”
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border border-gray-600"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                  </div>
                  <Image
                    src={item.companyLogo}
                    alt="Company Logo"
                    width={50}
                    height={50}
                    className="w-16 grayscale"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[80%] right-[-80px] w-96 h-96 bg-basecolor opacity-20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-[10%] left-[-60px] w-80 h-80 bg-white opacity-10 blur-2xl rounded-full pointer-events-none" />
    </section>
  );
};

export default Testimonial;
