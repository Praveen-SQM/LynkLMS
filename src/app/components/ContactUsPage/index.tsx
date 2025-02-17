import React from "react";
import LMSLanding from "./LMSLanding/LMSLanding";
import LMSProductPage from "./LMSDescription/LMSProductPage";
import { NavbarTop } from "../HomePage/NavbarMenu/Navbar";
import MarketGapAnalysis from "./MarketGapAnalysis";
import TrainingPlatform from "./TrainingPlatform";

const ContactPage = () => {
  return (
    <div>
      <NavbarTop/>
      <LMSLanding/>
      <LMSProductPage/>
      <MarketGapAnalysis/>
      {/* <TrainingPlatform/> */}
    </div>
  );
};

export default ContactPage;
