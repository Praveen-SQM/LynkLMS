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
        <div
          className="flex items-center w-full mx-auto max-w-6xl min-h-[798px] sm:min-h-[798px] 3xl:min-w-[1590px]
          xl:min-w-[1100px] lg:max-w-[900px] md:max-w-[700px]
  sm:pt-[2.625rem] sm:pb-[1.5rem] 
  md:pt-[12rem] md:pb-[9rem] 
  lg:pt-[8rem] lg:pb-[7.5rem] 
  3xl:pt-[16rem] 3xl:pb-[14.1875rem]"
        >
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
      <div className="w-full bg-gray-50">
        <FAQSection />
      </div>
    </div>
  );
};

export default HomePage;