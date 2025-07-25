"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import Link from "next/link";
import { buttonSecondary } from "./Button";

const FoundersNote = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative w-full bg-[#0c0c0f] text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 capitalize">
            Founder&apos;s Note
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from our founder and know how we work
          </p>
        </div>

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-basecolor to-white">
            Building a product? <br />
            <span className="text-gray-400 text-2xl">
              It shouldn&apos;t feel this hard.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed transition-all duration-500 ease-in-out text-justify">
          <p>
            You&apos;ve got the idea. Maybe some traction. Funding, even. But
            once you get to the part where you actually have to ship, things get
            messy. Hiring developers takes time you don&apos;t have. Managing
            them? That&apos;s a full-time job you never signed up for. Maybe
            you&apos;ve tried freelancers, agencies, or even brought on a dev or
            two yourself.
          </p>
          <p>
            Still deadlines slip. Slack threads go quiet. And your product is
            stuck in development hell.{" "}
            <strong>I know the feeling. I&apos;ve lived it.</strong>
          </p>

          {/* Hidden Content */}
          <div
            className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden space-y-6 mt-2">
              <p>
                At <strong>Indisis</strong>, we started this studio because
                we&apos;ve been on the other side as founders, builders, and
                operators. We know how critical it is to move fast and get
                things right the first time.
                <br />
                <br />
                That&apos;s why we built something different. We&apos;re not an
                “agency” agency. We&apos;re a product-minded dev team that plugs
                in fast, communicates clearly, and actually ships. No
                babysitting. No fluff. Just senior engineers who&apos;ve
                launched and scaled products for{" "}
                <strong>
                  VC-backed startups, solo founders, and fast-growing teams
                </strong>{" "}
                alike. Whether you&apos;re building your MVP, scaling your SaaS,
                or fixing something that&apos;s already gone sideways, we can
                help.
              </p>
              <p>
                We&apos;re not your typical dev shop. We&apos;re startup
                engineers who plug in fast, ship consistently, and treat your
                product like our own no drama, no hand-holding, just high-output
                teams.
              </p>
              <p>
                We&apos;ve built for companies like{" "}
                <strong>GatewayX, FounderOS, Deep View,</strong>
                and over <strong>100 more</strong>. From full-stack to mobile,
                AI/ML to data, we&apos;ve assembled a global team of elite
                engineers who care as much about your product as you do.
                <br />
                <br />
                Fair pricing. Flexible contracts. No long-term risk.
                <br />
                <br />
                Take a look around. Browse our work. Ask to talk to our past
                clients. Or just shoot us a message and tell us what you&apos;re
                building.
                <br />
                <br />
                <strong>Let&apos;s make it real.</strong>
              </p>
            </div>
          </div>

          {/* Read More Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-basecolor font-medium hover:underline transition-all cursor-pointer"
          >
            {expanded ? "Read Less" : "Read More"}
            {expanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Author */}
          <div className="mt-12 flex items-center gap-6">
            <Image
              src="/images/founder-avatar.jpeg"
              alt="Samee Hassan"
              width={60}
              height={60}
              className="rounded-full border border-gray-600"
            />
            <div>
              <p className="text-base font-medium text-white">Jimi Oluwale</p>
              <p className="text-sm text-gray-400">
                Founder & CTO, Indisis Lab
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link href="#contact" className={buttonSecondary}>
              <span>Hire elite dev team</span>
              <MoveRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-basecolor opacity-20 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
};

export default FoundersNote;
