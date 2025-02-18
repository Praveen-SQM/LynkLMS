import React from "react";
import rightIcon from "@/app/utilities/icons/Checkmark.svg"
import BenefitsImage from "@/app/utilities/images/Benefits-image.svg"
import Image from "next/image";


const BenefitsSection = () => {

    const points = [
        {
            point:"Unified Solution",
            text: ": Single provider for technology and content ensures consistency.",
            className: "3xl:max-w-[557px] xl:max-w-[418px] sm:max-w-[453px] max-w-full"
        },
        {
            point:"Enhanced Engagement",
            text: ": Tailored content complements LMS capabilities, keeping learners motivated.",
            className: "3xl:max-w-[792px] xl:max-w-[570px] sm:max-w-[453px] max-w-full"
        },
        {
            point:"Scalability",
            text: ": Both LMS and content can grow with your organization.",
            className: "3xl:max-w-[792px] xl:max-w-[570px] sm:max-w-[453px] max-w-full"
        },
        {
            point:"Cost Efficiency",
            text: ": Bundling reduces overall costs compared to sourcing separately.",
            className: "3xl:max-w-[792px] xl:max-w-[570px] sm:max-w-[453px] max-w-full"
        }
    ]

    return (
        <div className="w-full bg-[#534BEF] 3xl:py-[96px] xl:py-[72px] py-[42px]">
            <div className="flex items-center sm:flex-row flex-col justify-between 3xl:max-w-[1600px] xl:max-w-[1200px] sm:max-w-[750px] max-w-[343px] mx-auto">
                <div className="flex flex-col sm:items-start items-center 3xl:gap-[56px] xl:gap-[42px] sm:gap-[57px] gap-8 sm:mb-0 mb-[32px]">
                    <div className="flex flex-col items-start 3xl:gap-[42px] xl:gap-[32px] sm:gap-[18px] gap-3">
                        <p className="font-bold 3xl:text-[48px] 3xl:leading-[65.6px] xl:text-[36px] xl:leading-[40px] sm:text-[24px] sm:leading-[33px] text-[22px] leading-[40px] text-[#FFFFFF] max-w-[546px]">Benefits of combining both services</p>
                        <div className="flex flex-col 3xl:gap-[21.3px] xl:gap-4 sm:gap-[9.4px] gap-4">
                            {points?.map((point, index) => {
                                return (
                                    <div key={index} className="flex items-start 3xl:gap-[6.7px] xl:gap-[5px] sm:gap-[3px] gap-[5px]">
                                        <div className="3xl:w-[25px] 3xl:h-[32px] xl:w-[19px] xl:h-[23px] sm:w-5 sm:h-6 w-[19px] h-[24px]">
                                            <Image src={rightIcon} alt="right-icon" width={19} height={23} className="w-full h-full object-cover" />
                                        </div>
                                        <p className={`font-bold 3xl:text-[22px] 3xl:leading-8 xl:text-[16px] xl:leading-6 sm:text-[14px] sm:leading-[19px] text-[14px] leading-[24px] text-[#FFFFFF] ${point?.className}`}>{point?.point}<span className="font-normal">{point?.text}</span></p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button className="bg-[#EE3CD1] 3xl:py-[21px] xl:py-4 sm:py-[9.4px] py-4 3xl:px-8 xl:px-6 sm:px-[14px] px-6 3xl:rounded-[10.6px] xl:rounded-[8px] sm:rounded-[4.7px] rounded-[8px] 3xl:w-[373px] xl:w-[280px] sm:w-[164px] h-fit font-bold 3xl:text-[22px] 3xl:leading-[30px] xl:text-[16px] xl:leading-4 sm:text-[13px] sm:leading-[17.8px] text-[#FFFFFF]">Contact Us</button>
                </div>
                <div className="3xl:w-[437px] 3xl:h-[710px] xl:w-[328px] xl:h-[533px] sm:w-[208px] sm:h-[312px] w-[265px] h-[397px]">
                    <Image src={BenefitsImage} alt="whatYouGetImage" width={356} height={533} className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;
