import React from "react";
import DashboardIcon from "@/app/utilities/icons/dashboard-icon.svg";
import employeeIcon from "@/app/utilities/icons/employee-management.svg";
import courseIcon from "@/app/utilities/icons/course-management.svg";
import quizIcon from "@/app/utilities/icons/quiz-management.svg";
import reportingIcon from "@/app/utilities/icons/reporting.svg";
import automationIcon from "@/app/utilities/icons/automation.svg";
import organisationIcon from "@/app/utilities/icons/organisation-management.svg";
import rolesIcon from "@/app/utilities/icons/roles-permissions.svg";
import categoryIcon from "@/app/utilities/icons/category-management.svg";
import Image from "next/image";

const LMSOptions = () => {
  const lmsFeatures = [
    {
      icon: DashboardIcon,
      title: "Dashboard",
      description: "View key stats on registrations, trainings, and revenue.",
    },
    {
      icon: employeeIcon,
      title: "Employee Management",
      description:
        "Register employees, track progress, and manage certificates and invoices.",
    },
    {
      icon: courseIcon,
      title: "Course Management",
      description:
        "Create, manage, and track courses with pricing and categories.",
    },
    {
      icon: quizIcon,
      title: "Quiz Management",
      description:
        "Customize quizzes with timers, limits, and passing percentages.",
    },
    {
      icon: reportingIcon,
      title: "Reporting & Analytics",
      description:
        "Generate reports on revenue, registrations, and training progress.",
    },
    {
      icon: automationIcon,
      title: "Automation",
      description: "Automate workflows for enhanced efficiency.",
    },
    {
      icon: organisationIcon,
      title: "Organisation Management",
      description:
        "Efficiently manage teams and departments for seamless collaboration.",
    },
    {
      icon: rolesIcon,
      title: "Roles and Permissions",
      description:
        "Control user access with customizable roles and permissions.",
    },
    {
      icon: categoryIcon,
      title: "Category Management",
      description:
        "Organize content into categories for easy navigation and access.",
    },
  ];

  return (
    <div
      id="features"
      className="xl:py-[120px] sm:py-[92px] py-[42px] flex flex-col justify-between xl:gap-[48px] sm:gap-[55px] gap-[34px] bg-[#FAFAFA] items-center"
    >
      <p className="font-bold 3xl:text-[52px] 3xl:leading-[71px] xl:text-[42px] xl:leading-[57.37px] sm:text-[32px] sm:leading-[43.71px] text-[24px] leading-[32.78px] text-center text-[#1D1A27]">
        Boost Learning with Custom <br />
        LMS{" "}
        <span
          style={{
            background:
              "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Features
        </span>
      </p>

      <div className="grid sm:grid-cols-3 max-w-6xl grid-cols-2 xl:gap-6 sm:gap-3 gap-2 w-full px-4 xl:px-0 ">
        {lmsFeatures?.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-col sm:rounded-[20px] rounded-[12px] xl:p-10 p-4 xl:gap-5 gap-2 bg-[#ffffff]"
            >
              <div className="xl:w-[32px] xl:h-[32px] h-6 w-6">
                <Image
                  src={feature?.icon}
                  alt="image"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col 3xl:gap-3 xl:gap-2 gap-1">
                <p className="font-bold 3xl:text-[22px] 3xl:leading-[30px] xl:text-[18px] xl:leading-[24.6px] text-[14px] leading-[19.12px] text-[#1D1A27]">
                  {feature?.title}
                </p>
                <p className="font-normal 3xl:text-[18px] 3xl:leading-[25.2px] xl:text-[14px] xl:leading-[23.8px] text-[14px] leading-[19.6px] text-[#1D1A27CC]">
                  {feature?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LMSOptions;
