'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import phoneIcon from "@/app/utilities/icons/phone-icon-contact.svg"
import salesIcon from "@/app/utilities/icons/sales-icon.svg"
import phoneIconMobile from "@/app/utilities/icons/phone-icon-mobile.svg"
import salesIconMobile from "@/app/utilities/icons/sales-icon-mobile.svg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image';
import { FloatingBackground } from '@/app/components/ContactUsPage/LMSLanding/FloatingTriangles';
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import thanksImage from "@/app/utilities/images/thanks-image.png"

const Thanks: React.FC = () => {

    const enquiryList = [
        {
            icon: phoneIcon,
            phoneIcon: phoneIconMobile,
            title: "General Enquiry",
            number: "+91 96068 27067"
        },
        {
            icon: salesIcon,
            phoneIcon: salesIconMobile,
            title: "Sales Enquiry",
            number: "+91 7204701593"
        }
    ]

    return (
        <div className='w-full sm:bg-[#534BEF] sm:bg-gradient-to-br sm:from-[#433BDB] sm:to-[#635BFF] bg-[#FAFAFA] flex flex-col items-center pt-[91px] xl:pb-[111px] sm:pb-[91px]'>
            <div className='sm:block hidden'>
                <FloatingBackground />
            </div>
            <div className="h-full w-full flex xl:flex-row flex-col items-center justify-center 3xl:gap-[221px] xl:gap-[156px] sm:gap-[48px] gap-[42px]">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col xl:gap-[148px] w-full 3xl:max-w-[397px] xl:max-w-[382px] sm:max-w-[666px] max-w-[343px]"
                >
                    <div className='flex flex-col gap-3 xl:flex hidden'>
                        <h2 className="text-bold text-[20px] leading-[27.3px] text-[#FFFFFF]">Contact Us.</h2>
                        <div className='w-[30px] h-1 bg-[#EE3CD1]'></div>
                    </div>
                    <div className='flex flex-col gap-[42px]'>
                        <div className='sm:flex hidden flex-col sm:gap-4 gap-1 xl:items-start sm:items-center items-start'>
                            <h1 className="font-bold xl:text-[42px] xl:leading-[57.4px] sm:text-[32px] sm:leading-[43.7px] text-[24px] leading-[32.8px] sm:text-[#ffffff] text-[#141414] sm:max-w-full max-w-[213px]">
                                Empower learners -let’s talk.
                            </h1>
                            <p className="font-normal sm:text-[16px] text-[14px] leading-[24px] sm:text-[#ffffff] text-[#141414] xl:max-w-full sm:max-w-[375px] xl:text-start sm:text-center text-start">
                                Please feel free to share your thoughts and we can
                                discuss it over a cup of tea.
                            </p>
                        </div>

                        <div className="flex flex-col gap-7 xl:flex hidden">
                            {enquiryList?.map((CardItem, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px]'>
                                            <Image src={CardItem?.icon} alt={CardItem?.title} width={52} height={52} className='w-full h-full object-contain' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-semibold text-[16px] leading-[26px] text-[#FFFFFF]'>{CardItem?.title}</p>
                                            <p className='font-normal text-[16px] leading-[22px] text-[#FFFFFF]'>{CardItem?.number}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Right Section - Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full sm:max-w-[662px] max-w-[343px] z-10"
                >

                    <div className='rounded-[24px] p-6 3xl:h-[662px] xl:h-[625px] sm:h-[630px] h-[600px] sm:bg-[#FFFFFF] bg-transparent flex flex-col items-center justify-center sm:gap-[42px] gap-[45px]'>
                        <div className='flex flex-col items-center justify-center sm:gap-[20px] gap-[14px] sm:max-w-[492px] max-w-[241px]'>
                            <p className='font-bold sm:text-[24px] text-[16px] leading-[16.7px] text-[#1D1A27] text-center'>Thank You for Reaching Out!</p>
                            <p className='font-medium sm:text-[13px] text-[12px] text-[#4A4852] text-center'>We’ve received your message and will get back to you soon. Our team is excited to connect and assist you.</p>
                        </div>
                        <div className='sm:w-[239px] sm:h-[239px] w-[141px] h-[151px]'>
                            <Image src={thanksImage} alt='thanks' width={239} height={239} className='h-full w-full object-cover'/>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="sm:flex hidden items-center justify-between xl:hidden w-full sm:max-w-[666px] max-w-[343px] sm:mb-0 mb-[26px]"
                >
                    {enquiryList?.map((CardItem, index) => {
                        return (
                            <div key={index} className='flex items-start sm:gap-6 gap-1'>
                                <div className='sm:w-[52px] sm:h-[52px] w-6 h-6 sm:block hidden'>
                                    <Image src={CardItem?.icon} alt={CardItem?.title} width={52} height={52} className='w-full h-full object-contain' />
                                </div>
                                <div className='sm:w-[52px] sm:h-[52px] w-6 h-6 sm:hidden block'>
                                    <Image src={CardItem?.phoneIcon} alt={CardItem?.title} width={52} height={52} className='w-full h-full object-contain' />
                                </div>
                                <div className='flex flex-col sm:gap-2 gap-1'>
                                    <p className='font-semibold sm:text-[16px] sm:leading-[26px] text-[14px] leading-[19px] sm:text-[#FFFFFF] text-[#000000]'>{CardItem?.title}</p>
                                    <p className='font-normal sm:text-[16px] sm:leading-[22px] text-[14px] leading-[19px] sm:text-[#FFFFFF] text-[#000000]'>{CardItem?.number}</p>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Thanks;