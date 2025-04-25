import React from "react";
import Image from "next/image";
import logoWhite from "@/app/utilities/images/logo_white.svg";
import unifiedSolution from "@/app/utilities/icons/Group 2.svg";
import Star from "@/app/utilities/icons/svg-image-10.svg";
import Building2 from "@/app/utilities/icons/svg-image-11.svg";
import CircleDollarSign from "@/app/utilities/icons/svg-image-12.svg";
const benefitsData = [
  {
    icon: unifiedSolution,
    title: "Unified Solution",
    description:
      "Single provider for technology and content ensures consistency.",
  },
  {
    icon: Star,
    title: "Enhanced Engagement",
    description:
      "Content complements LMS capabilities, keeping learners engaged.",
  },
  {
    icon: Building2,
    title: "Scalability",
    description: "Both LMS and content can grow with your organization.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost Efficiency",
    description:
      "Bundling reduces overall costs compared to sourcing separately.",
  },
];
const LMSBenefits = () => {
  return (
    <div className="max-w-6xl mx-auto xl:px-0 px-4 py-[120px] 3xl:min-w-[1590px]">
      <div className="text-center space-y-4 mb-12 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-[600] 3xl:text-[52px] 3xl:max-w-[782px] 3xl:leading-[100%]">
        <span className="bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
  Combine
</span>{" "}
          LMS and Content for Maximum Impact
        </h1>
        <p className="3xl:max-w-[782px] w-full text-sm sm:text-base lg:max-w-2xl text-[#4A4852] 3xl:text-[20px] 3xl:font-[400] 3xl:leading-[32px]">
          Our LMS and e-learning content development services work hand-in-hand
          to create a seamless and efficient training ecosystem.
        </p>
      </div>
      <div className="relative grid sm:grid-cols-2 gap-20 sm:gap-24 mt-16">
        {/* Center Icon with Concentric Circles */}
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 3xl:w-[300px] 3xl:h-[300px] ">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full bg-indigo-50 animate-expand-outer"></div>
          {/* Middle circle */}
          <div className="absolute inset-12 rounded-full bg-indigo-100 animate-expand-middle"></div>
          {/* Inner circle with icon */}
          <div className="absolute inset-12 3xl:inset-24 rounded-full bg-indigo-500 flex items-center justify-center animate-expand-inner">
            <Image src={logoWhite} alt="Icon" width={60} height={60} />
          </div>
        </div>
        {/* Benefits Cards */}
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className={`flex h-[100px] sm:h-[160px] item-center ${
              index % 2 !== 0 && "justify-end"
            } `}
          >
            <div
              key={index}
              className="absolute z-10 bg-white rounded-2xl p-4 h-full max-h-36 sm:p-6 shadow-2xl shadow-gray-200 max-w-[230px] lg:max-w-[350px] 3xl:max-w-[387px]"
            >
              <div className="flex items-center gap-4 font-semibold mb-2">
  <div className="p-2 bg-[#534BEF] bg-opacity-[24.71%] w-fit rounded-md">
    <Image
      src={benefit.icon}
      alt={benefit.title}
      className="h-6 w-6"
      width={24}
      height={24}
    />
  </div>
  <h3 className="text-base lg:text-xl 3xl:text-[24px]">{benefit.title}</h3>
</div>{" "}
              <p className="text-gray-500 sm:text-gray-600 font-semibold sm:font-normal text-sm lg:text-base 3xl:text-[18px]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute z-0 sm:py-12 w-full h-full">
          <div className="flex h-1/2 w-full items-center justify-center gap-36">
            <div className="border border-gray-200 h-full w-full border-l-0 border-b-0 rounded-r-lg relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveRight_6s_linear_infinite]" /> */}
            </div>
            <div className="border border-gray-200 h-full w-full border-r-0 rounded-l-lg border-b-0 relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveLeft_6s_linear_infinite]" /> */}
            </div>
          </div>
          <div className="flex h-1/2 w-full items-center justify-center gap-36">
            <div className="border border-gray-200 h-full w-full border-l-0 rounded-r-lg border-t-0 relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveRight_6s_linear_infinite]" /> */}
            </div>
            <div className="border border-gray-200 h-full w-full border-r-0 rounded-l-lg border-t-0 relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveLeft_6s_linear_infinite]" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LMSBenefits;