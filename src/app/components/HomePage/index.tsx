import React from "react";
import WhyChooseLynk from "./WhyChooseLynk";
import TabSwitch from "./tabSwitch";
import { NavbarTop } from "./NavbarMenu/Navbar";
import LandingHero from "./HeroSection/LandingHero";
import LMSFeatures from "./LMSFeatures/LMSFeatures";

const HomePage = () => {
  return (
    <div>
      <NavbarTop />
      <div className="w-full bg-gray-50 px-4">
        <div className="flex items-center h-screen max-h-[1053px] w-full pt-16 mx-auto max-w-6xl">
          <LandingHero />
        </div>
      </div>
      <LMSFeatures />
      <WhyChooseLynk />
      <TabSwitch />
    </div>
  );
};

export default HomePage;
