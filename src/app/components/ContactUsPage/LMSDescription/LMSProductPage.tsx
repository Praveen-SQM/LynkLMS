"use client";
import React from "react";
import dashboard from "@/utills/images/DASHBOARD.svg";
import Image from "next/image";
import dashedLine from "@/utills/images/dashed-line.svg";
import { motion } from "framer-motion";

const LMSProductPage = () => {
  return (
    <div className="w-full bg-gray-50 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mx-auto">
        {/* Text Content */}
        <div className="w-full max-w-3xl text-center mb-8 sm:mb-16">
          <span className="inline-block text-blue-600 text-sm font-medium mb-3 sm:mb-4">
            Product Suite
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            Access a Personalised Learning
            <br />
            Management System.
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Our systems analyses the data and behavior's of your employees and generate tasks and assign to the best person that can complete it efficiently and more.
          </p>
        </div>

        {/* Dashboard Image */}
        <div className="relative rounded-t-2xl px-4 md:px-20 lg:px-40">
          <div className="">
            <Image
              src={dashboard}
              alt="LMS Dashboard"
              width={1000}
              height={600}
              className="h-auto object-contain w-screen"
              priority
            />
          </div>
          <div className="hidden lg:block">
            {/* Dashed Lines */}
            <Image
              width={150}
              height={150}
              alt="dashed line"
              src={dashedLine}
              className="absolute z-10 right-0 mr-16 top-[40%] rotate-6 max-w-[100px] sm:max-w-[120px] lg:max-w-[150px]"
            />
            <Image
              width={150}
              height={150}
              alt="dashed line"
              src={dashedLine}
              className="absolute z-10 left-0 top-[40%] ml-16 transform -rotate-6 scale-x-[-1] max-w-[100px] sm:max-w-[120px] lg:max-w-[150px]"
            />

            {/* Rotating Divs */}
            <motion.div
              className="absolute z-10 right-0  top-[50%] px-3 py-2 bg-[#534BEF] text-white rounded-xl text-[10px] sm:text-[12px] lg:text-[14px] font-[300] text-center max-w-[130px] sm:max-w-[160px] lg:max-w-[200px]"
            >
              Monitor all the ongoing and completed tasks
            </motion.div>

            <motion.div
              className="absolute z-10 left-0  top-[50%] px-3 py-2 bg-[#534BEF] text-white rounded-xl text-[10px] sm:text-[12px] lg:text-[14px] font-[300] text-center max-w-[130px] sm:max-w-[160px] lg:max-w-[200px]"
            >
              Settings for Course support
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSProductPage;
