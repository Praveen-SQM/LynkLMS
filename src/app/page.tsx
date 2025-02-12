"use client";

import LandingHero from "@/components/ui/HeroSection/LandingHero";
import { NavbarTop } from "@/components/ui/NavbarMenu/Navbar";
import LMSFeatures from "@/components/ui/LMSFeatures/LMSFeatures";
export default function Home() {
  return (
    <div className="w-full">
      <NavbarTop />
      <div className="w-full bg-gray-50 px-4">
        <div className="flex items-center h-screen max-h-[1053px] w-full pt-16 mx-auto max-w-6xl">
          <LandingHero />
        </div>
      </div>
      <LMSFeatures />
    </div>
  );
}
