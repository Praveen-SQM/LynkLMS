"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactModal from "../contactModal";
import correct from "../../../../public/green-tick.svg";
import image from "../../../../public/Frame 63.svg"
import wrong from "../../../../public/wrong.svg"
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const BenefitsOverviewSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const lynkColumnRef = useRef(null);
    const [lynkWidth, setLynkWidth] = useState(0);

    useEffect(() => {
        if (!lynkColumnRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setLynkWidth(entry.contentRect.width);
            }
        });
        observer.observe(lynkColumnRef.current);
        return () => observer.disconnect();
    }, []);

    const features = [
        { title: "Ownership", lynk: ` Full`, saas: "❌ No Ownership" },
        { title: "Branding", lynk: ` 100% Custom`, saas: "❌ Limited or None" },
        { title: "Customization", lynk: ` Tailored to you`, saas: "❌ Predefined, limited" },
        { title: "Cost Over 3 Years", lynk: ` One-time`, saas: "❌ Recurring, adds up" },
        { title: "Control & Data", lynk: `  You Own Everything`, saas: "❌ Shared or restricted" },
    ];

    return (
        <div
            id="intuitive-lms"
            className="w-full bg-[#FAFAFA] xl:py-[72px] sm:py-[42px] 3xl:py-[120px] py-6 flex flex-col align-center justify-center"
        >
            <div className="flex flex-col items-center justify-between gap-1">
                <p className="font-semibold 3xl:text-[18px] sm:text-[16px] text-[12px] sm:leading-[24px] leading-[16.39px] text-[#F47FD9]">
                    BENEFITS OVER ALTERNATIVES
                </p>
                <p className="font-bold 3xl:text-[52px] 3xl:leading-[62px] 3xl:font-[600] xl:text-[42px] xl:leading-[57.37px] sm:text-[32px] sm:leading-[43.71px] text-[24px] leading-[32.78px] text-[#1D1A27] text-center">
                    How <span className="bg-text-gradient text-transparent bg-clip-text">Lynk</span> Compares to other
                    <br />
                    LMS Platforms
                </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full px-[32px] lg:px-[32px] sm:px-[32px] pt-[64px] pb-[64px]  overflow-x-auto ">
                <div className="md:w-full   md:flex md:justify-center md:items-center w-full">
                <div className="flex gap-0 rounded-[16px]  bg-white min-w-[640px] sm:w-[1152px] 3xl:w-[1590px]" style={{boxShadow: "0px 25px 50px 0px #6459FF17"}}>
    {/* Features Column */}
    <div className="flex flex-col flex-1 bg-white rounded-[16px]">
        {/* Features header */}
        <div className="font-semibold text-[#1D1A27] xl:text-[18px] 3xl:text-[20px] lg:text-[16px] sm-text-[14px] font-[600] h-[100px] w-full px-[10px] xl:px-[48px] lg:px-[30px] sm:px-[10px] flex items-center border-b border-[#6B728080] rounded-tl-[16px]">
            Features
        </div>

        {/* Features list */}
        {features.map((feature, idx) => (
            <div
                key={idx}
                className={`h-[78px] flex items-center px-[10px] xl:px-[48px] lg:px-[30px] sm:px-[10px] 3xl:text-[16px] xl:text-[14px] font-[600] text-[#1D1A27] ${
                    idx !== features.length - 1 ? 'border-b border-[#6B728080]' : ''
                }`}
            >
                {feature.title}
            </div>
        ))}
    </div>

    {/* Lynk Column */}
    <div
        ref={lynkColumnRef}
        className="flex flex-col flex-1 relative rounded-[16px] p-[1px]"
        style={{
            background: "linear-gradient(90deg, #3B82F6, #A855F7, #EC4899)",
        }}
    >
        <div className="bg-[#f7f7ff] flex flex-col justify-between rounded-[14px] h-full">
            {/* Lynk Header */}
            <div className="font-semibold text-[#1D1A27] xl:text-[18px] lg:text-[16px] sm-text-[14px] 3xl:text-[20px] font-[600] h-[100px] w-full px-[10px] xl:px-[48px] lg:px-[30px] sm:px-[10px] flex items-center justify-between border-b border-[#6B728080]">
                <Image src={image} alt="Check" />
                <div className="hidden lg:inline-block p-[1px] rounded-[33px] bg-[linear-gradient(89.86deg,#EE3CD1_6.14%,#635BFF_84.43%)]">
                    <span className="text-[6px] 3xl:text-[10px] xl:text-[8px] px-2 py-[8px] bg-[#EEF0F3] rounded-full text-[#6F697AB2] font-bold block">
                        YOU OWN IT
                    </span>
                </div>
            </div>

            {/* Features */}
            <div className="flex-grow">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`h-[78px] flex items-center px-[10px] xl:px-[48px] lg:px-[30px] sm:px-[10px] 3xl:text-[16px] xl:text-[14px] font-[600] text-[#1D1A27] ${
                            idx !== features.length - 1 ? 'border-b border-[#6B728080]' : ''
                        }`}
                    >
                        <div className="flex items-center gap-[12px]">
                            <Image src={correct} alt="Check" className="w-4 h-4" />
                            {feature.lynk.replace("✅ ", "")}
                        </div>
                    </div>
                ))}
            </div>

            {/* Button Row - Now only in the Lynk column */}
            <div className="p-4 rounded-b-[14px] ">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full font-bold text-white py-[16px] rounded-[8px] text-[18px] shadow-lg"
                    style={{
                        background: "linear-gradient(90deg, #3B82F6, #A855F7, #EC4899)",
                    }}
                >
                    <Link href="/contact-us">Get Started</Link>
                </motion.button>
            </div>
        </div>
    </div>

    {/* Typical SaaS LMS Column */}
    <div className="flex flex-col flex-1 bg-white rounded-[16px]">
        <div className="h-[100px] flex items-center justify-between px-[10px] xl:px-[48px] lg:px-[30px] sm:px-[10px] text-[#1D1A27] border-b font-[600] xl:text-[20px] border-[#6B728080]">
            <span className="xl:text-[18px] 3xl:text-[20px] font-[600] lg:text-[14px] sm-text-[14px] text-nowrap text-[#1D1A27]">
                Typical SaaS LMS
            </span>
            <div className="hidden lg:inline-block p-[1px] rounded-[33px] bg-[#6F697AB2]">
                <span className="text-[6px] 3xl:text-[10px] xl:text-[8px] px-2 py-[8px] bg-white rounded-full text-[#6F697AB2] font-bold block">
                    YOU RENT IT
                </span>
            </div>
        </div>

        {/* Features */}
        {features.map((feature, idx) => (
            <div
                key={idx}
                className={`h-[78px] flex items-center px-[10px] xl:px-[48px] lg:px-[30px] sm:px-[10px] 3xl:text-[16px] xl:text-[14px] font-[600] text-[#1D1A27] ${
                    idx !== features.length - 1 ? 'border-b border-[#6B728080]' : ''
                }`}
            >
                <div className="flex items-center gap-[12px]">
                    <Image src={wrong} alt="Wrong" className="w-[20px] h-[20px]" />
                    {feature.saas.replace("❌ ", "")}
                </div>
            </div>
        ))}
    </div>
</div>


                </div>






            </div>

            <ContactModal
                isOpen={contactModalOpen}
                onClose={() => setContactModalOpen(false)}
            />
        </div>
    );
};

export default BenefitsOverviewSection;
