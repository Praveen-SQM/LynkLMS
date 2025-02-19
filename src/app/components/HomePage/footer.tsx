import React from 'react'
import Image from 'next/image'
import logo from "@/app/utilities/icons/lynk-logo.svg";

const Footer = () => {

    const footerItems = [
        {
            heading: "Product",
            items: [
                {
                    text: "Features"
                },
                {
                    text: "Intuitive LMS"
                }
            ]
        },
        {
            heading: "Company",
            items: [
                {
                    text: "About"
                },
                {
                    text: "Contact"
                },
                {
                    text: "Blog"
                }
            ]
        },
        {
            heading: "Policy",
            items: [
                {
                    text: "Terms & Conditions"
                },
                {
                    text: "Privacy Policy"
                }
            ]
        }
    ]

    return (
        <div className='xl:pt-[72px] sm:pt-[42px] pt-7 xl:pb-6 sm:pb-4 pb-7 sm:px-4 px-4 bg-[#090909] flex flex-col xl:gap-[111px] sm:gap-[62px] gap-6 items-center'>
            <div className='xl:py-[56px] sm:py-6 py-6 xl:px-[64px] px-7 flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-[43px] w-full xl:max-w-[1020px] sm:max-w-[572px] max-w-[343px] backdrop-blur-[2.676px] bg-white/5 xl:rounded-[21.4px] rounded-[10px]'>
                <p className='font-bold xl:text-[37.5px] xl:leading-[52px] text-[16px] leading-[22px] text-[#ffffff]'>Receive inquiries and <br />
                    <span className='text-[#635BFF]'>respond promptly.</span> </p>
                <div className='xl:h-[75px] h-[36px] xl:rounded-[16px] rounded-[7px] xl:border-[1.34px] border-[0.58px] border-[#2B2D31] xl:p-[10.7px] p-[4px] flex items-center justify-between xl:max-w-[498px] sm:max-w-[236px] max-w-[278px] w-full'>
                    {/* <p className='font-normal xl:text-[17.27px] xl:leading-[23.6px] text-[12px] leading-[16.4px] text-[#7A8089]'>Email address</p> */}
                    <input type='text' placeholder='Email address' className='font-normal xl:text-[17.27px] xl:leading-[23.6px] text-[12px] leading-[16.4px] text-[#7A8089] bg-transparent outline-none'/>
                    <div className='xl:h-[53.5px] sm:h-[26px] xl:rounded-[10.7px] rounded-[4px] xl:py-[10.7px] xl:px-[10.7px] sm:py-1 py-[6px] sm:px-2 px-3 bg-[#635BFF] cursor-pointer font-medium xl:text-[18.73px] xl:leading-[25.6px] sm:text-[13px] sm:leading-[17.6px] text-[12px] leading-[16.3px] text-[#ffffff] flex justify-center items-center text-nowrap'>Connect Now</div>
                </div>
            </div>
            <div className='flex flex-col xl:gap-[42px] sm:gap-[46px] gap-6 w-full items-center'>
                <div className='w-full 3xl:max-w-[1590px] xl:max-w-[1110px] sm:max-w-[750px] flex sm:flex-row flex-col items-start justify-between sm:gap-0 gap-[42px]'>
                    <div className='flex flex-col xl:gap-5 gap-3 xl:max-w-[207px] sm:max-w-[130px] max-w-[127px] sm:w-1/4'>
                        <div className='flex flex-col xl:gap-3 gap-[7px]'>
                            <Image src={logo} alt='logo' width={64} height={76} className='w-full h-full' />
                            <p className='font-normal xl:text-[18px] xl:leading-[22.5px] text-[13px] leading-[17.8px] text-[#ffffff]'>Unlock Your Product Potential with Lynk</p>
                        </div>
                        <p className='font-[300] xl:text-[16px] xl:leading-[21.86px] text-[13px] leading-[17.8px] text-[#ffffff]'>Lynk, 2025.</p>
                    </div>

                    <div className='flex items-start justify-between sm:w-3/4 w-full'>
                        {footerItems?.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col xl:gap-6 sm:gap-[14px] gap-3 w-fit sm:max-w-full max-w-[83px]'>
                                    <p className='font-normal xl:text-[18px] xl:leading-[22.5px] text-[13px] leading-[13px] text-[#7A7089]'>{item?.heading}</p>
                                    <div className='flex flex-col xl:gap-3 gap-2'>
                                        {item?.items?.map((option, index) => {
                                            return (
                                                <p key={index} className='font-medium xl:text-[18px] xl:leading-[22.5px] text-[13px] leading-[13px] text-[#ffffff]'>{option?.text}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className='font-normal xl:text-[13.83px] xl:leading-[18.9px] text-[13px] sm:leading-[13px] leading-[17.8px] text-[#7A8089]'>©2025 Lynk LMS.All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
