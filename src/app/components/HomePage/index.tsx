import React from "react";
import WhyChooseLynk from "./WhyChooseLynk";
import TabSwitch from "./tabSwitch";
import { NavbarTop } from "./NavbarMenu/Navbar";
import LandingHero from "./HeroSection/LandingHero";
import LMSFeatures from "./LMSFeatures/LMSFeatures";
import LMSOptions from "./LMSOptions/LMSOptions";
import QualitySection from "./QualitySection/QualitySection";
import Footer from "./footer";

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
      <LMSOptions/>
      <QualitySection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
