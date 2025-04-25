import React from "react";
interface FeatureItem {
  title: string;
  points: string[];
  image: string;
}
import feature1 from "@/app/utilities/images/feature-1.svg";
import feature2 from "@/app/utilities/images/feature-2.webp";
import feature3 from "@/app/utilities/images/feature-3.svg";
import feature4 from "@/app/utilities/images/feature-4.svg";

import tickIcon from "@/app/utilities/icons/tick_green.svg"
import Image from "next/image";

const features: FeatureItem[] = [
  {
    title: "Full Ownership",
    points: [
      "White-labeled for complete brand customization.",
      "Ensures control over design and features.",
      "No dependency on third-party branding.",
    ],
    image: feature1,
  },
  {
    title: "Scalable & Advance Insights",
    points: [
      "Seamlessly grow with new features, users, and tools.",
      "Analytics and reporting to track effectiveness.",
      "Supports growing user bases and tools.",
    ],
    image: feature2,
  },
  {
    title: "Compliance Ready",
    points: [
      "Supports SCORM and xAPI standards.",
      "Ensures smooth integration with e-learning tools.",
      "Meets global compliance requirements.",
    ],
    image: feature3,
  },
  {
    title: "Cost Effective & Engagement Focused",
    points: [
      "Saves $17,200–$34,400 compared to subscription-based models.",
      "Reduces long-term operational costs.",
      "Provides better ROI with owned infrastructure.",
    ],
    image: feature4,
  },
];
const WhyChooseLynk = () => {
  return (
    <section className="w-full bg-[#FAFAFA] xl:py-[72px] sm:py-[42px] 3xl:py-[120px] py-6 flex">
      <div className="xl:w-[1440px] 3xl:w-[1590px] lg:w-[950px]  mx-auto bg-[#FAFAFA] ">
        <div className="xl:w-[1110px] 3xl:w-[1590px] xl:h-[1259px] 3xl:h-[1700px] gap-[24px] mx-auto">
          <div className="xl:w-[670px] xl:h-[137px] sm:w-[564px] sm:h-[96px] w-[330px] h-[102px] mx-auto">
            <h2 className=" font-bold text-[#0A0A0A] 3xl:font-[600] 3xl:leading-[62px] 3xl:text-[52px] xl:text-[42px] xl:leading-[57.37px] sm:text-[32px] sm:leading-[43.7px] text-[24px] leading-[32.8px] text-center">
              Why choose{" "}
              <span className="bg-text-gradient text-transparent bg-clip-text">
                Lynk
              </span>
              ?
            </h2>
            <p className="xl:mt-[24px] 3xl:text-[20px] 3xl:font-[400] text-[#6B7280]  mt-3 font-manrope font-normal xl:text-[16px] xl:leading-[28px] text-[14px] leading-[19.12px] text-center">
              Empowering businesses with a future-ready, customizable learning platform built for
              scalability, insights, and results.
            </p>
          </div>

          {/* feature cards  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-[10rem] 3xl:gap-[6rem] xl:mt-[72px] sm:mt-[29px] mt-6">
            {features?.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] xl:rounded-[42px] sm:rounded-[30px] rounded-[20px] xl:p-[12px] sm:p-2 p-1 xl:w-[485.5px] lg:w-[100%] sm:w-[348.28px] 3xl:h-[auto] 3xl:w-[748px]  xl:h-[500px] sm:h-[400px] w-[340.3px] h-[400px]"
              >
                <section className="flex flex-col xl:gap-[37px] 3xl:gap-[54px] gap-[30px]">
                  <div
                    className="flex items-end justify-center xl:w-[461px] lg:w-[100%] 3xl:w-[724px] w-[332px] 3xl:h-[424px] xl:h-[291px] h-[210px] xl:rounded-[24px] rounded-[17px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(184, 181, 245, 0.8) 0%, rgba(250, 251, 255, 0.8) 100%)",
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt=""
                      className="xl:w-[340px] 3xl:w-[441.6897277832031px] 3xl:h-[331.23211669921875px] xl:h-[260px] lg:w- w-[251px] h-[188px] xl:rounded-[24px] rounded-[17px]"
                    />
                  </div>
                  <div>
                    <h1 className="font-family-Manrope font-bold 3xl:font-[600] xl:text-[20px] 3xl:text-[28px] xl:leading-[28px] text-[16px] leading-[21.9px] xl:tracking-[-0.28px] mb-[12px] 3xl:mb-[23px]">
                      {feature.title}
                    </h1>
                    <div className="flex flex-col xl:gap-[12px] 3xl:gap-[18px] gap-[8.64px] mb-[20px]">
                      {feature.points.map((point, index) => (
                        <p
                          key={index}
                          className="flex items-center justify-start font-Manrope font-semibold text-[14px] 3xl:font-[500] 3xl:text-[20px] tracking-[-0.28px] text-[#1D1A27CC]"
                        >
                         <Image src={tickIcon} alt="tickIcon" className="mr-2"/>
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLynk;
