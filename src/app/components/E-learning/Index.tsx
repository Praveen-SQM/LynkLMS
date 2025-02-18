import React from "react";
import TrainingContent from "./ELearning";
import DevelopmentProcessSection from "./DevelopmentProcessSection";
import BenefitsSection from "./BenefitsSection";
import ELearningLanding from "./ELearningLanding";

const ELearning = () => {
  return (
    <div>
      {" "}
      <ELearningLanding />
      <TrainingContent />
      <DevelopmentProcessSection/>
      <BenefitsSection/>
    </div>
  );
};

export default ELearning;
