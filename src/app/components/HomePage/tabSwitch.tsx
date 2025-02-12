'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import partnerClient from '../../../../public/partner-clients.png'
import RemoteTeams from '../../../../public/remote-teams.png'
import trainingProvider from '../../../../public/training-provider.png'
import corporates from '../../../../public/corporates.png'
import EduInstitute from '../../../../public/Edu-institute.png'




const TabSwitch = () => {
    

    // const highlightWords = {
    //     Education: "text-[#EE3CD1]",
    //     Corporate: "text-[#EE3CD1]",
    //     Providers: "text-[#EE3CD1]",
    //     Remote: "text-[#EE3CD1]",
    //     Teams: "text-[#EE3CD1]",
    //     "Partners": "text-[#EE3CD1]",
    //     "&": "text-[#EE3CD1]",
    //     "Clients": "text-[#EE3CD1]"
    //   };

      const highlightWords = ["Education", "Corporate", "Providers", "Remote", "Teams","Partners","&","Clients"];

      // const highlightText = (text: string) => {
      //   return text.split(" ").map((word, index) => {
      //     const colorClass = highlightWords[word] || ""; // Get color class if word is in highlightWords
      //     return (
      //       <span key={index} style={{color: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)"}} className={colorClass}>
      //         {word}{" "}
      //       </span>
      //     );
      //   });
      // };

      const highlightText = (text: string) => {
        return text.split(" ").map((word, index) => {
          return highlightWords.includes(word) ? (
            <span
              key={index}
              style={{
                background: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              {word}{" "}
            </span>
          ) : (
            <span key={index}>{word} </span>
          );
        });
      };
      

    const tabOptions=[
        {
            name:"Edu Institutes",
            img:EduInstitute,
            title:"Transforming Education",
            description:"Revolutionize classrooms with interactive, digital learning experiences. Simplify student assessments and provide real-time feedback to enhance learning outcomes. Automate certification issuance and reduce administrative burden. Empower educators with powerful tools for content creation, grading, and student engagement."
        },
        {
            name:"Corporates",
            img:corporates,
            title:"Corporate Training Excellence",
            description:"Streamline employee onboarding and compliance training with our intuitive LMS. Deliver customized skill-building programs and measure ROI for continuous improvement. Tailor training content to meet specific corporate goals and increase employee performance. Ensure your workforce is always up-to-date with the latest industry standards."
        },
        {
            name:"Training Providers",
            img:trainingProvider,
            title:"Scalable Training for Providers",
            description:"Offer white-labeled, customisable LMS solutions for clients, allowing you to manage multiple training programs seamlessly. Cater to a wide range of industries with scalable tools that grow with your business. Track client progress and performance with in-depth analytics. Deliver a personalised learning experience that drives client satisfaction and retention."
        },
        {
            name:"Remote Teams",
            img:RemoteTeams,
            title:"Learning for Remote Teams",
            description:"Provide seamless learning experiences for distributed teams with offline access and multilingual support. Ensure consistent engagement and productivity, even in remote environments. Create a flexible learning path that adapts to varying time zones and schedules. Maximize training impact by connecting teams across diverse locations with tailored content."
        },
        {
            name:"Partners & clients",
            img:partnerClient,
            title:"Training for Partners & Clients",
            description:"For Partners and Clients: Deliver comprehensive product and service training through engaging content, ensuring a deeper understanding. Strengthen relationships by offering tailored learning paths that meet specific needs and enhance collaboration."
        }
    ]

    const [activeTab,setActiveTab]=useState(0)

  return (
      <div className='xl:pt-[72px] xl:pb-[165px] sm:pt-[48px] pt-[42px] sm:pb-[70px] flex flex-col justify-center items-center xl:gap-[58px] sm:gap-[33.6px] gap-[32px]'>
      <div className='flex flex-col items-center gap-1'>
        <p className='font-semibold 3xl:text-[18px] sm:text-[16px] text-[12px] sm:leading-[24px] leading-[16.39px] text-[#F47FD9]'>INTUITIVE LMS</p>
        <p className='font-bold 3xl:text-[52px] 3xl:leading-[71px] xl:text-[42px] xl:leading-[57.37px] sm:text-[32px] sm:leading-[43.71px] text-[24px] leading-[32.78px] text-[#1D1A27] 3xl:max-w-[698px] xl:max-w-[588px] sm:max-w-[430px] max-w-[323px] text-center'>Built for everyone,<br/>crafted for flexible learning.</p>
      </div>
      <div className='flex flex-col 3xl:gap-[34.38px] xl:gap-6 sm:gap-[14px] items-center hidden sm:block'>
        <div className='flex 3xl:gap-[111.73px] xl:gap-[78px] sm:gap-[40px] justify-center items-start 3xl:py-[17.19px] xl:py-[12px] sm:py-[7px]'>
            {tabOptions?.map((tab,index)=>{
                return(
                    <div key={index} onClick={()=>{setActiveTab(index)}} className='flex flex-col 3xl:gap-[23px] xl:gap-4 sm:gap-[9px] cursor-pointer'>
                        <p className={`font-bold 3xl:text-[28px] 3xl:leading-[38.25px] xl:text-[20px] xl:leading-5 sm:text-[16px] sm:leading-[21.86px] ${activeTab===index?"text-[#1D1A27]":"text-[#1D1A2799]"}`}>{tab?.name}</p>
                        <div className={`w-full 3xl:h-[5.73px] xl:h-[4px] sm:h-[2.32px] xl:rounded-b-[4.3px] sm:rounded-b-[1.74px] bg-[#1D1A27] ${activeTab===index?"":"hidden"}`}></div>
                    </div>
                )
            })}
        </div>
        <div className='bg-[#F7F7F7] xl:rounded-[34.38px] sm:rounded-[14px] flex items-center 3xl:gap-[146.11px] xl:gap-[102px] sm:gap-[40px] xl:max-w-[1140px] sm:max-w-[750px] xl:px-[40px] sm:px-[20px] xl:pb-5 sm:pb-2'>
            <div className='3xl:w-[842px] 3xl:h-[868px] xl:w-[588px] xl:h-[606px] sm:w-[367px] sm:h-[358px] object-cover'>
                <Image src={tabOptions?.[activeTab]?.img} alt='image' width={842} height={868} className='h-full w-full object-cover'/>
            </div>
            <div className='flex flex-col 3xl:gap-[34.38px] xl:gap-6 sm:gap-4 xl:max-w-[330px] sm:max-w-[302px]'>
                <p className='font-bold xl:text-[36px] xl:leading-[41.4px] sm:text-[20px] sm:leading-[24px] text-[#1D1A27]'>{highlightText(tabOptions?.[activeTab]?.title)}</p>
                <p className='font-normal xl:text-[16px] xl:leading-6 sm:text-[14px] sm:leading-[19.12px] text-[#1D1A27CC]'>{tabOptions?.[activeTab]?.description}</p>
                <div className='bg-[#ffffff] flex items-center justify-center cursor-pointer 3xl:h-[76.84px] xl:h-[53px] sm:h-[37px] 3xl:rounded-[17.19px] xl:rounded-[16px] sm:rounded-[7px] 3xl:border-[1.43px] xl:border-[1px] sm:border-[0.58px] 3xl:px-[17.19px] sm:px-3 w-fit font-semibold xl:text-[16px] xl:leading-[21px] sm:text-[12px] sm:leading-[12.16px] text-[#1D1A27]'>Connect Now</div>
            </div>
        </div>
      </div>

      <div className='sm:hidden block flex flex-col bg-[#F7F7FF] border-b px-4'>
        {tabOptions?.map((tab,index)=>{
          return(
            <div key={index} className='flex flex-col gap-[32px]  pt-[24px] pb-[32px]'>
              <div className='flex flex-col gap-6'>
                <p className='font-bold text-[20px] leading-[27.32px]'>{highlightText(tab?.title)}</p>
                <div className='w-full h-[341px]'>
                  <Image src={tab?.img} alt='image' width={340} height={341} className='h-full w-full object-cover'/>
                </div>
              </div>
              <div className='flex flex-col gap-6 items-center'>
                <p className='font-normal text-[14px] leading-[24px] text-[#1D1A27CC]'>{tab?.description}</p>
                <div className='h-12 rounded-[12px] border p-3 bg-[#ffffff] border-[#D9D8FF] font-semibold text-[14px] leading-[21px] text-[#1C1C1F]'>Connect Now</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TabSwitch
