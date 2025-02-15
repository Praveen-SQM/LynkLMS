import React from "react";
import newTeamMemberImage from "@/app/utilities/images/new-team-members.svg";
import digitalTrainingImage from "@/app/utilities/images/Employee-training.svg"
import performanceImage from "@/app/utilities/images/perfomance.svg"
import certificateImage from "@/app/utilities/images/certificate.svg"
import Image from "next/image";

const JourneySection = () => {

    const journeyItems = [
        {
            image: newTeamMemberImage,
            title: "Onboard new team members"
        },
        {
            image: digitalTrainingImage,
            title: "Take them through digital training"
        },
        {
            image: performanceImage,
            title: "Track their performance"
        },
        {
            image: certificateImage,
            title: "Certify your team"
        }
    ]

    return (
        <div className="w-full xl:pt-[72px] xl:pb-[72px] sm:pt-[42px] sm:pb-[42px] pt-[62px] pb-6 bg-[#ffffff] flex flex-col items-center 3xl:gap-[96px] xl:gap-[72px] sm:gap-[42px] gap-6">
            <div className="flex flex-col items-center 3xl:gap-[5px] xl:gap-1 sm:gap-[2.34px] gap-3">
                <div className="3xl:rounded-[30px] xl:rounded-[24px] sm:rounded-[14px] rounded-[24px] 3xl:py-[10px] xl:py-2 sm:py-[4.7px] py-2 3xl:px-[30px] xl:px-6 sm:px-[14px] px-3 w-fit bg-[#F2F4FC]">
                    <p className="font-medium 3xl:text-[18px] 3xl:leading-8 xl:text-[14px] xl:leading-6 sm:text-[13px] sm:leading-[17.8px] text-[12px] leading-[16.4px] text-center text-[#4740d4]">Empower, Engage, and Educate with Squadra LMS</p>
                </div>
                <p className="font-bold 3xl:text-[56px] 3xl:leading-[76.5px] xl:text-[42px] xl:leading-[57.37px] sm:text-[24px] sm:leading-[32.8px] text-[22px] leading-[30px] text-center text-[#1D1A27] 3xl:max-w-[1130px] xl:max-w-[851px] sm:max-w-[499px] max-w-[343px]">Your entire training journey, streamlined in one place.</p>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-2 place-items-center 3xl:gap-6 xl:gap-5 sm:gap-[11.7px] gap-3">
                {journeyItems?.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col 3xl:gap-[25px] xl:gap-5 gap-[11.7px]">
                            <div className="relative 3xl:w-[382px] xl:w-[285px] sm:w-[178px] w-[168px] 3xl:h-[250px] xl:h-[200px] h-[117px] 3xl:rounded-[20px] xl:rounded-[16px] rounded-[9.4px] bg-[#F0F4F9]">
                                <Image unoptimized src={item?.image} alt="image" className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 object-cover ${index===0?"3xl:w-[290px] 3xl:h-[94px] 3xl:bottom-[54px] xl:w-[231px] xl:h-[75px] xl:bottom-[45px] sm:w-[135.8px] sm:h-[44px] sm:bottom-[20px] w-[136px] h-[44px] bottom-[22px]" : index===1?"3xl:w-[382px] 3xl:h-[250px] xl:w-[285px] xl:h-[200px] sm:w-[178px] sm:h-[117px] w-[168px] h-[117px]" : index===2?"3xl:w-[281.8px] 3xl:h-[198px] xl:w-[210px] xl:h-[158px] sm:w-[131.8px] sm:h-[92.6px] w-[124px] h-[93px]":"3xl:w-[247px] 3xl:h-[216px] xl:w-[184px] xl:h-[172px] sm:w-[115px] sm:h-[101px] w-[108px] h-[100px]"}`} />
                            </div>
                            <div className="flex flex-col items-center 3xl:gap-[17.5px] xl:gap-[14px] gap-[8.2px]">
                                <div className="3xl:w-9 3xl:h-9 xl:w-7 xl:h-7 sm:w-[18px] sm:h-[18px] w-[17px] h-[17px] rounded-full bg-[#534BEF] flex items-center justify-center text-[#ffffff]">{index + 1}</div>
                                <p className={`font-bold 3xl:text-[20px] 3xl:leading-8 xl:text-[16px] xl:leading-6 text-[14px] leading-[19.12px] text-center text-[#1D1A27] ${index !== 3 ? "3xl:max-w-[187px] xl:max-w-[157px] max-w-[162px]" : "xl:max-w-[134px] max-w-[117px]"}`}>{item?.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default JourneySection;
