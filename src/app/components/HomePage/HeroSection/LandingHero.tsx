"use client"
import { useState, useEffect } from "react"
// import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import icon from "@/app/utilities/icons/tick_green.e1d6cae9 1.svg"
import ContactModal from "../../contactModal"
import backgroundLogo from "@/app/utilities/images/image 1.png"
import toast from "react-hot-toast"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import axios from "axios"

const LandingHero = () => {
  const [contact, setContact] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    primaryUser: "",
  })

  useEffect(() => {
    if (contact) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [contact])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name", { duration: 3000 })
      return
    }
    
    if (!formData.email.trim()) {
      toast.error("Please enter your email address", { duration: 3000 })
      return
    }
    
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address", { duration: 3000 })
      return
    }
    
    if (!formData.companyName.trim()) {
      toast.error("Please enter your company name", { duration: 3000 })
      return
    }
    
    if (!formData.primaryUser || formData.primaryUser === "") {
      toast.error("Please select primary users for LMS", { duration: 3000 })
      return
    }
    
    setLoading(true)
    
    try {
      const nameParts = formData.fullName.trim().split(" ");
      const firstName = nameParts.length > 1 ? nameParts[0] : "";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : nameParts[0];

      const zohoData = {
        firstName,
        lastName,
        email: formData.email,
        companyName: formData.companyName,
        primaryUser: formData.primaryUser,
        message: "Demo Request",
        leadSource: "Lynk LMS Website",
      };
      
      // First, send email notification
      const emailResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [
            process.env.NEXT_PUBLIC_EMAIL_CC, 
            process.env.NEXT_PUBLIC_EMAIL_CC_2, 
            process.env.NEXT_PUBLIC_EMAIL_CC_3,
            process.env.NEXT_PUBLIC_LYNK_EMAIL
          ],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: "DEMO REQUEST From Lynk website",
            text: 'Demo Request',
            html: generateEmailTemplate(formData),
          },
        }),
      })
      
      const emailResult = await emailResponse.json()
      
      if (emailResponse.ok) {
        // Then, send data directly to Zoho API
        try {
          await axios.post('/api/zoho', {
            ...zohoData
          })
          
          toast.success("Demo request submitted successfully!", { duration: 3000 })
          
          // Reset form
          setFormData({
            fullName: "",
            email: "",
            companyName: "",
            primaryUser: "",
          })
          
          // Redirect to thank you page
          router.push('/thank-you')
        } catch (zohoError) {
          console.error("Error submitting to Zoho:", zohoError)
          // We'll still show success since email was sent
          toast.success("Request received! We'll contact you soon.", { duration: 3000 })
        }
      } else {
        toast.error(emailResult.message || "Failed to submit your request", { duration: 3000 })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("An error occurred. Please try again later.", { duration: 3000 })
    } finally {
      setLoading(false)
    }
  }

  // Generate email HTML template
  const generateEmailTemplate = (data: { fullName: string, email: string, companyName: string, primaryUser: string }): string => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Demo Request - Lynk LMS</title>
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
                <h1>New Demo Request Received!</h1>
            </td>
        </tr>
        <tr>
            <td class="content">
                <p class="greeting">Hello <strong>Team</strong>, 👋</p>

                <p>A new demo request has been submitted through the LMS Demo form. Below are the user details:</p>

                <div class="details">
                    <ul>
                        <li><strong>Full Name:</strong> ${data.fullName}</li>
                        <li><strong>Email:</strong> ${data.email}</li>
                        <li><strong>Company Name:</strong> ${data.companyName}</li>
                        <li><strong>Primary Users:</strong> ${data.primaryUser}</li>
                    </ul>
                </div>

                <p>Please review and respond to the request as soon as possible.</p>

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
    `
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, delay: 0.5 },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.8 + i * 0.2 },
    }),
  }

  // const backgroundVariants = {
  //   hidden: { scale: 0.9, opacity: 0 },
  //   visible: {
  //     scale: 1,
  //     opacity: 0.3,
  //     transition: { duration: 1.5, ease: "easeOut" },
  //   },
  // }

  return (
    <div className="w-full bg-[#F9FAFB] px-4 overflow-hidden">
      <div className="relative mx-auto max-w-6xl min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[798px] py-12 sm:py-16 md:py-20 lg:py-24 sm:mt-0 mt-8">
        {/* Background Logo Image */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          initial="hidden"
          animate="visible"
          // variants={backgroundVariants}
        >
          <Image
            src={backgroundLogo || "/placeholder.svg"}
            width={810}
            height={837}
            alt="Background Shape"
            className="object-contain"
            quality={100}
            priority
          />
        </motion.div>

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div className="w-full lg:w-1/2" initial="hidden" animate="visible" variants={containerVariants}>
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Tag line */}
              <motion.div
                className="inline-block text-[#030712] bg-[#E6E7EB] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-3 text-xs sm:text-sm"
                variants={itemVariants}
              >
                Driven by Data. Focused on Results
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl 3xl:text-[72px] font-bold mb-6 sm:mb-8 md:mb-11 3xl:w-[945px]"
                variants={itemVariants}
              >
                White Label LMS Software That&apos;s Fully Yours —
                <motion.span
                  style={{
                    background: "linear-gradient(90deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                  animate={{
                    backgroundPosition: ["0% center", "100% center", "0% center"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  Forever
                </motion.span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-gray-600 text-base sm:text-lg 3xl:text-[20px] leading-relaxed mb-6 3xl:w-[560px]"
                variants={itemVariants}
              >
              No monthly SaaS fees. No compromises. 100% white-labeled LMS that grows with your business.
              </motion.p>

              {/* Feature list */}
              <div className="space-y-3 mb-8">
                {[
                  "One-time investment. Unlimited scale.",
                  "Custom-branded to match your business identity",
                  "Live in just 2-4 weeks with full support",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center"
                    custom={i}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                      <Image src={icon || "/placeholder.svg"} alt="icon" className="w-4 h-4 mr-3" />
                    </motion.div>
                    <p className="text-sm sm:text-base">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-2/5 3xl:w-[583px]"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              style={{
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.40)",
                boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.05), 0px 25px 50px 0px rgba(100, 89, 255, 0.09)",
                backdropFilter: "blur(6px)",
              }}
              className="p-6 sm:p-8 md:p-10"
              whileHover={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1), 0px 30px 60px 0px rgba(100, 89, 255, 0.15)",
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-xl sm:text-2xl 3xl:text-[28px] font-semibold mb-6 sm:mb-8 md:mb-11">
                Book Your Free LMS Demo
                <br />
                <span>& Walkthrough</span>
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-[400] text-[#131313] mb-2">
                      Full Name
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <motion.input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., Ava Linford"
                      className="w-full px-4 py-3 sm:py-4 border border-[#F1F1F1] rounded-[8px] bg-[#FFFFFFD9]"
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.4)" }}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-sm font-[400] text-[#131313] mb-2">
                      Work Email
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., ava@example.com"
                      className="w-full px-4 py-3 sm:py-4 border border-[#F1F1F1] rounded-[8px] bg-[#FFFFFFD9]"
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.4)" }}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-sm font-[400] text-[#131313] mb-2">
                      Company Name
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <motion.input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g., Linford Corp."
                      className="w-full px-4 py-3 sm:py-4 border border-[#F1F1F1] rounded-[8px] bg-[#FFFFFFD9]"
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.4)" }}
                      required
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 1 }}
                  >
                    <label className="block text-sm font-[400] text-[#131313] mb-2">
                      Primary users
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <motion.select
                      name="primaryUser"
                      value={formData.primaryUser}
                      // placeholder="I’m building an LMS for…"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
                      }
                      className="w-full px-4 py-3 sm:py-4 border border-[#F1F1F1] rounded-[8px] bg-[#FFFFFFD9]"
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.4)" }}
                      required
                    >
                      <option value="Employees / Internal Teams">
                      Employees / Internal Teams
                      </option>
                      <option value="Freelancers / Creators / Coaches">Freelancers / Creators / Coaches</option>
                      <option value="Partners / Distributors / Affiliates">Partners / Distributors / Affiliates</option>
                      <option value="Volunteers / NGO Teams">Volunteers / NGO Teams</option>
                      <option value="Healthcare or Medical Staff">
                      Healthcare or Medical Staff
                      </option>
                      <option value="Government / Public Sector Employees">Government / Public Sector Employees</option>
                      <option value="Tech Teams / Developer Training">Tech Teams / Developer Training</option>
                      <option value="other">Other</option>
                      

                    </motion.select>
                    {/* <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" /> */}
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    style={{
                      borderRadius: "8px",
                      background:
                        "linear-gradient(90deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%), rgba(255, 255, 255, 0.85)",
                    }}
                    className="w-full text-white font-medium py-3 hover:opacity-90 transition-opacity mt-6 flex justify-center items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <motion.span
                        initial={{ x: -5 }}
                        animate={{ x: 0 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          duration: 0.8,
                        }}
                      >
                        → Request Demo
                      </motion.span>
                    )}
                  </motion.button>

                  <motion.p
                    className="text-[14px] font-[500] text-center text-[#6B7280] mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    We don&apos;t spam. Your info stays private.
                  </motion.p>
                </div>
              </form>
            </motion.div>
          </motion.div>

          <ContactModal isOpen={contact} onClose={() => setContact(false)} />
        </div>
      </div>
    </div>
  )
}

export default LandingHero