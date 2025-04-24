import React from "react";
import Image from "next/image";
import Link from "next/link";
import instantSupportIcon from "@/app/utilities/icons/instant-support.svg"
import availabilityIcon from "@/app/utilities/icons/availablity.svg"
import qualityAssuranceIcon from "@/app/utilities/icons/quality-assurance.svg"
import qualitySectionImage from "@/app/utilities/images/Quality-section.svg"
import rightIcon from "@/app/utilities/icons/hugeicons_tick-02.svg"
import phoneCallIcon from "@/app/utilities/icons/phone-call-home.svg"
import annotationCheckIcon from "@/app/utilities/icons/annotation-check-home.svg"
import chatIcon from "@/app/utilities/icons/message-chat-circle.svg"
const QualitySection = () => {
    const qualities = [
        {
            icon: instantSupportIcon,
            title: "Instant support",
            description: "Lynk LMS ensures the best user experience with instant support."
        },
        {
            icon: availabilityIcon,
            title: "24/7 availability",
            description: "Our support team is available 24/7. Contact us at support@lynklms.com."
        },
        {
            icon: qualityAssuranceIcon,
            title: "Quality assurance",
            description: "Enjoy 99.99% uptime and scalable products for uninterrupted service."
        }
    ]
    const qualityPoints = [
        {
            text: "Seamless Learning Experience – Intuitive and user-friendly interface for effortless navigation."
        },
        {
            text: "Get personalized assistance for onboarding, troubleshooting, and optimizing your LMS for maximum efficiency."
        },
        {
            text: "Access learning anytime, anywhere with a responsive and mobile-friendly design."
        }
    ]
    return (
        <div className="xl:py-[100px] sm:py-[72px] py-[42px] flex flex-col xl:gap-[92px] sm:gap-[52px] gap-[46px] xl:px-0 sm:px-4 justify-center items-center">
            <div className="flex flex-col xl:px-0 px-4 max-w-6xl 3xl:min-w-[1590px] xl:gap-[68px] sm:gap-[38px] gap-7 items-center">
                <div className="flex flex-col xl:gap-4 sm:gap-[10px] gap-2 items-center">
                    <p className="font-bold 3xl:text-[48px] 3xl:leading-10 xl:text-[36px] xl:leading-[40px] sm:text-[32px] sm:leading-[43.71px] text-[24px] leading-[32.8px] text-[#1D1A27]">Fast. Reliable. Effective.</p>
                    <p className="font-normal 3xl:w-[1060px] 3xl:text-[20px] 3xl:leading-[27.32px] xl:text-[16px] xl:leading-[21.86px] text-[14px] leading-[19.12px] text-[#1D1A27CC] xl:max-w-full sm:max-w-[612px] max-w-[343px] text-center">With 24/7 customer support, robust quality assurance, and a user-friendly interface, we ensure a hassle-free and effective learning experience. </p>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 justify-between 3xl:gap-[32px] xl:gap-[15px] 3xl:min-w-[1590px] w-full gap-[12px]">
                    {qualities?.map((quality, index) => {
                        return (
                            <div key={index} className={`3xl:rounded-[24px] xl:rounded-[42px] rounded-[25px] 3xl:py-[40px] xl:py-10 py-6 3xl:px-[42px] xl:px-[34px] px-5 bg-[#635BFF] flex flex-col 3xl:gap-[8px] xl:gap-6 gap-3 w-full ${index === qualities.length - 1 ? "col-span-2 sm:col-span-1" : ""} `}>
                                <div className="flex flex-col 3xl:gap-[16px] xl:gap-7 gap-4">
                                    <div className="xl:h-10 xl:w-10">
                                        <Image src={quality?.icon} alt="image" width={40} height={40} className=" object-cover" />
                                    </div>
                                    <p className="font-bold 3xl:text-[24px] 3xl:leading-8 xl:text-[18px] xl:leading-6 text-[16px] leading-[14px] text-[#FFFFFF]">{quality?.title}</p>
                                </div>
                                <p className="font-normal 3xl:text-[22px] 3xl:leading-8 xl:text-[16px] xl:leading-6 sm:text-[14px] sm:leading-[19.12px] text-[13px] leading-[17.76px] text-[#FFFFFF]">{quality?.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex sm:flex-row max-w-6xl 3xl:min-w-[1590px] lg:max-w-[900px] xl:max-w-[1200px] md:max-w-[750px] flex-col items-center justify-between gap-[46px] w-full">
                <div className="relative">
                    <div className="3xl:w-9 3xl:h-9 xl:w-7 xl:h-7 w-5 h-5 absolute left-[0px] top-[31%] animate-float">
                        <Image src={phoneCallIcon} alt="image" width={28} height={28} className="w-full h-full object-cover"/>
                    </div>
                    <div className="3xl:w-9 3xl:h-9 xl:w-7 xl:h-7 w-5 h-5 absolute right-[27px] top-[10%] animate-float">
                        <Image src={annotationCheckIcon} alt="image" width={28} height={28} className="w-full h-full object-cover"/>
                    </div>
                    <div className="3xl:w-9 3xl:h-9 xl:w-7 xl:h-7 w-5 h-5 absolute right-[0px] bottom-[40%] animate-float">
                        <Image src={chatIcon} alt="image" width={28} height={28} className="w-full h-full object-cover"/>
                    </div>
                    <div className="3xl:w-[470px] 3xl:h-[410px] xl:w-[365px] xl:h-[320px] lg:h-[235px] md:h-[235px] w-[268px] sm:h-[200px]">
                        <Image src={qualitySectionImage} alt="image" width={365} height={424} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col sm:items-start items-center xl:gap-[42px] gap-6 xl:max-w-[442px] 3xl:max-w-[740px] sm:max-w-[399px] max-w-[343px]">
                    <div className="flex flex-col xl:gap-[32px] sm:gap-5 gap-6">
                    <p className="font-bold xl:text-[36px] xl:leading-10 text-[26px] text-[#1D1A27] font-manrope">
  Reliable Assistance. Uninterrupted{" "}
  <span className="bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
    Learning
  </span>.
</p>
 <div className="flex flex-col gap-4">
                            {qualityPoints?.map((quality, index) => {
                                return (
                                    <div key={index} className="flex items-start xl:gap-[5px] gap-[3px]">
                                        <div className="w-[32px] h-[32px]">
                                            <Image src={rightIcon} alt="right icon" width={32} height={32} className="object-cover" />
                                        </div>
                                        <p className="font-normal 3xl:text-[20px] 3xl:leading-8 xl:text-[16px] xl:leading-6 text-[14px] leading-[20px] text-[#1D1A27CC]">{quality?.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Link
  href="/contact-us"
  className="float-start xl:max-w-[280px] max-w-[162px] 3xl:h-[57px] xl:h-12 h-[37.5px] xl:px-6 px-[14px] w-full flex items-center justify-center font-bold 3xl:text-[18px] 3xl:leading-[25px] xl:text-[16px] xl:leading-4 text-[14px] leading-[19.12px] text-center text-white"
  style={{
    borderRadius: '8px',
    background: 'linear-gradient(90deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%), rgba(255, 255, 255, 0.85)',
  }}
>
  Contact Us
</Link>
                    {/* <Link href={"/contact-us"} className="bg-[#EE3CD1] float-start xl:max-w-[280px] max-w-[162px] 3xl:h-[57px] xl:h-12 h-[37.5px] xl:rounded-[8px] rounded-[4.63px] xl:px-6 px-[14px] w-full flex items-center justify-center font-bold 3xl:text-[18px] 3xl:leading-[25px] xl:text-[16px] xl:leading-4 text-[14px] leading-[19.12px] text-center text-[#FFFFFF]">Contact Us</Link> */}
                </div>
            </div>
        </div>
    );
};
export default QualitySection;