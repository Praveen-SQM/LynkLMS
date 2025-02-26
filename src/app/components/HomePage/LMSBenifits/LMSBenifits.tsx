import React from "react";
import { Star, Building2, CircleDollarSign } from "lucide-react";
import Image from "next/image";
import logoWhite from "@/app/utilities/images/logo_white.svg";
import unifiedSolution from "@/app/utilities/icons/group-blue.svg";

const benefitsData = [
  {
    icon: unifiedSolution,
    title: "Unified Solution",
    description:
      "Single provider for technology and content ensures consistency.",
  },
  {
    icon: <Star className="w-6 h-6 text-indigo-500" />,
    title: "Enhanced Engagement",
    description:
      "Content complements LMS capabilities, keeping learners engaged.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-indigo-500" />,
    title: "Scalability",
    description: "Both LMS and content can grow with your organization.",
  },
  {
    icon: <CircleDollarSign className="w-6 h-6 text-indigo-500" />,
    title: "Cost Efficiency",
    description:
      "Bundling reduces overall costs compared to sourcing separately.",
  },
];

const LMSBenefits = () => {
  return (
    <div className="max-w-6xl mx-auto xl:px-0 px-4 py-[120px]">
      <div className="text-center sm:text-start space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold max-w-[650px]">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Combine
          </span>{" "}
          LMS and Content for Maximum Impact
        </h1>
        <p className="text-gray-600 w-full text-sm sm:text-base lg:max-w-2xl">
          Our LMS and e-learning content development services work hand-in-hand
          to create a seamless and efficient training ecosystem.
        </p>
      </div>

      <div className="relative grid sm:grid-cols-2 gap-20 sm:gap-24 mt-16">
        {/* Center Icon with Concentric Circles */}
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full bg-indigo-50 animate-expand-outer"></div>

          {/* Middle circle */}
          <div className="absolute inset-6 rounded-full bg-indigo-100 animate-expand-middle"></div>

          {/* Inner circle with icon */}
          <div className="absolute inset-12 rounded-full bg-indigo-500 flex items-center justify-center animate-expand-inner">
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
              className="absolute z-10 bg-white rounded-2xl p-4 h-full max-h-36 sm:p-6 shadow-2xl shadow-gray-200 max-w-[230px] lg:max-w-[350px]"
            >
              <div className="flex items-center gap-4 font-semibold mb-2">
                <div className="p-2 bg-[#5a52f53f] w-fit rounded-md">
                  {benefit.icon === unifiedSolution ? (
                    <Image
                      width={25}
                      src={unifiedSolution}
                      alt=""
                      className="h-6"
                    />
                  ) : (
                    benefit.icon
                  )}
                </div>
                <h3 className="text-base lg:text-xl">{benefit.title}</h3>
              </div>{" "}
              <p className="text-gray-500 sm:text-gray-600 font-semibold sm:font-normal text-sm lg:text-base">
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
