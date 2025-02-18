import React from "react";
import LMSLanding from "./LMSLanding/LMSLanding";
import LMSProductPage from "./LMSDescription/LMSProductPage";
import MarketGapAnalysis from "./MarketGapAnalysis";
// import TrainingPlatform from "./TrainingPlatform";
import JourneySection from "./journeySection";
import LMSFeatures from "./LMSFeatures";
import WhatYouGetSection from "./WhatYouGetSection";
import TrainingSection from "./TrainingSection";
import LMSQualitySection from "./LMSQualitySection";
import FAQSection from "./FAQSeaction";

const ContactPage = () => {
  return (
    <div>
      <LMSLanding/>
      <JourneySection/>
      <LMSProductPage/>
      <LMSFeatures/>
      <MarketGapAnalysis/>
      {/* <TrainingPlatform/> */}
      <LMSQualitySection/>
      <TrainingSection/>
      <WhatYouGetSection/>
      <FAQSection/>
    </div>
  );
};

export default ContactPage;
