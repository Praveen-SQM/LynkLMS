import React from "react";
import JourneySection from "./journeySection";
import LMSFeatures from "./LMSFeatures";
import WhatYouGetSection from "./WhatYouGetSection";
import TrainingSection from "./TrainingSection";
import LMSQualitySection from "./LMSQualitySection";

const ContactPage = () => {
  return (
    <div>
      <JourneySection/>
      <LMSFeatures/>
      <LMSQualitySection/>
      <TrainingSection/>
      <WhatYouGetSection/>
    </div>
  );
};

export default ContactPage;
