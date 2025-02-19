import React from 'react';

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
        <div className='w-full py-[72px] bg-[#FAFAFA] flex flex-col items-center gap-[72px]'>
            <div className='flex flex-col items-center gap-4 max-w-[670px]'>
                <p className='font-bold text-[42px] leading-[57.37px] text-[#1D1A27] text-center'>LMS <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Comparison</span>: Make an Informed Decision</p>
                <p className='font-normal text-[16px] leading-7 text-[#1D1A27CC] text-center'>Compare LMS platforms to find the best fit for your needs.</p>
            </div>
            <div className="w-full max-w-[1200px] overflow-hidden border-[2px] border-[#E8E8E8] bg-[#FFFFFF] rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="sticky left-0 z-10 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Features
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-indigo-600">Lynx</span>
                                        <span className="text-gray-500 text-xs">(OBL White-Labeled)</span>
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    <div>
                                        Typical Subscription LMS
                                        <div className="text-gray-500 text-xs">(e.g., SaaS)</div>
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    <div>
                                        Moodle
                                        <div className="text-gray-500 text-xs">(Open Source)</div>
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    <div>
                                        Competitor LMS
                                        <div className="text-gray-500 text-xs">(e.g., TalentLMS)</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {features.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="sticky left-0 z-10 whitespace-normal px-6 py-4 text-sm font-medium text-gray-900 bg-inherit">
                                        {item.feature}
                                    </td>
                                    <td className="whitespace-normal px-6 py-4 text-sm text-gray-500">
                                        {item.lynx}
                                    </td>
                                    <td className="whitespace-normal px-6 py-4 text-sm text-gray-500">
                                        {item.typical}
                                    </td>
                                    <td className="whitespace-normal px-6 py-4 text-sm text-gray-500">
                                        {item.moodle}
                                    </td>
                                    <td className="whitespace-normal px-6 py-4 text-sm text-gray-500">
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