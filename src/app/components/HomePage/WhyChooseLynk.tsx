import { CheckCircle2Icon } from "lucide-react";
import React from "react";
interface FeatureItem {
  title: string;
  points: string[];
  image: string;
}
import feature1 from "@/app/utilities/images/feature-1.svg";
import Image from "next/image";

const features: FeatureItem[] = [
  {
    title: "Full Ownership",
    points: [
      "White-labeled for complete brand customization",
      "Ensures control over design and features",
      "No dependency on third-party branding",
    ],
    image: feature1,
  },
  {
    title: "Scalable & Advance Insights",
    points: [
      "Seamlessly grow with new features, users, and tools",
      "Analytics and reporting to track effectiveness",
      "Supports growing user bases and tools",
    ],
    image: feature1,
  },
  {
    title: "Compliance Ready",
    points: [
      "Supports SCORM and xAPI standards",
      "Ensures smooth integration with e-learning tools",
      "Meets global compliance requirements",
    ],
    image: feature1,
  },
  {
    title: "Coast Effective & Engagement Focused",
    points: [
      "Saves 41% compared to subscription-based models",
      "Reduces long-term operational costs",
      "Provides better ROI with needed infrastructure",
    ],
    image: feature1,
  },
];
const WhyChooseLynk = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-[72px]">
      <div className="xl:w-[1110px] xl:h-[1259px] gap-[24px] mx-auto">
        <div className="h-[100px] xl:w-[670px] xl:h-[137px] mx-auto">
          <h2 className=" font-bold text-[24px] md:text-[32px] lg:text-[42px] xl:leading-[57.37px] text-center">
            Why choose{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#635BFF] to-[#EE3CD1] bg-clip-text text-transparent">
              Lynk
            </span>
            ?
          </h2>
          <p className="xl:mt-[24px] font-manrope font-normal md:text-[14px] lg:text-[16px] leading-[28px] text-center">
            Empowering businesses with a future-ready, customizable learning
            platform built for scalability, insights, and results.
          </p>
        </div>

        {/* feature cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-[72px] gap-10 lg:gap-24">
          {features?.map((feature, index) => (
            <div className="w-full flex justify-center">
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-[42px] p-[12px] pb-[27px] max-w-[350px] lg:max-w-[485.5px]"
              >
                <section className="flex flex-col gap-[37px]">
                  <div
                    className="flex justify-center p-6 px-12 pb-0 rounded-[24px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(184, 181, 245, 0.8) 0%, rgba(250, 251, 255, 0.8) 100%)",
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt=""
                      className="w-[340px] h-[180px] lg:h-[260px] rounded-[24px]"
                    />
                  </div>
                  <div>
                    <h1 className="font-family-Manrope font-[700] xl:text-[20px] xl:leading-[28px] xl:tracking-[-0.28px] mb-[9px] md:mb-[12px] lg:mb-[23px] xl:mb-[23px]">
                      {feature.title}
                    </h1>
                    <div className="flex flex-col gap-[6px] md:gap-[8px] lg:gap-[12px]">
                      {feature.points.map((point, index) => (
                        <p
                          key={index}
                          className="flex justify-start font-Manrope font-semibold text-[14px] leading-[19.12px] tracking-[-0.28px]  text-[#1d1a27b9]"
                        >
                          <CheckCircle2Icon className="mr-2 h-4 w-4 text-green-500"/>{" "}
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default WhyChooseLynk;
