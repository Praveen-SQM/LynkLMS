import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Users, Heart } from "lucide-react";
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="group flex flex-col items-center text-center shadow-[#6459ff16] transition-all hover:shadow-gray-400 hover:bg-[#6559FF] text-gray-900 shadow-2xl rounded-3xl p-6 py-12 lg:py-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="w-14 h-14 lg:w-20 lg:h-20 bg-[#6559FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-all">

      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-[#6559FF] transition-all" />

    </div>
    <h3 className="lg:text-lg font-bold sm:font-semibold mb-2 group-hover:text-white transition-all">
      {title}
    </h3>
    <p className="text-gray-600 text-[13px] lg:text-sm max-w-xs group-hover:text-white transition-all">
      {description}
    </p>
  </motion.div>
);

const LMSFeatures = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Inspire Every Learner",
      description: "Engaging, interactive courses for all learning styles.",
    },
    {
      icon: Rocket,
      title: "Accelerate Skill Growth",
      description: "AI-driven courses to quickly bridge skill gaps.",
    },
    {
      icon: Users,
      title: "Dedicated team",
      description: "A dedicated team ensures high-quality content.",
    },
    {
      icon: Heart,
      title: "Smart & Cost-Effective",
      description: "Save time and money with expert-driven LMS solutions.",
    },
  ];

  return (
    <div className="max-w-6xl 3xl:max-w-[1590px] mx-auto px-4 py-16 flex flex-col items-center ">
      <motion.p
        className="text-center text-pink-500 font-medium mb-2 3xl:text-[18px] lg:text-[16px] md:text-[13px] sm:text-[12px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        HELP SHAPE OUR FUTURE
      </motion.p>

      <motion.h2
        className="3xl:text-[52px] lg:text-[42px] md:text-[32px] sm:text-[24px] w-full max-w-[440px] lg:max-w-full font-[700] text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Unleash training with a powerful LMS.
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-8">
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

      {/* Decorative line */}
      {/* <div className="absolute left-0 top-1/2 w-full h-px bg-gray-100" /> */}
    </div>
  );
};

export default LMSFeatures;