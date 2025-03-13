import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const router = useRouter()

  const [messageCount, setMessageCount] = useState(0);

  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState(false)

  useEffect(()=>{
    setFormData({
      firstName:"",
      lastName:"",
      email:"",
      phoneNumber:"",
      message:""
    })
  },[isOpen])

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
          cc: [process.env.NEXT_PUBLIC_EMAIL_CC, process.env.NEXT_PUBLIC_EMAIL_CC_2, process.env.NEXT_PUBLIC_EMAIL_CC_3],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: "GENERAL INQUIRY From Lync website",
            text: 'YOUR TEXT',
            html: `
           <!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      background: #ffffff;
      padding: 20px;
      margin: 20px auto;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: #6559FF;
      color: #ffffff;
      padding: 15px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .content {
      padding: 20px;
      font-size: 16px;
      color: #333;
      line-height: 1.6;
    }
    .content p {
      margin: 10px 0;
    }
    .content b {
      color: #6559FF;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      padding: 10px;
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">New Enquiry From Lync Website</div>
    <div class="content">
      <p>Hello Team,</p>
      <p><b>Full Name:</b> ${formData.firstName} ${formData.lastName}</p>
      <p><b>Email:</b> ${formData.email}</p>
      <p><b>Phone Number:</b> ${formData.phoneNumber}</p>
      <p><b>Message:</b><br> ${formData.message}</p>
    </div>
    <div class="footer">
      Thank you & Regards,<br>
      <b>Team</b>
    </div>
  </div>
</body>
</html>`,
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message, { duration: 3000 });
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

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div
        className="absolute inset-0 bg-white/30"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full sm:max-w-[662px] max-w-[343px] z-10 max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-[24px] sm:p-8 p-6 shadow-xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <h2 className="font-medium text-2xl md:text-[22px] leading-[32px] text-[#131313] mb-3 md:mb-[40px]">
            We&apos;d love to hear from you! Let&lsquo;s Get in touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-[19px]">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2"
                >
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
                <label
                  htmlFor="lastName"
                  className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                  className="w-full sm:px-4 px-3 py-3 border font-normal text-[14px] leading-[19px] text-[#131313] placeholder:text-[#888888] border-[#ECEEF3] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-[19px]">
              <div>
                <label
                  htmlFor="email"
                  className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2"
                >
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="message"
                  className="block font-normal sm:text-[13.9px] sm:leading-[14.2px] text-[14px] leading-[19px] text-[#131313] mb-2"
                >
                  Your message
                </label>
                <div className="font-normal text-[12px] leading-3 text-[#131313]">
                  {messageCount}/1000
                </div>
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

            <div className='mb-2 sm:mb-4'>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                onChange={() => { setCaptcha(!captcha) }}
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              {/* <button
                type="button"
                onClick={onClose}
                className="text-gray-600 font-medium text-[14px] hover:text-gray-800"
              >
                Cancel
              </button> */}

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
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;