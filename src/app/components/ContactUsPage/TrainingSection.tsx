'use client'
import React from "react";
import { useState } from "react";
import trainingImage from "@/app/utilities/images/training-image.svg"
import plusIcon from "@/app/utilities/icons/plus-icon.svg"
import minusIcon from "@/app/utilities/icons/minus-icon.svg"
import Image from "next/image";


const TrainingSection = () => {

    const traininingItems = [
        {
            title: "Employee Training",
            description: "Forget help articles and endless meetings. Elevate customer support with welcome courses, certifications, and insights into new product releases. Provide meaningful education that enhances engagement and boosts retention."
        },
        {
            title: "Compliance Training",
            description: "Forget help articles and endless meetings. Elevate customer support with welcome courses, certifications, and insights into new product releases. Provide meaningful education that enhances engagement and boosts retention."
        },
        {
            title: "Customer training",
            description: "Forget help articles and endless meetings. Elevate customer support with welcome courses, certifications, and insights into new product releases. Provide meaningful education that enhances engagement and boosts retention."
        },
        {
            title: "Partner Onboarding",
            description: "Forget help articles and endless meetings. Elevate customer support with welcome courses, certifications, and insights into new product releases. Provide meaningful education that enhances engagement and boosts retention."
        },
        {
            title: "Sales Training",
            description: "Forget help articles and endless meetings. Elevate customer support with welcome courses, certifications, and insights into new product releases. Provide meaningful education that enhances engagement and boosts retention."
        },
        {
            title: "Live Product Training",
            description: "Forget help articles and endless meetings. Elevate customer support with welcome courses, certifications, and insights into new product releases. Provide meaningful education that enhances engagement and boosts retention."
        }
    ]

    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleAccordion = (index: number) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        )
    }

    return (
        <div className="w-full 3xl:py-[120px] xl:py-[72px] py-[42px] flex flex-col items-center justify-center xl:px-0 px-4 3xl:gap-[85px] xl:gap-[64px] sm:gap-[37.5px] gap-[42px] xl:px-0 sm:px-4">
            <div className="flex flex-col w-full max-w-6xl 3xl:gap-[10.7px] xl:gap-2 sm:gap-[4.7px] gap-2 sm:items-start items-center">
                <div className="3xl:rounded-[32px] xl:rounded-[24px] sm:rounded-[14px] rounded-[24px] xl:py-1 3xl:py-[5.3px] sm:py-[2.3px] py-1 xl:px-3 3xl:px-4 sm:px-[7px] px-3 bg-[#ECEDFE] w-fit h-fit font-medium 3xl:text-[18px] 3xl:leading-[26.7px] xl:text-[14px] xl:leading-5 text-[12px] sm:leading-[16.4px] leading-5  text-[#4740D4]">Learner Experience</div>
                <p className="font-bold 3xl:text-[56px] 3xl:leading-[76.5px] xl:text-[42px] xl:leading-[57.4px] sm:text-[24px] sm:leading-[32.8px] text-[22px] leading-[30px] text-[#1D1A27] 3xl:max-w-[1050px] xl:max-w-[790px] sm:max-w-[452px] max-w-[343px] sm:text-start text-center">Course Creation and Live Training with <span style={{
                    background: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                }}>Lynk LMS</span>.</p>
            </div>
            <div className="flex sm:flex-row  max-w-6xl xl:px-0 px-4 flex-col 3xl:gap-[96px] xl:gap-[72px] sm:gap-[42px] gap-7 w-full justify-center sm:items-start items-center">
                <div className="w-full">
                    <Image src={trainingImage} alt="training image" width={530} height={460} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col w-full 3xl:gap-4 xl:gap-3 sm:gap-2 gap-0 ">
                    {traininingItems?.map((item, index) => {
                        return (
                            <div onClick={() => toggleAccordion(index)} key={index} className="flex flex-col 3xl:gap-8 xl:gap-6 sm:gap-[14px] gap-2 border-b 3xl:py-[18.7px] xl:py-[14px] sm:py-2 py-[14px] cursor-pointer w-full">
                                <div className="w-full flex items-center justify-between">
                                    <p className={`font-semibold 3xl:text-[24px] 3xl:leading-[42px] xl:text-[18px] xl:leading-[32px] sm:text-[14px] sm:leading-[19px] text-[14px] leading-[32px] ${openIndexes?.includes(index)?"text-[#635BFF]":"text-[#1D1A27]"}`}>{item?.title}</p>
                                    <div className="xl:w-[24px] xl:h-[24px] sm:w-[10px] sm:h-[10px] w-4 h-4">
                                        {openIndexes?.includes(index)?(
                                            <Image src={minusIcon} alt="plus icon" width={24} height={24} className="w-full h-full object-cover" />
                                        ):(
                                            <Image src={plusIcon} alt="plus icon" width={24} height={24} className="w-full h-full object-cover" />
                                        )}
                                    </div>
                                </div>
                                {openIndexes?.includes(index) && <p className="font-normal 3xl:text-[22px] 3xl:leading-[34px] xl:text-[16px] xl:leading-[26px] sm:text-[14px] sm:leading-[19px] text-[14px] leading-[22px] text-[#212529] max-w-full">{item?.description}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrainingSection;
