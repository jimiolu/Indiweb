// app/components/MoniepointVideoCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Thumbnail() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
   <section className="hero-container">
     <div className="max-w-5xl mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 capitalize">
          Hear It From Our Clients
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Their experiences reflect the quality and impact of our work.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-video">
        {isPlaying ? (
          <video
            src="/moniepoint-video.mp4"
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full bg-black">
            <Image
              src="https://res.cloudinary.com/da7fhquzl/image/upload/v1753602460/samples/people/kitchen-bar.jpg"
              alt="Indisis Video Thumbnail"
              fill
              className="object-cover"
            />

            {/* Overlay content */}
            <div
              className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div className="w-20 h-20 bg-basecolor rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                <Play className="text-primary w-8 h-8" />
              </div>
            </div>

            {/* Text overlays */}
            <div className="absolute bottom-6 left-6 text-basecolor max-w-sm hidden md:block">
              <p className="text-sm font-medium">
                From small businesses to large companies, we scale product
                faster than you could ever imagine.
              </p>
            </div>

            <div className="absolute top-6 right-6 text-right text-white">
              <div className="flex items-center justify-end space-x-2">
                <Image
                  src="/logo/logo.svg"
                  alt="Indisis"
                  width={100}
                  height={100}
                  className="size-full max-w-26"
                />
                {/* <span className="font-bold">Indisis</span> */}
              </div>
              {/* <p className="mt-1 text-sm hidden md:block">
                help{" "}
                <span className="font-bold text-basecolor text-xl">
                  BUSINESSES
                </span>{" "}
                <br /> Scale Across Borders
              </p> */}
            </div>
          </div>
        )}
      </div>
    </div>
   </section>
  );
}
