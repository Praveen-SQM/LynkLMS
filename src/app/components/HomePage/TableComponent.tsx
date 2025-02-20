import React from 'react';
import logo from "@/app/utilities/icons/table-logo.svg";
import moodleIcon from "@/app/utilities/icons/moodle-icon.svg"
import talentLMSIcon from "@/app/utilities/icons/talentLMS.svg"
import Image from 'next/image';

interface LMSFeature {
    feature: string;
    lynx: string;
    typical: string;
    moodle: string;
    competitor: string;
}

const features: LMSFeature[] = [
    {
        feature: 'Pricing',
        lynx: '₹9.5L (One-time purchase) + Optional Customizations',
        typical: '₹2,000 - ₹10,000 per user/month',
        moodle: 'Free (Open Source) + Hosting & Setup (~₹1-5L)',
        competitor: 'Subscription: ₹3,000 - ₹15,000 per user/month'
    },
    {
        feature: 'Cost Over 5 Years',
        lynx: '₹9.5L one-time cost + ₹6-12L for customizations/support',
        typical: '₹6L - ₹30L for 50 users (recurring annually)',
        moodle: '₹8-10L initial setup + maintenance costs',
        competitor: '₹9L - ₹45L for 50 users (recurring annually)'
    },
    {
        feature: 'Ownership',
        lynx: 'Full ownership; white-labeled under your brand',
        typical: 'No ownership; tied to subscription plans',
        moodle: 'Full ownership, but requires tech expertise',
        competitor: 'No ownership; subscription only'
    },
    {
        feature: 'Branding',
        lynx: '100% customizable branding (logo, themes, intro video)',
        typical: 'Limited branding options',
        moodle: 'Limited branding without plugins',
        competitor: 'Limited branding'
    },
    {
        feature: 'Customization',
        lynx: 'High customizability; tailored to client needs',
        typical: 'Limited customization; predefined workflows',
        moodle: 'High customization but requires coding skills',
        competitor: 'Moderate; limited flexibility'
    },
    {
        feature: 'SCORM/xAPI Compliance',
        lynx: 'SCORM/xAPI Compliance',
        typical: 'Partially supported or in higher price tiers',
        moodle: 'SCORM supported; xAPI needs additional setup',
        competitor: 'SCORM/xAPI available in premium plans'
    },
    {
        feature: 'User Management',
        lynx: 'Role-based access, bulk registrations, employee tracking',
        typical: 'Basic to intermediate course creation tools',
        moodle: 'Requires plugins for advanced features',
        competitor: 'Predefined and limited features'
    },
    {
        feature: 'Course Management',
        lynx: 'Create/manage courses with video, audio, quizzes',
        typical: 'Basic user management',
        moodle: 'Requires plugins for advanced features',
        competitor: 'Predefined and limited features'
    },
    {
        feature: 'Reports & Analytics',
        lynx: 'Advanced: revenue, training matrices, quiz feedback etc.',
        typical: 'Basic or intermediate-level analytics',
        moodle: 'Limited unless integrated with third-party tools',
        competitor: 'Intermediate analytics; limited customization'
    },
    {
        feature: 'Certificates',
        lynx: 'Automated certificate generation and bulk downloads',
        typical: 'Standard or premium features',
        moodle: 'Requires plugins or manual setup',
        competitor: 'Basic automation'
    },
    {
        feature: 'Integration with Other Tools',
        lynx: 'Flexible and custom integrations (CRM, HR, etc.)',
        typical: 'Limited integrations or costly add-ons',
        moodle: 'Requires coding expertise',
        competitor: 'Predefined but limited'
    },
    {
        feature: 'Support',
        lynx: 'Personalized onboarding, training, and ongoing support',
        typical: 'Standard support; priority support costs extra',
        moodle: 'Limited community support',
        competitor: 'Standard support'
    },
    {
        feature: 'Best For',
        lynx: 'Enterprises looking for a scalable, branded, and affordable LMS',
        typical: 'Startups or SMBs with low initial budgets',
        moodle: 'Tech-savvy teams with in-house IT resources',
        competitor: 'Mid-sized businesses preferring SaaS models'
    }
];

const LMSComparisonTable = () => {
    return (
        <div className='w-full lg:px-0 pl-4 xl:py-[72px] sm:py-[42px] py-6 bg-[#FAFAFA] flex flex-col justify-center  items-center sm:gap-[72px] gap-[42px]'>
            <div className='flex flex-col items-center sm:gap-4 gap-2 xl:max-w-[670px] sm:max-w-[544px] max-w-[343px]'>
                <p className='font-bold 3xl:text-[52px] 3xl:leading-[71px] xl:text-[42px] xl:leading-[57.37px] sm:text-[32px] sm:leading-[43.7px] text-[20px] leading-[27.3px] text-[#1D1A27] text-center'>LMS <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Comparison</span>: Make an Informed Decision</p>
                <p className='font-normal sm:text-[16px] sm:leading-7 text-[14px] leading-[19px] text-[#1D1A27CC] text-center'>Compare LMS platforms to find the best fit for your needs.</p>
            </div>
            <div className="overflow-hidden w-full border-[2px] max-w-6xl border-[#E8E8E8] bg-[#FFFFFF] rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="sticky left-0 z-10 bg-[#635BFF] sm:pl-[22px] pl-3 font-bold xl:text-[20px] xl:leading-[27.3px] sm:text-[18px] sm:leading-[24.6px] text-[14px] leading-[19px] text-[#FFFFFF] text-start border-r-[1px] border-[#E5E7EB] w-[240px] h-[83px]">
                                    Features
                                </th>
                                <th className="sm:px-[22px] px-3 py-[18.5px] border-r-[1px] border-[#E5E7EB] 3xl:w-[303px] sm:w-[240px] h-[83px] flex items-center justify-center">
                                    <div className="flex items-start gap-[10px]">
                                        <div className='w-[35.5px] h-[37.5px]'>
                                            <Image src={logo} alt="Lynk Logo" width={35.5} height={37.5} className="w-full h-full object-contain"/>
                                        </div>
                                        <p className='font-medium text-[16px] leading-[22px] text-[#222222] text-start'>Lynk 
                                        <br/><span className='text-[14px] text-[#88898A] text-nowrap'>(₹8L, White-Labeled)</span></p>
                                    </div>
                                </th>
                                <th className="pl-[22px] pr-[27px] pt-[22px] pb-4 border-r-[1px] border-[#E5E7EB] 3xl:w-[349px] sm:w-[240px] h-[83px]">
                                        <p className='font-medium text-[16px] leading-[22px] text-[#222222] text-nowrap text-start'>Typical Subscription LMS<br/><span className='text-[14px] text-[#88898A]'>(e.g., SaaS)</span></p>
                                </th>
                                <th className="pl-[22px] pr-[74px] pt-[22px] pb-4 border-r-[1px] border-[#E5E7EB] 3xl:w-[349px] sm:w-[240px] h-[83px]">
                                    <div className='flex items-start gap-[10px]'>
                                        <div className='w-[38px] h-[38px]'>
                                            <Image src={moodleIcon} width={38} height={38} alt="Moodle Logo" className='w-full h-full object-contain'/>
                                        </div>
                                        <p className='font-medium text-[16px] leading-[22px] text-[#222222] text-nowrap text-start'>Moodle<br/><span className='text-[14px] text-[#88898A]'>(Open Source)</span></p>
                                    </div>
                                </th>
                                <th className="px-[22.5px] py-[19px] border-r-[1px] border-[#E5E7EB] 3xl:w-[349px] sm:w-[240px] h-[83px]">
                                    <div className='flex items-center gap-[10px]'>
                                        <div className='w-[60px] h-[30px]'>
                                            <Image src={talentLMSIcon} width={60} height={30} alt="TalentLMS Logo" className="w-full h-full object-contain"/>
                                        </div>
                                        <p className='font-medium text-[16px] leading-[22px] text-[#222222] text-nowrap text-start'>Competitor LMS<br/><span className='text-[14px] text-[#88898A]'>(e.g., TalentLMS)</span></p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {features.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="sticky left-0 z-10 whitespace-normal w-[240px] h-[82px] border-r-[1px] border-[#E5E7EB] sm:px-[22px] px-3 font-bold sm:text-[16px] sm:leading-[21.9px] text-[14px] leading-[19px] text-[#222222] bg-inherit">
                                        {item.feature}
                                    </td>
                                    <td className="whitespace-normal 3xl:w-[303px] sm:w-[240px] h-[82px] border-r-[1px] border-[#E5E7EB] sm:px-[22px] px-3 font-medium text-[14px] leading-[19px] text-[#222222]">
                                        {item.lynx}
                                    </td>
                                    <td className="whitespace-normal 3xl:w-[349px] sm:w-[240px] h-[82px] border-r-[1px] border-[#E5E7EB] sm:px-[22px] px-3 font-medium text-[14px] leading-[19px] text-[#222222] text-center">
                                        {item.typical}
                                    </td>
                                    <td className="whitespace-normal 3xl:w-[349px] sm:w-[240px] h-[82px] border-r-[1px] border-[#E5E7EB] sm:px-[22px] px-3 font-medium text-[14px] leading-[19px] text-[#222222] text-center">
                                        {item.moodle}
                                    </td>
                                    <td className="whitespace-normal 3xl:w-[349px] sm:w-[240px] h-[82px] border-r-[1px] border-[#E5E7EB] sm:px-[22px] px-3 font-medium text-[14px] leading-[19px] text-[#222222] text-center">
                                        {item.competitor}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LMSComparisonTable;