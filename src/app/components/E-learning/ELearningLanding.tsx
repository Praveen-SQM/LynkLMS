"use client";
import React from "react";
import { FloatingBackground } from "../ContactUsPage/LMSLanding/FloatingTriangles";
import { motion } from "framer-motion";
import LMS_img from "@/utills/images/LMS_Landing_Dashboard.svg";
import Image from "next/image";
import Link from "next/link";
import GradientBorder from "@/components/ui/gradient-border";
const ELearningLanding = () => {
  return (
    <div className="relative min-h-[100vh] 3xl:min-h-[100vh] lg:min-h-[110vh] 2xl-min-h-[600px] max-h-[600px] flex items-center justify-center bg-[#433BDB] bg-gradient-to-br from-[#433BDB] to-[#635BFF] overflow-hidden w-full">
      <FloatingBackground />
      <div className="w-full h-full absolute flex flex-col justify-between max-w-6xl 3xl:min-w-[1590px] text-white px-4 ">
        <div className="h-[400px] w-2 "></div>
        <motion.div
          className="max-w-4xl mx-auto flex flex-col items-center text-center 3xl:max-w-[1200px] 3xl:mt-[10rem]   "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-[#A5F83B] font-medium mb-4 3xl:text-[22px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            #1 LMS FOR TRAINING SUCCESS
          </motion.p>

          <motion.h1
            className="text-4xl 3xl:text-[72px] 3xl:min-w-[1200px] 3xl:leading-[96px] md:text-5xl lg:text-5xl font-[600] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Skills and compliance training for every need.
          </motion.h1>

          <motion.p
            className="text-gray-100 mb-6 3xl:mb-8 max-w-2xl s mx-auto 3xl:text-[24px] font-[500] leading-[150%] 3xl:min-w-[1000px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Comprehensive training content to enhance skills, ensure compliance,
            and meet diverse learning needs.
          </motion.p>
          <Link href="/contact-us">
            <GradientBorder className="">
              <motion.button
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-[700] hover:bg-gray-800 transition-colors 3xl:text-[18px] 3xl:leading-[42px] 3xl:py-[10.67px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Now
              </motion.button>
            </GradientBorder>
          </Link>
        </motion.div>
        <div className="">
          <Image
            width={200}
            src={LMS_img}
            alt="LMS Dashboard"
            className="w-full h-full min-w-[678px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ELearningLanding;
