"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import icon from "@/app/utilities/icons/tick_green.e1d6cae9 1.svg"
import ContactModal from "../../contactModal"
import backgroundLogo from "@/app/utilities/images/image 1.png"

const LandingHero = () => {
  const [contact, setContact] = useState(false)

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

  const backgroundVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.3,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  }

  return (
    <div className="w-full bg-[#F9FAFB] px-4 overflow-hidden">
      <div className="relative mx-auto max-w-6xl min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[798px] py-12 sm:py-16 md:py-20 lg:py-24 sm:mt-0 mt-8">
        {/* Background Logo Image */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          initial="hidden"
          animate="visible"
          variants={backgroundVariants}
        >
          <Image
            src={backgroundLogo || "/placeholder.svg"}
            width={810}
            height={837}
            alt="Background Shape"
            className="opacity-30 object-contain"
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
                className="inline-block bg-[#E6E7EB] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-3 text-xs sm:text-sm"
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
                No monthly fees! No compromises. 100% white-labeled LMS that grows with your business.
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

              <form>
                <div className="space-y-4">
                  {[
                    { label: "Full Name", type: "text", placeholder: "e.g. Fred Latham" },
                    { label: "Work Email", type: "email", placeholder: "e.g. fred@example.com" },
                    { label: "Company Name", type: "text", placeholder: "e.g. LinkedCorp" },
                  ].map((field, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <label className="block text-sm font-[400] text-[#131313] mb-2">
                        {field.label}
                        <span className="text-[#EF4444]">*</span>
                      </label>
                      <motion.input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 sm:py-4 border border-[#F1F1F1] rounded-[8px] bg-[#FFFFFFD9]"
                        whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.4)" }}
                      />
                    </motion.div>
                  ))}

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                    <label className="block text-sm font-[400] text-[#131313] mb-2">
                      Primary users<span className="text-[#EF4444]">*</span>
                    </label>
                    <motion.select
                      defaultValue=""
                      className="w-full px-4 py-3 sm:py-4 border border-[#F1F1F1] rounded-[8px] bg-[#FFFFFFD9]"
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.4)" }}
                    >
                      <option value="" disabled>
                        I&apos;m looking at LMS for...
                      </option>
                      <option value="corporate">Corporate Training</option>
                      <option value="education">Educational Institution</option>
                      <option value="online">Online Course Creation</option>
                    </motion.select>
                  </motion.div>

                  <motion.button
                    style={{
                      borderRadius: "8px",
                      background:
                        "linear-gradient(90deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%), rgba(255, 255, 255, 0.85)",
                    }}
                    className="w-full text-white font-medium py-3 hover:opacity-90 transition-opacity mt-6"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
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
