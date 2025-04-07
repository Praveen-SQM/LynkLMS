"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GradientBorder from "@/components/ui/gradient-border";

const MarketingContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-white space-y-6 flex flex-col md:block 3xl:flex 3xl:items-start 3xl:h-[100%] items-center"
    >
      <div className="inline-block py-1.5 rounded-full text-center md:text-start text-sm text-[#A0FF27]">
        #1 LMS FOR TRAINING SUCCESS
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-center md:text-start leading-tight">
        Transform Learning
        <br />
        with Lynk LMS
      </h1>

      <p className="text-[14px] lg:text-[18px] text-white/80 text-center md:text-start  3xl:max-w-[693px] leading-relaxed">
        Equip your teams with Lynk LMS to create impactful learning, boost
        performance, retention, and growth.
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/contact-us">
          <GradientBorder className="mt-8">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium">
              Contact Now
            </button>
          </GradientBorder>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MarketingContent;
