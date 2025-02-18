'use client'
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import developementFirstImage from "@/app/utilities/images/development-first.svg"
import developmentSecondImage from "@/app/utilities/images/development-second.svg"
import { CardStack } from "@/components/ui/card-stack";

const DevelopmentProcessSection = () => {

    const [firstActiveIndexes, setFirstActiveIndexes] = useState([0]);
    const [secondActiveIndexes, setSecondActiveIndexes] = useState([0]);

    const CARDS = [
        {
            id: 0,
            name: "Manu Arora",
            designation: "Senior Software Engineer",
            image: developementFirstImage,
            content: (
                <p>
                    These cards are amazing, I want to use them in my
                    project. Framer motion is a godsend ngl tbh fam 🙏
                </p>
            ),
        },
        {
            id: 1,
            name: "Elon Musk",
            designation: "Senior Shitposter",
            image: developmentSecondImage,
            content: (
                <p>
                    I dont like this Twitter thing,{" "}
                    deleting it right away because yolo. Instead, I
                    would like to call it X.com so that it can easily
                    be confused with adult sites.
                </p>
            ),
        },
        {
            id: 2,
            name: "Tyler Durden",
            designation: "Manager Project Mayhem",
            image: developementFirstImage,
            content: (
                <p>
                    The first rule of
                    Fight Club is that you do not talk about fight
                    club. The second rule of
                    Fight club is that you DO NOT TALK about fight
                    club.
                </p>
            ),
        },
    ];

    const togglePoint = (sectionIndex: number, pointIndex: number) => {
        if (sectionIndex === 0) {
            if (firstActiveIndexes?.includes(pointIndex)) {
                setFirstActiveIndexes(firstActiveIndexes.filter((index) => index !== pointIndex))
            } else {
                setFirstActiveIndexes([...firstActiveIndexes, pointIndex])
            }
        } else {
            if (secondActiveIndexes?.includes(pointIndex)) {
                setSecondActiveIndexes(secondActiveIndexes.filter((index) => index !== pointIndex))
            } else {
                setSecondActiveIndexes([...secondActiveIndexes, pointIndex])
            }
        }
    }

    const ProcessPoints = [
        {
            text: "Planning and Strategy",
            description: "Define goals, analyse needs, and collaborate with experts to create a structured content development plan.",
            points: [
                {
                    id: "01",
                    text: "Needs Analysis",
                    description: "Understand your training goals, audience, and organizational challenges.",
                    image: developementFirstImage
                },
                {
                    id: "02",
                    text: "Content Strategy",
                    description: "Understand your training goals, audience, and organizational challenges.",
                    image: developmentSecondImage
                }
            ]
        },
        {
            text: "Development and Delivery",
            description: "Create engaging content, ensure quality through testing, and seamlessly deliver it across platforms.",
            points: [
                {
                    id: "03",
                    text: "Design & Development",
                    description: "Storyboarding, scripting, and multimedia asset creation tailored to your requirements.",
                    image: developementFirstImage
                },
                {
                    id: "04",
                    text: "Quality Assurance",
                    description: "Understand your training goals, audience, and organizational challenges.",
                    image: developmentSecondImage
                },
                {
                    id: "05",
                    text: "Delivery & Integration",
                    description: "Understand your training goals, audience, and organizational challenges.",
                    image: developementFirstImage
                }
            ]
        }
    ]

    return (
        <div className="w-full 3xl:py-[96px] xl:py-[72px] py-[42px] flex flex-col 3xl:gap-[120px] xl:gap-[92px] sm:gap-[52px] gap-[42px] items-center">
            <div className="flex flex-col 3xl:gap-4 xl:gap-3 sm:gap-[7px] gap-[6px] sm:max-w-full max-w-[343px] items-center">
                <p className="font-bold 3xl:text-[56px] 3xl:leading-[76.5px] xl:text-[42px] xl:leading-[57.4px] sm:text-[28px] sm:leading-[38px] text-[24px] leading-[32.8px] text-[#1D1A27] text-center">Content <span style={{
                    background: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                }}>Development</span> Process</p>
                <p className="font-normal 3xl:text-[22px] 3xl:leading-[32px] xl:text-[16px] xl:leading-6 text-[14px] leading-[19px] text-[#4A4852] text-center">Involves creating and refining materials to meet learning goals.</p>
            </div>

            <div className="flex flex-col 3xl:gap-[187px] xl:gap-[140px] sm:gap-[81px] gap-[62px]">
                {ProcessPoints?.map((point, sectionIndex) => {
                    return (
                        <div key={sectionIndex} className={`w-full 3xl:max-w-[1600px] xl:max-w-[1200px] sm:max-w-[750px] max-w-[343px] flex items-center 3xl:gap-[145px] xl:gap-[108px] sm:gap-[118px] gap-6 ${sectionIndex === 0 ? "sm:flex-row flex-col" : "sm:flex-row-reverse flex-col"}`}>
                            <div className="flex flex-col 3xl:gap-[56px] xl:gap-[42px] gap-6">
                                <div className="flex flex-col 3xl:gap-4 gap-3">
                                    <p className="font-medium 3xl:text-[42px] 3xl:leading-[57.4px] xl:text-[32px] xl:leading-[43.7px] text-[18px] leading-[24px] text-[#1D1A27]">{point?.text}</p>
                                    <p className="font-normal 3xl:text-[22px] 3xl:leading-[32px] xl:text-[16px] xl:leading-6 text-[14px] sm:leading-[19px] leading-[22px] text-[#4A4852]">{point?.description}</p>
                                </div>
                                <div className="flex flex-col">
                                    {point?.points?.map((item, pointIndex) => {
                                        return (
                                            <div onClick={() => { togglePoint(sectionIndex, pointIndex) }} key={pointIndex} className="3xl:border-t-[1.33px] 3xl:border-b-[1.33px] xl:border-t-[1px] xl:border-b-[1px] sm:border-t-[0.6px] sm:border-b-[0.6px] border-t border-b border-[#ECEEF3] w-full 3xl:py-[21.3px] xl:py-4 sm:py-[9.3px] py-2 flex items-start 3xl:gap-6 xl:gap-[18px] sm:gap-[10.4px] gap-3 cursor-pointer">
                                                <p className="3xl:p-[10.7px] xl:p-2 sm:p-[4.6px] p-1 font-medium 3xl:text-[26.7px] 3xl:leading-[36.4px] xl:text-[20px] xl:leading-[27.3px] sm:text-[14px] sm:leading-[19px] text-[16px] leading-[22px] text-[#1D1A27]">{item?.id}</p>
                                                <div className="flex flex-col text-3xl:gap-4 xl:gap-3 sm:gap-[7px] gap-2 w-full">
                                                    <div className="w-full flex items-center justify-between">
                                                        <p className={`font-medium 3xl:text-[24px] 3xl:leading-[45px] xl:text-[18px] xl:leading-[34px] sm:text-[14px] sm:leading-[19.7px] text-[16px] leading-[22px] ${((sectionIndex === 0 && firstActiveIndexes?.includes(pointIndex)) || (sectionIndex === 1 && secondActiveIndexes?.includes(pointIndex))) ? "text-[#534BEF]" : "text-[#1D1A27]"} text-[#1D1A27]`}>{item?.text}</p>
                                                        <div className="3xl:w-8 3xl:h-8 xl:w-6 xl:h-6 sm:w-[14px] sm:h-[14px] w-6 h-6">
                                                            {(sectionIndex === 0 && firstActiveIndexes?.includes(pointIndex)) || (sectionIndex === 1 && secondActiveIndexes?.includes(pointIndex)) ? <ChevronDown className="h-full w-full text-gray-500" /> : <ChevronUp className="h-full w-full text-gray-500" />}
                                                        </div>
                                                    </div>
                                                    {/* {((sectionIndex === 0 && firstActiveIndexes?.includes(pointIndex)) || (sectionIndex === 1 && secondActiveIndexes?.includes(pointIndex))) && <p className="font-normal text-[14px] leading-[22px] text-[#4A4852]">{item?.description}</p>} */}
                                                    <div
                                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${((sectionIndex === 0 && firstActiveIndexes?.includes(pointIndex)) || (sectionIndex === 1 && secondActiveIndexes?.includes(pointIndex))) ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
                                                            }`}
                                                    >
                                                        <p className="font-normal 3xl:text-[18px] 3xl:leading-[24.6px] xl:text-[14px] xl:leading-[22px] text-[14px] sm:leading-[19px] leading-[22px] text-[#4A4852]">
                                                            {item?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="xl:h-[26rem] sm:h-[20rem] h-[15rem] flex items-center justify-center w-full sm:mt-0 mt-6">
                                <CardStack items={CARDS} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default DevelopmentProcessSection;
