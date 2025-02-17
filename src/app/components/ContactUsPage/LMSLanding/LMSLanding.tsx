import React from "react";
import MarketingContent from "./MarketingContent";
import DashboardPreview from "./DashboardPreview";
import FloatingStatsCard from "./FloatingStatsCard";
import { FloatingBackground } from "./FloatingTriangles";

const LMSLanding = () => {
  return (
    <div className="relative min-h-screen bg-[#433BDB] bg-gradient-to-br from-[#433BDB] to-[#635BFF] overflow-hidden">
        <FloatingBackground/>
      <div className="md:pl-[5vw] xl:pl-[12vw] md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-28">
          {/* Left Column - Marketing Content */}
          <MarketingContent />

          {/* Right Column - Dashboard Preview */}
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
};

export default LMSLanding;
