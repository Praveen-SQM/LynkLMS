'use client'
import React from "react";
import gamificationImage from "@/app/utilities/images/gamification.webp"
import technicalTeamImage from "@/app/utilities/images/technical-team.svg"
import subjectMatter from "@/app/utilities/images/subject-matter.webp"
import visualDesigner from "@/app/utilities/images/visual-designer.webp"
import contentDeveloperImage from "@/app/utilities/images/content-developer.svg"
import InstructionalDeveloperImage from "@/app/utilities/images/Instructional-designer.webp"
import Image, { StaticImageData } from "next/image";

const ImageWithTextRowComponent = ({ cardImage: cardImage, imageClass: imageClass, text, description }: { cardImage: StaticImageData, imageClass: string, text: string, description: string }) => {
    return (
        <div className="flex sm:flex-row flex-col items-center sm:gap-0 gap-1">
            <div className="3xl:w-[800px] 3xl:h-[586.7px] xl:w-[600px] xl:h-[440px] sm:w-[375px] sm:h-[255px] w-[343px] h-[252px] 3xl:rounded-[40px] xl:rounded-[30px] sm:rounded-[17.4px] rounded-[16px] bg-[#F4F5FF] flex items-center justify-center">
                <div className={`${imageClass}`}>
                    <Image src={cardImage} width={366} height={261} alt="Instructional developer" className="w-full h-full object-contain" />
                </div>
            </div>
            <div className="3xl:w-[800px] 3xl:h-[586.7px] xl:w-[600px] xl:h-[440px] sm:w-[375px] sm:h-[255px] w-[343px] h-[149px] 3xl:rounded-[40px] xl:rounded-[30px] sm:rounded-[17.4px] rounded-[16px] flex items-center justify-center bg-[#FAFAFA]">
                <div className="flex flex-col 3xl:gap-[21px] xl:gap-4 sm:gap-2 gap-3 3xl:max-w-[640px] xl:max-w-[480px] sm:max-w-[327px] max-w-[319px]">
                    <p className="font-bold 3xl:text-[32px] 3xl:leading-[43.7px] xl:text-[24px] xl:leading-[32.8px] sm:text-[16px] sm:leading-[22px] text-[18px] leading-[24.6px] text-[#1D1A27]">{text}</p>
                    <p className="font-normal 3xl:text-[18px] 3xl:leading-[28px] xl:text-[14px] xl:leading-[22px] sm:text-[14px] sm:leading-[19px] text-[14px] leading-[22px] text-[#4A4852]">{description}</p>
                </div>
            </div>
        </div>
    )
}

const ImageWithTextColumnComponent = ({ cardImage: cardImage, imageClass: imageClass, text, description }: { cardImage: StaticImageData, imageClass: string, text: string, description: string }) => {
    return (
        <div className="flex flex-col items-center sm:gap-0 gap-1">
            <div className="3xl:w-[786.7px] 3xl:h-[480px] xl:w-[590px] xl:h-[360px] sm:w-[369px] sm:h-[208px] w-[343px] h-[209px] 3xl:rounded-[40px] xl:rounded-[30px] rounded-[17.4px] bg-[#F4F5FF] flex items-center justify-center">
                <div className={`${imageClass}`}>
                    <Image src={cardImage} width={366} height={261} alt="Instructional developer" className="w-full h-full object-contain" />
                </div>
            </div>
            <div className="3xl:w-[786.7px] 3xl:h-[311px] xl:w-[590px] xl:h-[233px] sm:w-[369px] sm:h-[135px] w-[343px] h-[125px] 3xl:rounded-[40px] xl:rounded-[30px] sm:rounded-[17.4px] rounded-[16px] flex items-center justify-center bg-[#FAFAFA]">
                <div className="flex flex-col 3xl:gap-[21px] xl:gap-4 gap-[9.3px] 3xl:max-w-[627px] xl:max-w-[470px] sm:max-w-[300px] max-w-[319px]">
                    <p className="font-bold 3xl:text-[32px] 3xl:leading-[43.7px] xl:text-[24px] xl:leading-[32.8px] sm:text-[16px] sm:leading-[22px] text-[18px] leading-[24.6px] text-[#1D1A27]">{text}</p>
                    <p className="font-normal 3xl:text-[18px] 3xl:leading-[28px] xl:text-[14px] xl:leading-[22px] sm:text-[14px] sm:leading-[19px] text-[14px] leading-[22px] text-[#4A4852]">{description}</p>
                </div>
            </div>
        </div>
    )
}

const ExpertsSection = () => {

    return (
        <div className="w-full 3xl:py-[96px] xl:py-[72px] py-[42px] sm:px-0 px-4 flex flex-col items-center 3xl:gap-[101px] xl:gap-[76px] gap-[44px]">
            <div className="flex flex-col items-center 3xl:gap-4 xl:gap-3 sm:gap-[7px] gap-3">
                <p className="font-bold 3xl:text-[56px] 3xl:leading-[76.5px] xl:text-[42px] xl:leading-[57.4px] sm:text-[28px] sm:leading-[38.3px] text-[24px] leading-[32.8px] text-[#1D1A27] sm:text-start text-center">Meet the Experts Behind <span style={{
                    background: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                }}>Our Success</span></p>
                <p className="font-normal 3xl:text-[21px] 3xl:leading-8 xl:text-[16px] xl:leading-6 sm:text-[14px] sm:leading-[19px] text-[14px] leading-[24px] text-[#4A4852] 3xl:max-w-[686px] xl:max-w-[514px] sm:max-w-[508px] max-w-full text-center">With a mix of technical and creative experts, we ensure the best outcomes for every project.</p>
            </div>
            <div className="flex flex-col 3xl:gap-[26.7px] xl:gap-5 sm:gap-[11.6px] gap-5">
                <ImageWithTextRowComponent cardImage={InstructionalDeveloperImage} imageClass="3xl:w-[487.7px] 3xl:h-[348px] xl:w-[366px] xl:h-[261px] sm:w-[226px] sm:h-[151px] w-[209px] h-[149px]" text="Instructional Designers" description="Specialists in structuring learning objectives, creating impactful content, and ensuring it is pedagogically sound and aligned with learning theories." />
                <div className="flex sm:flex-row flex-col items-center 3xl:gap-[26.7px] xl:gap-5 sm:gap-[11.6px] gap-5">
                    <ImageWithTextColumnComponent cardImage={contentDeveloperImage} imageClass="3xl:w-[686.7px] 3xl:h-[426.7px] xl:w-[515px] xl:h-[320px] sm:w-[298px] sm:h-[185px] w-[299px] h-[186px]" text="Content Developers" description="Experts in multimedia creation, including videos, animations, and interactive modules, with skills in gamification and simulations." />
                    <ImageWithTextColumnComponent cardImage={visualDesigner} imageClass="3xl:w-[689px] 3xl:h-[426.7px] xl:w-[517px] xl:h-[320px] sm:w-[299px] sm:h-[185px] w-[300px] h-[186px]" text="Visual Designers" description="Experts in multimedia creation, including videos, animations, and interactive modules, with skills in gamification and simulations." />
                </div>
                <ImageWithTextRowComponent cardImage={subjectMatter} imageClass="3xl:w-[505px] 3xl:h-[380px] xl:w-[379px] xl:h-[285px] sm:w-[219px] sm:h-[165px] w-[231px] h-[174px]" text="Subject Matter Experts" description="Specialists in structuring learning objectives and creating impactful content, ensuring it is pedagogically sound and aligned with learning theories." />
                <div className="flex sm:flex-row flex-col items-center 3xl:gap-[26.7px] xl:gap-5 sm:gap-[11.6px] gap-5">
                    <ImageWithTextColumnComponent cardImage={technicalTeamImage} imageClass="3xl:w-[687px] 3xl:h-[427px] xl:w-[515px] xl:h-[320px] sm:w-[298px] sm:h-[185px] w-[271px] h-[169px]" text="Technical Team" description="Developers specializing in LMS deployment, integration, and customization, providing ongoing operational support." />
                    <ImageWithTextColumnComponent cardImage={gamificationImage} imageClass="3xl:w-[689px] 3xl:h-[427px] xl:w-[517px] xl:h-[320px] sm:w-[299px] sm:h-[185px] w-[300px] h-[186px]" text="Gamification Specialists" description="Experts in designing interactive learning experiences to boost engagement and retention." />
                </div>
            </div>
        </div>
    );
};

export default ExpertsSection;
