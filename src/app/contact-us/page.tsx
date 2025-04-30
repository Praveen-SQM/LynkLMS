'use client';
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
import { useRouter } from 'next/navigation';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [messageCount, setMessageCount] = useState(0);
    const [loading, setLoading] = useState(false)
    const [captcha, setCaptcha] = useState(false)
    const router = useRouter()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setFormData({ ...formData, [e.target?.name]: e.target?.value });

        if (e.target?.name === 'message') {
            setMessageCount(e.target?.value.length);
        }
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({ ...prev, phoneNumber: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);

        if (!formData.phoneNumber) {
            toast.error('Please enter phone number', { duration: 3000 });
            return;
        }

        console.log("formData.phoneNumber.length", formData.phoneNumber)
        if (formData.phoneNumber.replace(/\D/g, '').length < 12) {
            toast.error('Phone number should consist of at least 10 digits', { duration: 3000 });
            return;
        }
        if (!captcha) {
            toast.error('Please confirm you are not a robot', { duration: 3000 });
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: [process.env.NEXT_PUBLIC_EMAIL_TO],
                    cc: [process.env.NEXT_PUBLIC_EMAIL_CC, process.env.NEXT_PUBLIC_EMAIL_CC_2, process.env.NEXT_PUBLIC_EMAIL_CC_3,process.env.NEXT_PUBLIC_LYNK_EMAIL],
                    bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
                    message: {
                        subject: "GENERAL INQUIRY From Lynk website",
                        text: 'YOUR TEXT',
                        html: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry Received - Lynk LMS</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            border-collapse: collapse;
        }

        .header {
            text-align: center;
            padding: 20px 0;
        }

        .logo-container {
            display: inline-block;
            position: relative;
            margin: 0 auto;
        }

        .logo-text {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            vertical-align: middle;
            margin-left: 2px;
        }

        .logo-image {
            display: inline-block;
            vertical-align: middle;
            width: 45px;
            height: 40px;
            object-fit: contain;
        }

        .title {
            font-size: 18px;
            text-align: center;
            margin-top: 10px;
        }

        .content {
            padding: 20px;
        }

        .greeting {
            margin-bottom: 20px;
        }

        .details {
            background-color: #F9F9FF;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        ul {
            padding-left: 20px;
            margin-bottom: 20px;
            list-style-type: none;
        }

        li {
            margin-bottom: 12px;
            padding-left: 5px;
        }

        .signature {
            margin-top: 30px;
        }

        .footer {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #eee;
            color: #888;
            font-size: 12px;
            padding-bottom: 20px;
        }

        a {
            color: #3498db;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        /* Apple-specific fixes */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
            }

            .logo-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .logo-image {
                max-width: 100px;
                max-height: 40px;
                width: auto;
                height: auto;
            }
        }
    </style>
</head>
<body>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center" class="header">
                <div class="logo-container">
                    <img src="https://squadra-media.s3.ap-south-1.amazonaws.com/LynkLogo-03+2+(1).jpg" alt="Lynk Logo" class="logo-image" />
                    <span class="logo-text">Lynk</span>
                </div>
            </td>
        </tr>
        <tr>
            <td align="center" class="title">
                <h1>New Inquiry Received!</h1>
            </td>
        </tr>
        <tr>
            <td class="content">
                <p class="greeting">Hello <strong>Team</strong>, 👋</p>

                <p>A new inquiry has been submitted through the Get in Touch form. Below are the user details:</p>

                <div class="details">
                    <ul>
                        <li><strong>Name:</strong> ${formData?.firstName}</li>
                        <li><strong>Email:</strong> ${formData?.email} </li>
                        <li><strong>Phone:</strong> ${formData?.phoneNumber}</li>
                        <li><strong>Message:</strong> ${formData?.message}</li>
                    </ul>
                </div>

                <p>Please review and respond to the inquiry as soon as possible.</p>

                <div class="signature">
                    <p>Best Regards,</p>
                    <p><a href="#">Lynk LMS Team</a></p>
                </div>
            </td>
        </tr>
        <tr>
            <td class="footer">
                <p>©${new Date().getFullYear()} Lynk LMS. All rights reserved.</p>
            </td>
        </tr>
    </table>
</body>
</html>
`,
                    },
                }),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success(result.message, { duration: 3000 });
                await axios.post('/api/zoho', {
                    ...formData,
                    "leadSource":"Lynk LMS Website",
                    "service":""
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                })
                router.push('/thank-you')
            } else {
                toast.error(result.message || 'Failed to send email', { duration: 3000 });
            }
        } catch (error) {
            toast.error('An error occurred while sending the email');
            console.error('Error sending email:', error);
        } finally {
            setLoading(false);
        }
    };

    const enquiryList = [
        {
            icon: phoneIcon,
            phoneIcon: phoneIconMobile,
            title: "General Enquiry",
            number: "info@lynklms.com"
        },
        {
            icon: salesIcon,
            phoneIcon: salesIconMobile,
            title: "Sales Enquiry",
            number: "+91 7204701593"
        }
    ]

    return (
        <div className='w-full sm:bg-[#534BEF] sm:bg-gradient-to-br sm:from-[#433BDB] sm:to-[#635BFF] bg-[#FAFAFA] flex flex-col items-center pt-[120px] xl:pb-[111px] sm:pb-[91px]'>
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
                        <h2 className="text-bold text-[20px] leading-[27.3px] 3xl:font-[700] text-[#FFFFFF]">Contact Us.</h2>
                        <div className='w-[30px] h-1 bg-[#EE3CD1]'></div>
                    </div>
                    <div className='flex flex-col gap-[42px]'>
                        <div className='flex flex-col sm:gap-4 gap-1 xl:items-start sm:items-center items-start'>
                            <h1 className="font-bold xl:text-[42px] xl:leading-[57.4px] sm:text-[32px] sm:leading-[43.7px] text-[24px] leading-[32.8px] sm:text-[#ffffff] text-[#141414] sm:max-w-full max-w-[213px] 3xl:max-w-[370px]">
                                Empower learners -let’s talk.
                            </h1>
                            <p className="font-normal sm:text-[16px] 3xl:font-[400] text-[14px] leading-[24px] sm:text-[#ffffff] text-[#141414] xl:max-w-full sm:max-w-[375px] xl:text-start sm:text-center text-start">
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
                                            <p className='font-semibold text-[16px] 3xl:text-[18px] 3xl:font-[600] leading-[26px] text-[#FFFFFF]'>{CardItem?.title}</p>
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
                    <div className="sm:bg-white rounded-[24px] sm:p-6 p-0 sm:shadow-lg">
                        <h2 className="max-w-[276px] font-medium text-[22px] leading-[32px] text-[#131313] mb-[40px] sm:block hidden">We’d love to hear from you! Let’s Get in touch</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[19px] gap-4 xl:mb-[38px] mb-4">
                                <div>
                                    <label htmlFor="firstName" className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2">
                                        First Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter First Name"
                                        className="w-full sm:px-4 px-3 py-3 border font-normal text-[14px] leading-[19px] text-[#131313] placeholder:text-[#888888] border-[#ECEEF3] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2">
                                        Last Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter last name"
                                        className="w-full sm:px-4 px-3 py-3 border font-normal text-[14px] leading-[19px] text-[#131313] placeholder:text-[#888888] border-[#ECEEF3] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[19px] gap-4 xl:mb-[38px] mb-4">
                                <div>
                                    <label htmlFor="email" className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2">
                                        Email<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email"
                                        className="w-full sm:px-4 px-3 py-3 border font-normal text-[14px] leading-[19px] text-[#131313] placeholder:text-[#888888] border-[#ECEEF3] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2"
                                    >
                                        Phone Number<span className="text-red-500">*</span>
                                    </label>
                                    <PhoneInput
                                        inputStyle={{
                                            width: "100%",
                                            height: "45px",
                                            border: "1px solid #ECEEF3",
                                        }}
                                        buttonStyle={{
                                            background: "white",
                                            border: "1px solid #ECEEF3",
                                        }}
                                        dropdownStyle={{
                                            fontSize: "12px",
                                            boxShadow: "none",
                                            border: "1px solid #ECEEF3",
                                            borderRadius: "4px",
                                            scrollbarWidth: "none",
                                        }}
                                        country={"in"}
                                        value={formData.phoneNumber}
                                        containerClass="flex-1 w-full text-[15px] relative"
                                        inputClass="flex-1 w-full sm:px-4 px-3 py-3 border font-normal text-[14px] leading-[19px] text-[#131313] placeholder:text-[#888888] border-[#ECEEF3] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        onChange={(value: string) => handlePhoneChange(value)}
                                        inputProps={{
                                            name: "phoneNumber",
                                            required: true
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="xl:mb-8 mb-6">
                                <div className='flex items-center justify-between'>
                                    <label htmlFor="message" className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2">
                                        Your message
                                    </label>
                                    <div className="font-normal text-[12px] leading-3 text-[#131313] sm:block hidden">{messageCount}/1000</div>
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Type your message here"
                                    rows={3}
                                    maxLength={1000}
                                    className="w-full px-4 py-6 border font-normal text-[14px] leading-[19px] text-[#131313] placeholder:text-[#888888] border-[#ECEEF3] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                                ></textarea>
                            </div>

                            <div className='mb-4'>
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                                    onChange={() => { setCaptcha(!captcha) }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="sm:w-auto w-full inline-block px-6 py-4 bg-[#EE3CD1] rounded-[8px] text-white font-medium text-[14px] leading-4 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {loading ? (
                                    <div className="flex items-center">
                                        <Loader2 className="animate-spin" />
                                        <span className="ml-2">Please wait...</span>
                                    </div>
                                ) : (
                                    <span>Send Message</span>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between xl:hidden w-full sm:max-w-[666px] max-w-[343px] sm:mb-0 mb-[26px]"
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

export default ContactForm;