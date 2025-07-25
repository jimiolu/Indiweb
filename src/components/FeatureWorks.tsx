"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CircleArrowOutUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  url: string;
}

const projects = [
  {
    title: "Launching a Web Application With a Rapid Action Team",
    category: "Application Engineering",
    imageUrl: "/projects/kleos.png",
    description:
      "A dashboard platform to support operations for vet clinics, breeders, and administrators.",
    url: "/projects/rapid-app-launch",
  },
  {
    title: "Expanding ML Framework for Revenue Growth",
    category: "Artificial Intelligence",
    imageUrl: "/projects/kleos.png",
    description:
      "Integrated advanced ML pipelines to increase forecasting precision and drive growth.",
    url: "/projects/ml-revenue-growth",
  },
  {
    title: "Elevating Cloud Security Score to 95% in 180 Days",
    category: "Cloud Engineering",
    imageUrl: "/projects/kleos.png",
    description:
      "Audited and transformed cloud architecture to meet top security benchmarks.",
    url: "/projects/cloud-security-score",
  },
  {
    title: 'Building a "Liquid Data Platform"',
    category: "Artificial Intelligence",
    imageUrl: "/projects/kleos.png",
    description:
      "Created a real-time analytics system with flexible data architecture and visualization.",
    url: "/projects/liquid-data-platform",
  },
  {
    title: "Revamping CMS for Scale",
    category: "Data & Analytics",
    imageUrl: "/projects/kleos.png",
    description:
      "Redesigned CMS to support hyper-growth and handle millions of users.",
    url: "/projects/cms-revamp",
  },
  {
    title: "Uplifting Uptime by 80% With Azure",
    category: "Cloud Engineering",
    imageUrl: "/projects/kleos.png",
    description:
      "Migrated infrastructure and implemented uptime solutions on Microsoft Azure.",
    url: "/projects/database-uptime",
  },
];

const FeatureWorks = () => {
  return (
    <section id="portfolio" className="w-full py-24 text-white overflow-hidden">
      <div className="hero-container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Get all of your initiatives back on the table
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            From AI to cloud engineering, see how we help global teams ship
            fast, scale smart, and stay secure.
          </p>
        </div>

        {/* Seamless Loop Marquee */}
        <div className="space-y-16">
          <MarqueeRow projects={projects.slice(0, 4)} direction="left" />
          <MarqueeRow projects={projects.slice(2)} direction="right" />
        </div>
      </div>
    </section>
  );
};

// MARQUEE ROW
const MarqueeRow = ({
  projects,
  direction = "left",
}: {
  projects: Project[];
  direction?: "left" | "right";
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-max animate-marquee ${
          direction === "right" ? "animate-marquee-reverse" : ""
        }`}
      >
        {[...projects, ...projects].map((project, index) => (
          <ProjectCard key={index + project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

// CARD
const ProjectCard = ({
  title,
  category,
  imageUrl,
  description,
  url,
}: {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  url: string;
}) => {
  return (
    <Link href={url} target="_blank">
      <div className="relative group w-[320px] sm:w-[350px] md:w-[400px] xl:w-[420px] h-[350px] flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800 hover:border-basecolor transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-emerald-500/20 mx-3">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            fill
            priority
            sizes="100%"
            alt={title}
            className="object-cover size-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        </div>
        <div className="absolute bottom-0 z-10 p-5">
          <span className="text-basecolor text-xs font-semibold uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-lg font-bold mt-1 leading-tight">{title}</h3>
        </div>
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/80 text-white flex flex-col gap-4 items-center justify-center p-6 text-sm text-center transition-opacity duration-300">
          {description}
          <div className="flex items-center gap-2 text-basecolor">
            <span className="font-semibold">View Live Project</span>
            <CircleArrowOutUpRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureWorks;
