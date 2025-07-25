import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CTA";
import FeaturedWorks from "@/components/FeatureWorks";
import FoundersNote from "@/components/FounderNote";
import FounderTimeline from "@/components/FounderTimeline";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
// import { HeroParallaxDemo } from '@/components/HeroParallax'
import Thumbnail from "@/components/Thumbnail";
import TrustedCompanies from "@/components/Trusted";
import Whatwedo from "@/components/ui/Whatwedo";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <TrustedCompanies />
      <FeaturedWorks />
      <Whatwedo />
      {/* <HeroParallaxDemo /> */}
      <FoundersNote />
      <Thumbnail />
      <Testimonial />
      <FounderTimeline />
      <CaseStudies />
      <CallToAction />
    </div>
  );
};

export default Home;
