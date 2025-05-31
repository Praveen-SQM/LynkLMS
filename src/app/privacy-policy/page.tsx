import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      <button className="z-10 top-4 left-4 w-10 h-10 bg-[#E2E2E2] flex justify-center items-center rounded opacity-50 cursor-pointer hover:opacity-100 my-[20px] mx-[20px] hidden">
        <ArrowLeft className="h-5 w-5" />
      </button>

      <div className="flex-1 overflow-y-auto py-[40px] mt-12 3xl:max-w-[1590px] max-w-6xl md:mx-4  xl:mx-auto px-6">
        <div className="flex flex-col gap-[52px]">
          <div className="flex flex-col gap-9">
            <p className="font-bold text-[24px] leading-[36px] text-[#1E3A76]">Privacy Policy for Lynk LMS</p>
            <div className="flex flex-col gap-7">
              <div className="gap-2 flex flex-col">
                <p className="font-semibold text-[16px] leading-[19.36px] text-[#2B2829]">1. Data Collection</p>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373]">
                  Lynk LMS collects the following types of information:
                </p>
                <ul className="list-disc pl-5 font-normal text-[14px] leading-[19px] text-[#737373]">
                  <li>
                    Personal Information: Names, email addresses, job titles, company/organization details, and payment
                    information (if applicable).
                  </li>
                  <li>
                    Learning Activity Data: Course progress, quiz scores, certifications, login history, and usage
                    patterns on the platform.
                  </li>
                  <li>
                    Technical Data: IP addresses, device type, browser information, and system logs for performance and
                    security monitoring.
                  </li>
                </ul>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373] mt-2">This information helps us:</p>
                <ul className="list-disc pl-5 font-normal text-[14px] leading-[19px] text-[#737373]">
                  <li>Manage user accounts and course enrollments</li>
                  <li>Personalize learning experiences</li>
                  <li>Monitor learner progress and platform performance</li>
                  <li>Provide customer support and system updates</li>
                </ul>
              </div>

              <div className="gap-2 flex flex-col">
                <p className="font-semibold text-[16px] leading-[19.36px] text-[#2B2829]">
                  2. Legal Basis for Data Processing
                </p>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373]">
                  Lynk LMS processes data on the following legal grounds:
                </p>
                <ul className="list-disc pl-5 font-normal text-[14px] leading-[19px] text-[#737373]">
                  <li>User consent (e.g., opting in to communications)</li>
                  <li>Performance of a contract (e.g., delivering learning content)</li>
                  <li>Legitimate interest (e.g., improving our services, analytics)</li>
                  <li>Compliance with legal obligations</li>
                </ul>
              </div>

              <div className="gap-2 flex flex-col">
                <p className="font-semibold text-[16px] leading-[19.36px] text-[#2B2829]">3. Data Retention</p>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373]">
                  We retain personal and learning data only for as long as needed to:
                </p>
                <ul className="list-disc pl-5 font-normal text-[14px] leading-[19px] text-[#737373]">
                  <li>Provide access to the LMS and its services</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Fulfill reporting or certification needs for clients and learners</li>
                </ul>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373] mt-2">
                  After these purposes are fulfilled, we securely delete or anonymize your data.
                </p>
              </div>

              <div className="gap-2 flex flex-col">
                <p className="font-semibold text-[16px] leading-[19.36px] text-[#2B2829]">4. Data Sharing</p>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373]">
                  We only share your data with trusted third-party service providers for specific purposes such as:
                </p>
                <ul className="list-disc pl-5 font-normal text-[14px] leading-[19px] text-[#737373]">
                  <li>Cloud storage and hosting</li>
                  <li>Email notifications and communication tools</li>
                  <li>Payment processing (if applicable)</li>
                  <li>Data analytics for improving platform performance</li>
                </ul>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373] mt-2">
                  All vendors are contractually obligated to comply with strict data protection standards.
                </p>
              </div>

              <div className="gap-2 flex flex-col">
                <p className="font-semibold text-[16px] leading-[19.36px] text-[#2B2829]">5. Data Security</p>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373]">
                  Lynk LMS uses industry-standard encryption, access controls, and secure data hosting practices to
                  ensure your information is protected. Regular audits and monitoring are conducted to safeguard against
                  unauthorized access or data breaches. In the event of a breach, users will be promptly notified by
                  applicable laws.
                </p>
              </div>

              <div className="gap-2 flex flex-col">
                <p className="font-semibold text-[16px] leading-[19.36px] text-[#2B2829]">6. Your Rights</p>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373]">
                  As a user, you have the right to:
                </p>
                <ul className="list-disc pl-5 font-normal text-[14px] leading-[19px] text-[#737373]">
                  <li>Access your personal and learning data</li>
                  <li>Correct or update inaccurate information</li>
                  <li>Request deletion of your data, subject to contractual or legal limitations</li>
                  <li>Withdraw consent for non-essential data processing</li>
                  <li>Lodge a complaint with your data protection authority</li>
                </ul>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373] mt-2">
                  To exercise your rights or for any privacy-related concerns, please contact us at privacy@lynklms.com.
                </p>
              </div>

              <div className="gap-2 flex flex-col">
                <p className="font-semibold text-[16px] leading-[19.36px] text-[#2B2829]">7. Policy Updates</p>
                <p className="font-normal text-[14px] leading-[19px] text-[#737373]">
                  This Privacy Policy may be updated periodically. Users will be notified of significant changes via
                  email or in-platform notification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
