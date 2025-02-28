"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/utilities/icons/lynk-logo.svg";
import toast from "react-hot-toast";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const footerItems = [
    {
      heading: "Product",
      items: [
        {
          text: "Features",
          href: "/#features",
        },
        {
          text: "Intuitive LMS",
          href: "/#intuitive-lms",
        },
        {
          text: "LMS Comparison",
          href: "/#lms-comparison",
        },
      ],
    },
    {
      heading: "Company",
      items: [
        {
          text: "E-Learning",
          href: "/e-learning",
        },
        {
          text: "LMS",
          href: "/lms",
        },
        {
          text: "Contact",
          href: "/contact-us",
        },
      ],
    },
    {
      heading: "Policy",
      items: [
        {
          text: "Terms & Conditions",
          href: "/",
        },
        {
          text: "Privacy Policy",
          href: "/",
        },
      ],
    },
  ];

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    // Reset states
    setError("");

    // Validate empty email
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Submit the form
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [process.env.NEXT_PUBLIC_EMAIL_CC_2],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: "Response Request on Email",
            text: `Response Requested for Email: ${email}`,
            html: `
                <html>
                  <head></head>
                  <body>
                    <p>Hello Team,</p>
                    <p>A user has requested a Response on Email from Lync.</p>
                    <p><b>Email:</b> ${email}</p>
                    <br>
                    <p>Thank you & Regards,<br><b>Team</b></p>
                  </body>
                </html>`,
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Request on email Requested successfully");
        setIsSubmitting(false);
        setSubmitted(true);
        setEmail("");

        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        toast.error(result.message || "Failed to send callback request");
      }
    } catch (error) {
      toast.error("An error occurred while sending the callback request");
      console.error("Error sending callback request:", error);
    } finally {
      setIsSubmitting(false);
    }

    // Simulate API call
    // setTimeout(() => {
    //     setIsSubmitting(false);
    //     setSubmitted(true);
    //     setEmail('');

    //     // Reset success message after 3 seconds
    //     setTimeout(() => {
    //         setSubmitted(false);
    //     }, 3000);
    // }, 1000);
  };

  return (
    <div className="flex justify-center w-full 2xl:px-0 px-4 bg-[#090909]">
      <div className="xl:pt-[72px] w-full max-w-6xl sm:pt-[42px] pt-7 xl:pb-6 sm:pb-4 pb-7 flex flex-col xl:gap-[111px] sm:gap-[62px] gap-6 items-center">
        <div className="xl:py-[56px] sm:py-6 py-3 xl:px-[64px] px-7 flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-[43px] w-full backdrop-blur-[2.676px] bg-white/5 xl:rounded-[21.4px] rounded-[10px]">
          <p className="font-bold xl:text-[37.5px] xl:leading-[52px] text-[16px] leading-[22px] text-[#ffffff]">
            Receive inquiries and <br />
            <span className="text-[#635BFF]">respond promptly.</span>{" "}
          </p>
          <div className="flex flex-col w-full xl:max-w-[498px] sm:max-w-[236px] max-w-[278px] gap-2">
            <div className="xl:h-[75px] h-[36px] xl:rounded-[16px] rounded-[7px] xl:border-[1.34px] border-[0.58px] border-[#2B2D31] xl:p-[10.7px] p-[4px] flex items-center justify-between w-full">
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className={`font-normal xl:text-[17.27px] xl:leading-[23.6px] text-[12px] leading-[16.4px] placeholder:text-[#7A8089] text-[#FFFFFF] bg-transparent outline-none w-full ${
                  error ? "border-red-500" : ""
                }`}
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`xl:h-[50px] sm:h-[26px] xl:rounded-[10.7px] rounded-[4px] xl:py-[10.7px] xl:px-[10.7px] sm:py-1 py-[6px] sm:px-2 px-3 ${
                  isSubmitting ? "bg-[#4F4BAF]" : "bg-[#635BFF]"
                } cursor-pointer font-medium xl:text-[18.73px] xl:leading-[25.6px] sm:text-[13px] sm:leading-[17.6px] text-[12px] leading-[16.3px] text-[#ffffff] flex justify-center items-center text-nowrap transition-all`}
              >
                {isSubmitting ? "Connecting..." : "Connect Now"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-xs xl:text-sm mt-1">{error}</p>
            )}
            {submitted && (
              <p className="text-green-500 text-xs xl:text-sm mt-1">
                Thank you! We&apos;ll be in touch soon.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col xl:gap-[42px] sm:gap-[46px] gap-6 w-full items-center">
          <div className="w-full flex sm:flex-row flex-col items-start justify-between sm:gap-0 gap-[42px]">
            <div className="flex flex-col xl:gap-5 gap-3 xl:max-w-[168px] sm:max-w-[122px] max-w-[122px] sm:w-1/4">
              <div className="flex flex-col xl:gap-3 gap-[7px]">
                <Image
                  src={logo}
                  alt="logo"
                  width={64}
                  height={76}
                  className="w-full h-full"
                />
                <p className="font-normal xl:text-[18px] xl:leading-[22.5px] text-[13px] leading-[17.8px] text-[#ffffff]">
                  Unlock Your Product Potential with Lynk
                </p>
              </div>
              <p className="font-[300] xl:text-[16px] xl:leading-[21.86px] text-[13px] leading-[17.8px] text-[#ffffff]">
                Lynk, 2025.
              </p>
            </div>

            <div className="flex items-start justify-between sm:w-3/4 w-full">
              {footerItems?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col xl:gap-6 sm:gap-[14px] gap-3 w-fit sm:max-w-full max-w-[83px]"
                  >
                    <p className="font-normal xl:text-[18px] xl:leading-[22.5px] text-[13px] leading-[13px] text-[#7A7089]">
                      {item?.heading}
                    </p>
                    <div className="flex flex-col xl:gap-3 gap-2">
                      {item?.items?.map((option, index) => {
                        return (
                          <Link
                            key={index}
                            href={option.href}
                            className="font-medium xl:text-[18px] xl:leading-[22.5px] text-[13px] leading-[15px] text-[#ffffff] cursor-pointer hover:text-[#635BFF] transition-colors"
                          >
                            {option?.text}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="font-normal xl:text-[13.83px] xl:leading-[18.9px] text-[13px] sm:leading-[13px] leading-[17.8px] text-[#7A8089]">
            ©2025 Lynk LMS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
