import React from "react";
import dashboardImage from "@/app/utilities/images/DASHBOARD.svg"
import EllipseImage from "@/app/utilities/images/Ellipse.svg"
import dashboardCurve from "@/app/utilities/images/dashboard-curve.svg"
import automationImage from "@/app/utilities/images/automation-cropped.svg"
import automationEllipse from "@/app/utilities/images/automation-Ellipse.svg"
import courseManagement from "@/app/utilities/images/course-management.svg"
import employeeManagement from "@/app/utilities/images/employeeManagement.svg"
import employeeEllipse from "@/app/utilities/images/employee-ellipse.svg"
import Image from "next/image";


export const HeadingWithText = ({ heading, options, className }) => {
    return (

        <div className={`flex flex-col 3xl:gap-[27px] xl:gap-5 sm:gap-3 gap-4 w-full ${className}`}>
            <p className="font-bold 3xl:text-[38px] 3xl:leading-[52px] xl:text-[28px] xl:leading-[38.25px] text-[16px] leading-[22px] text-[#192A3D]">{heading}</p>
            <ul className="flex flex-col 3xl:gap-[27px] xl:gap-5 gap-3 list-disc list-inside font-medium 3xl:text-[20px] 3xl:leading-[32px] xl:text-[16px] xl:leading-[24px] text-[14px] leading-[19px] text-[#3A4F66]">
                {options?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

const LMSFeatures = () => {
    const dashboardItems = [
        "Provides an overview of key metrics, system performance, and quick access to essential features for administrators and users.",
        "Offers insights through reports, data visualization, and tracking tools to analyze performance, progress, and trends.",
    ];

    const automationItems = [
        "Streamlines repetitive tasks, such as notifications, progress tracking, and workflow management, to improve efficiency.",
        "Enhances efficiency by integrating automated tracking, reporting, and rule-based actions."
    ]

    const courseItems = [
        "Facilitates the creation, organization, and delivery of courses, including content uploads and scheduling.",
        "Facilitates the creation, organization, and delivery of courses, including content uploads and scheduling.",
        "Organizes courses, quizzes, and other content into categories for easy navigation and filtering.",
    ]

    const employeeManagementItems = [
        "Manages employee profiles, roles, work assignments, and performance tracking.",
        "Handles company structures, departments, branches, and overall system configurations.",
        "Defines user access levels, controls permissions, and ensures secure data handling based on user roles."
    ]

    return (
        <div className="w-full xl:py-[120px] py-[72px] flex flex-col items-center sm:gap-[42px] gap-[32px]">
            <div className="flex flex-col xl:gap-5 sm:gap-3 gap-4 xl:max-w-[815px] items-center">
                <p className="font-bold 3xl:text-[56px] 3xl:leading-[76.5px] xl:text-[42px] xl:leading-[57.4px] sm:text-[24px] sm:leading-[32.8px] text-[22px] leading-[30px] text-[#1D1A27] text-center xl:max-w-[815px] sm:max-w-[380px] max-w-[343px]">Boost Learning with Custom
                    <span style={{
                        background: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                    }}> LMS Features</span></p>
                <p className="font-medium 3xl:text-[18px] 3xl:leading-[32px] xl:text-[16px] xl:leading-[28px] text-[14px] leading-[19px] text-[#4A4852] text-center xl:max-w-[815px] sm:max-w-[686px] max-w-[343px]">Access a diverse collection of expertly crafted courses and training materials, ready to deploy and designed to meet various learning needs.</p>
            </div>

            <div className="flex flex-col 3xl:gap-[32px] xl:gap-6 sm:gap-[14px] gap-6 items-center">
                <div className="bg-[#D9D6FE66] 3xl:h-[673px] 3xl:w-[1600px] xl:h-[506px] xl:w-[1200px] sm:h-[296px] sm:w-[750px] h-[431px] w-[343px] 3xl:rounded-[34px] xl:rounded-[25.3px] sm:rounded-[14px] rounded-[16px] flex sm:flex-row flex-col items-center 3xl:gap-[99px] xl:gap-[75px] sm:gap-[53px] gap-0 3xl:pl-[77px] xl:pl-[58px] sm:pl-[28px] p-4 relative overflow-hidden">
                    <HeadingWithText heading="Dashboard & Analytics" options={dashboardItems} className="3xl:max-w-[669px] xl:max-w-[502px] sm:max-w-[328px] max-w-full relative z-10" />
                    <div className="relative flex-1">
                        {/* Background ellipse */}
                        <div className="3xl:w-[514px] 3xl:h-[514px] xl:w-[386px] xl:h-[386px] sm:w-[226px] sm:h-[226px] w-[110px] h-[110px] ml-auto xl:mr-8 sm:mt-0 mt-4">
                            <Image
                                src={EllipseImage}
                                alt="Background ellipse"
                                width={386}
                                height={386}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Main dashboard image */}
                        <div className="absolute sm:left-[45px] sm:top-[76px] left-[-81px] top-[55px] 3xl:w-[709px] 3xl:h-[514px] xl:w-[520px] xl:h-[370px] sm:w-[296px] sm:h-[186px] w-[307px] h-[195px] z-10">
                            <Image
                                src={dashboardImage}
                                alt="Dashboard preview"
                                width={520}
                                height={370}
                                className="w-full h-full object-fill rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Decorative curve */}
                        <div className="absolute 3xl:right-[680px] xl:right-[493px] sm:right-[250px] 3xl:bottom-[358px] xl:bottom-[238px] sm:bottom-[112px] 3xl:w-[106px] 3xl:h-[117px] xl:w-[80px] xl:h-[88px] sm:w-[47px] sm:h-[51px] sm:block hidden">
                            <Image
                                src={dashboardCurve}
                                alt="Decorative curve"
                                width={80}
                                height={88}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="absolute 3xl:bottom-[438px] xl:bottom-[310px] sm:bottom-[157px] xl:left-[-147px] sm:left-[-50px] 3xl:p-4 xl:p-3 sm:p-[7px] 3xl:rounded-[10.7px] xl:rounded-[8px] sm:rounded-[4.7px] h-fit w-fit bg-[#534BEF] sm:block hidden">
                            <p className="font-medium 3xl:text-[16px] 3xl:leading-[19.2px] xl:text-[12px] xl:leading-[14.4px] sm:text-[8px] sm:leading-[9.6px] text-center text-[#FFFFFF] max-w-[167px]">Monitor ongoing and completed tasks.</p>
                        </div>
                    </div>
                    <div className="3xl:w-[215px] 3xl:h-[215px] xl:w-[150px] xl:h-[150px] w-[110px] h-[110px] absolute left-[-14px] bottom-0 z-0">
                        <Image src={automationEllipse} alt="Automation ellipse" width={193} height={193} className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="flex flex-col 3xl:gap-[32px] xl:gap-6 sm:gap-[14px] gap-6">
                    <div className="flex sm:flex-row flex-col items-center 3xl:gap-[32px] xl:gap-[30px] sm:gap-[14px] gap-6">
                        <div className="3xl:w-[782px] xl:w-[587px] sm:w-[368px] w-[343px] 3xl:h-[979px] xl:h-[735px] sm:h-[542px] h-[523px] 3xl:rounded-[34px] xl:rounded-[25.3px] sm:rounded-[14px] rounded-[16px] bg-[#D9D6FE66] relative overflow-hidden">
                            <div className="flex flex-col 3xl:gap-8 xl:gap-6 gap-[14px] items-center relative z-10 3xl:mt-[47px] xl:mt-[36px] sm:mt-[42px] mt-[21px]">
                                <div className="3xl:w-[556px] 3xl:h-[533px] xl:w-[418px] xl:h-[400px] sm:w-[259px] sm:h-[251px] w-[294px] h-[284px]">
                                    <Image src={automationImage} alt="Automation image" width={418} height={400} className="w-full h-full object-fill" />
                                </div>
                                <HeadingWithText heading="Automation & System Processes" options={automationItems} className="3xl:max-w-[672px] xl:max-w-[504px] sm:max-w-[327px] max-w-[294px]" />
                            </div>
                            <div className="3xl:w-[257px] 3xl:h-[257px] xl:w-[193px] xl:h-[193px] sm:w-[113px] sm:h-[113px] w-[113px] h-[113px] absolute left-[-14px] bottom-0 z-0">
                                <Image src={automationEllipse} alt="Automation ellipse" width={193} height={193} className="w-full h-full object-contain" />
                            </div>
                        </div>

                        <div className="3xl:w-[782px] xl:w-[587px] sm:w-[368px] w-[343px] 3xl:h-[979px] xl:h-[735px] sm:h-[542px] h-[523px] 3xl:rounded-[34px] xl:rounded-[25.3px] sm:rounded-[14px] rounded-[16px] bg-[#D9D6FE66] relative overflow-hidden">
                            <div className="flex flex-col 3xl:gap-8 xl:gap-6 sm:gap-[14px] gap-[30px] items-center relative z-10 3xl:mt-[47px] xl:mt-[36px] sm:mt-[42px] mt-[17px]">
                                <div className="3xl:w-[556px] 3xl:h-[533px] xl:w-[418px] xl:h-[400px] sm:w-[259px] sm:h-[251px] w-[300px] h-[230px]">
                                    <Image src={courseManagement} alt="Automation image" width={418} height={400} className="w-full h-full object-fill" />
                                </div>
                                <HeadingWithText heading="Course & Quiz Management" options={courseItems} className="3xl:max-w-[672px] xl:max-w-[504px] sm:max-w-[327px] max-w-[294px]" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#D9D6FE66] 3xl:h-[673px] 3xl:w-[1600px] xl:h-[506px] xl:w-[1200px] sm:h-[296px] sm:w-[750px] h-[586px] w-[343px] 3xl:rounded-[34px] xl:rounded-[25.3px] sm:rounded-[14px] rounded-[16px] flex sm:flex-row flex-col items-center justify-between relative overflow-hidden">
                        <div className="3xl:w-[257px] 3xl:h-[257px] xl:w-[193px] xl:h-[193px] sm:w-[113px] sm:h-[113px] absolute left-0 top-[-18px] z-0 sm:block hidden">
                            <Image src={employeeEllipse} alt="Automation ellipse" width={193} height={193} className="w-full h-full object-contain" />
                        </div>
                        <HeadingWithText heading="Employee & Organisation Management" options={employeeManagementItems} className="3xl:max-w-[589px] 3xl:ml-[54px] xl:max-w-[443px] xl:ml-[43px] sm:max-w-[345px] max-w-[311px] sm:ml-[29px] sm:mt-0 mt-6 relative z-10" />
                        <div className="relative">

                            <div className="3xl:w-[638px] 3xl:h-[604px] xl:w-[479px] xl:h-[453px] sm:w-[280px] sm:h-[265px] w-full h-[324px]">
                                <Image src={employeeManagement} alt="Automation image" width={479} height={453} className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute 3xl:bottom-[438px] 3xl:left-[-168px] xl:bottom-[310px] xl:left-[-130px] sm:bottom-[210px] sm:left-[-85px] 3xl:p-4 xl:p-3 sm:p-[7px] xl:rounded-[8px] sm:rounded-[2.34px] h-fit w-fit bg-[#534BEF] 3xl:w-[232px] sm:block hidden">
                                <p className="font-medium 3xl:text-[16px] 3xl:leading-[19.2px] xl:text-[12px] xl:leading-[14.4px] sm:text-[8px] sm:leading-[9.6px] text-center text-[#FFFFFF] max-w-[167px] text-nowrap">Organisation Management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LMSFeatures;
