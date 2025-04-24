"use client"
import { motion } from "framer-motion"
import Image from "next/image"

// Import your SVG icons
// Note: These paths should match your project structure
import Group from "@/app/utilities/icons/Group.svg"
import group2 from "@/app/utilities/icons/Group (1).svg"
import group3 from "@/app/utilities/icons/Group (2).svg"
import group4 from "@/app/utilities/icons/Group (3).svg"

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="group flex flex-col items-center text-center shadow-[#6459ff16] transition-all hover:shadow-gray-400 hover:bg-[#6559FF] text-gray-900 shadow-2xl rounded-3xl p-4 sm:p-5 md:p-6 lg:py-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-[#6559FF] rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white transition-all">
      <Image
        src={Icon || "/placeholder.svg"}
        alt={title}
        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-[#6559FF] transition-all"
      />
    </div>
    <h3 className="text-base sm:text-lg font-Manrope font-bold sm:font-semibold mb-1 group-hover:text-white transition-all">
      {title}
    </h3>
    <p className="text-gray-600 font-Manrope text-xs sm:text-sm max-w-xs group-hover:text-white transition-all">
      {description}
    </p>
  </motion.div>
)

const LMSFeatures = () => {
  const features = [
    {
      icon: Group,
      title: "White-Label Freedom",
      description: "Brand it as your own",
    },
    {
      icon: group2,
      title: "Fully Customizable",
      description: "Built around your use case",
    },
    {
      icon: group3,
      title: "One-Time Purchase",
      description: "Save thousands over time",
    },
    {
      icon: group4,
      title: "Scalable Infrastructure",
      description: "Built to grow with you",
    },
  ]

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-Manrope font-semibold text-center mb-3 sm:mb-4 md:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2] text-[#0A0A0A] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1060px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Why Settle for a Subscription When You Can Own the{" "}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Platform?
        </span>
      </motion.h2>

      <motion.p
        className="text-center text-[#6B7280] font-Manrope font-normal text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our LMS gives you complete control — branding, features, and future.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-[90%] sm:max-w-[85%] md:max-w-6xl">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={0.2 + index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}

export default LMSFeatures
