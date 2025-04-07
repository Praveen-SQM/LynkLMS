"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img from "@/utills/images/Authoring-tool.png.svg";
import Image from "next/image";
import Link from "next/link";

const TabContent = {
  "Price Point": {
    title: "Price Point Advantage",
    description:
      "Most international LMS providers charge $13,800–$17,200L annually, making them costly for mid-sized companies. Your LMS, with a one-time cost of $11,000, offers a cost-effective alternative, enabling potential savings of $34,400+ over five years.",
    image: img,
  },
  Markets: {
    title: "Underserved Markets",
    description:
      "Mid-market companies (500–2000 employees) face high costs for LMS solutions. Your LMS provides an affordable, tailored alternative with regional language support and industry-specific compliance for healthcare and logistics.",
    image: img,
  },
  Migration: {
    title: "Migration Needs",
    description:
      "As organizations evolve, they outgrow their LMS, facing scalability challenges. Your LMS offers a seamless migration, enabling smooth transitions without data loss or disruption, ensuring continuity in training and operations.",
    image: img,
  },
  Customization: {
    title: "Customization Needs",
    description:
      "Every organization has unique learning needs. Your LMS offers customization options, allowing businesses to tailor features and workflows to meet their specific requirements. This adaptability enhances efficiency and user engagement.",
    image: img,
  },
};

const MarketGapAnalysis = () => {
  const [activeTab, setActiveTab] = useState("Price Point");

  // Content section component for mobile view
  const ContentSection = ({ title, description, image }: { title: string, description: string, image: string }) => (
    <div className="flex flex-col items-center gap-8 py-8 border-b border-gray-200 last:border-b-0">
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm w-full">
        <Image
          width={1000}
          height={1000}
          src={image}
          alt="Content preview"
          className="w-full h-[250px] object-cover"
        />
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-900 mb-6 text-sm">{description}</p>
        <Link href="/contact-us">
          <button className="hidden md:flex items-center text-sm justify-between gap-2 bg-black text-white pl-4 pr-1 py-1 rounded-full w-fit hover:bg-gray-800 transition-colors">
            Contact Us
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto py-10 md:py-20 px-4">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4  3xl:text-[56px]">
          Market Gap <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold text-transparent bg-clip-text">Analysis</span>
        </h1>
        <p className="text-gray-600 text-sm lg:text-base max-w-[343px] md:max-w-[770px] 3xl:text-[18px]">
          Market Gap Analysis identifies unmet needs and opportunities by
          analyzing competitors, customer pain points, and industry trends.
        </p>
      </div>

      {/* Mobile View - All sections stacked */}
      <div className="md:hidden w-full">
        <div className="bg-[#F4F5FF]  rounded-3xl p-4">
          {Object.entries(TabContent).map(([key, content]) => (
            <ContentSection key={key} {...content} />
          ))}
        </div>
      </div>

      {/* Desktop View - Tab based */}
      <div className="hidden md:flex relative bg-[#F4F5FF] w-full rounded-3xl  flex-col items-center p-8">
        <div className="bg-white rounded-full p-3 flex justify-between items-center border border-gray-100 -top-8 absolute w-full z-10 max-w-xl lg:max-w-2xl mx-auto shadow-lg shadow-[#e0e2ff]">
          {Object.keys(TabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 font-[500] rounded-full text-sm transition-all duration-200 3xl:text-[22px] 3xl:leading-[100%] ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-24 pt-10"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm">
              <Image
                width={1000}
                height={1000}
                src={TabContent[activeTab as keyof typeof TabContent].image}
                alt="Content preview"
                className="w-[450px] h-[450px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center max-w-[360px]">
              <h2 className="text-4xl font-semibold mb-6">
                {TabContent[activeTab as keyof typeof TabContent].title}
              </h2>
              <p className="text-gray-900 mb-8 text-base">
                {TabContent[activeTab as keyof typeof TabContent].description}
              </p>
              <Link href={'/contact-us'} className="flex items-center text-base justify-between gap-2 bg-black text-white pl-4 pr-1 py-1 rounded-full w-fit hover:bg-gray-800 transition-colors">
                Contact Us
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MarketGapAnalysis;
