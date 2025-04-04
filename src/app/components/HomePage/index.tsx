import React, { useEffect } from "react";
import WhyChooseLynk from "./WhyChooseLynk";
import TabSwitch from "./tabSwitch";
import LandingHero from "./HeroSection/LandingHero";
import LMSFeatures from "./LMSFeatures/LMSFeatures";
import LMSBenefits from "./LMSBenifits/LMSBenifits";
import FAQSection from "./FAQSeaction";
import LMSOptions from "./LMSOptions/LMSOptions";
import QualitySection from "./QualitySection/QualitySection";
import LMSComparisonTable from "./TableComponent";

const HomePage = () => {

  useEffect(() => {
    const handleHashChange = () => {
      const elementId = location.hash.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    if (location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      <div className="w-full bg-gray-50 px-4">
        <div className="flex items-center h-screen min-h-[800px] md:min-h-auto max-h-[1053px] w-full pt-16 mx-auto max-w-6xl">
          <LandingHero />
        </div>
      </div>
      <LMSFeatures />
      <TabSwitch />
      <WhyChooseLynk />
      <LMSOptions />
      <QualitySection />
      <LMSBenefits />
      <LMSComparisonTable />
      <div className="w-full  bg-gray-50">
        <FAQSection />
      </div>
    </div>
  );
};

export default HomePage;
