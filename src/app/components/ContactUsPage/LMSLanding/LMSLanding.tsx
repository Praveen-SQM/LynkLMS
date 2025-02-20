import React from "react";
import MarketingContent from "./MarketingContent";
// import DashboardPreview from "./DashboardPreview";
import { FloatingBackground } from "./FloatingTriangles";
import Image from "next/image";
import dashboardImage from "@/app/utilities/images/Dashboard_image.svg";
import dashboardCard from "@/app/utilities/images/Dashboard_card.svg";

const LMSLanding = () => {
  return (
    <div className="relative xl:min-h-screen bg-[#433BDB] bg-gradient-to-br from-[#433BDB] to-[#635BFF] overflow-hidden w-full">
      <FloatingBackground />
      <div className="md:pl-[5vw] h-full xl:pl-[12vw] md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-28">
          {/* Left Column - Marketing Content */}
          <MarketingContent />

          {/* Right Column - Dashboard Preview */}
          {/* <DashboardPreview /> */}
          <div className="flex flex-col justify-between">
            <p></p>
            <div className="relative w-full ml-[30vw] md:ml-0">
              <Image
                src={dashboardCard}
                alt="dashboard card"
                className="absolute top-[40%] -left-1/4 w-1/2 h-auto object-contain"
              />
              <Image
                src={dashboardImage}
                alt="dashboard background"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSLanding;
