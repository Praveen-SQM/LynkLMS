"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import prevButton from "@/app/utilities/icons/prev-button.svg";
import nextButton from "@/app/utilities/icons/next-button.svg";
import partnerClientImage from "@/app/utilities/images/partner-clients.svg";
import RemoteTeamsImage from "@/app/utilities/images/remote-teams.svg";
import scalableTrainingImage from "@/app/utilities/images/scalable-training.svg";
import corporateTraingingImage from "@/app/utilities/images/corporate-training.svg";
import transformationEducationImage from "@/app/utilities/images/transforming-education.svg";

const LMSQualitySection = () => {
  const cards = [
    {
      image: transformationEducationImage,
      title: "Transforming Education",
      description:
        "Transform classrooms with digital tools that simplify assessments and empower educators with content creation.",
    },
    {
      image: corporateTraingingImage,
      title: "Corporate Training Excellence",
      description:
        "Streamline onboarding with customized programs, measure ROI, and keep your workforce current to improve performance.",
    },
    {
      image: scalableTrainingImage,
      title: "Scalable Training for Providers",
      description:
        "Offer scalable LMS solutions with personalized learning, progress tracking, and tailored content to enhance client satisfaction.",
    },
    {
      image: RemoteTeamsImage,
      title: "Learning for Remote Teams",
      description:
        "Support remote teams with offline access and flexible learning paths, ensuring engagement and productivity across time zones.",
    },
    {
      image: partnerClientImage,
      title: "Training for Partners & Clients",
      description:
        "Provide training with engaging content, enhance relationships with tailored learning paths, and boost collaboration for success.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - 2
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - 2 ? prevIndex + 1 : 0
    );
  };

  const dots=Array(4).fill(0)

  return (
    <div className="w-full 3xl:pt-[120px] 3xl:pb-[120px] xl:pt-[42px] xl:pb-[218px] sm:pt-[24px] sm:pb-[92px] pt-[42px] pb-[42px] flex flex-col items-center 3xl:gap-[72px] xl:gap-[54px] sm:gap-8 gap-7">
      <div className="flex flex-col items-center 3xl:gap-8 xl:gap-6 sm:gap-[14px] gap-6 3xl:max-w-[1018px] xl:max-w-[771px] sm:max-w-[750px] max-w-[343px]">
        <p className="font-bold 3xl:text-[56px] 3xl:leading-[81.9px] xl:text-[42px] xl:leading-[57.4px] text-[24px] leading-[32.8px] text-[#1D1A27] text-center">
          Train diverse user groups efficiently.
        </p>
        <p className="font-medium 3xl:text-[22px] 3xl:leading-[34px] xl:text-[16px] xl:leading-[26.4px] text-[14px] leading-[19px] text-[#3A4F66] text-center">
          Measure the impact of training on customer success, drive revenue, and
          deliver an exceptional brand experience to your end users.
        </p>
      </div>

      <div className="relative w-full 3xl:max-w-[1650px] xl:max-w-[1250px] sm:max-w-[767px] overflow-hidden sm:block hidden">
        {/* Prev Button */}
        <button
          className="3xl:w-[42px] 3xl:h-[42px] xl:w-9 xl:h-9 sm:h-[21px] sm:w-[21px] absolute top-[50%] left-[4px] z-10"
          onClick={handlePrev}
        >
          <Image
            src={prevButton}
            alt="Previous Button"
            width={20}
            height={20}
            className="w-full h-full object-cover"
          />
        </button>

        {/* Next Button */}
        <button
          className="3xl:w-[42px] 3xl:h-[42px] xl:w-9 xl:h-9 sm:h-[21px] sm:w-[21px] absolute top-[50%] right-[4px] z-10"
          onClick={handleNext}
        >
          <Image
            src={nextButton}
            alt="Next Button"
            width={20}
            height={20}
            className="w-full h-full object-cover"
          />
        </button>

        {/* Animated Sliding Cards */}
        <div className="relative w-full overflow-hidden flex items-center 3xl:h-[820px] xl:h-[597px] sm:h-[380px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute w-full flex 3xl:gap-[42px] xl:gap-[32px] sm:gap-[18px] justify-center"
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
                <div
                  key={index}
                  className="3xl:rounded-[32px] xl:rounded-[24px] sm:rounded-[14px] 3xl:py-[37px] xl:py-7 sm:py-4 3xl:px-[53px] xl:px-10 sm:px-[23px] bg-[#F7F7FF] flex flex-col 3xl:gap-[10.6px] xl:gap-2 sm:gap-1 w-full 3xl:max-w-[772px] xl:max-w-[584px] sm:max-w-[360px]"
                >
                  <div className="flex flex-col 3xl:gap-[26px] xl:gap-5 sm:gap-3">
                    <p className="font-bold 3xl:text-[32px] 3xl:leading-[48px] xl:text-[24px] xl:leading-9 sm:text-[16px] sm:leading-[21px] text-[#1D1A27]">
                      {card.title}
                    </p>
                    <p className="font-normal 3xl:text-[22px] 3xl:leading-8 xl:text-[16px] xl:leading-6 sm:text-[14px] sm:leading-[19px] text-[#666666]">
                      {card.description}
                    </p>
                  </div>
                  <div className="3xl:w-[660px] 3xl:h-[559px] xl:w-[500px] xl:h-[424px] sm:w-[293px] sm:h-[248px]">
                    <Image
                      src={card.image}
                      alt="image"
                      width={500}
                      height={424}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center xl:gap-2 sm:gap-[4.7px] sm:flex hidden">
        {dots?.map((_,index)=>{
            return(
                <div key={index} className={`${currentIndex===index?"3xl:w-[20px] 3xl:h-[8px] xl:w-[15px] xl:h-[6px] sm:w-[8.8px] sm:h-[3.5px] rounded-full bg-[#000000]":"3xl:w-[8px] 3xl:h-[8px] xl:w-[6px] xl:h-[6px] sm:w-[3.5px] sm:h-[3.5px] rounded-full bg-[#000000] opacity-20"}`}></div>
            )
        })}
      </div>

      <div className="sm:hidden flex flex-col items-center gap-6">
        {cards?.map((card,index)=>{
            return(
                <div key={index} className="w-[343px] rounded-[14px] py-4 px-3 bg-[#F7F7FF] flex flex-col gap-[5px]">
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-[16px] leading-[21px] text-[#1D1A27]">{card.title}</p>
                        <p className="font-normal text-[14px] leading-[19px] text-[#666666]">{card.description}</p>
                    </div>
                    <div className="w-[317px] h-[270px]">
                        <Image src={card.image} alt="image" width={317} height={270} className="w-full h-full object-contain" />
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default LMSQualitySection;
