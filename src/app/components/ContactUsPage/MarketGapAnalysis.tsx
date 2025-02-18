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
      "Most international LMS providers charge ₹12–15L annually, making them costly for mid-sized companies. Your LMS, with a one-time cost of ₹9.5L, offers a cost-effective alternative, enabling potential savings of ₹30L+ over five years.",
    image: img,
  },
  Markets: {
    title: "Market Opportunities",
    description:
      "Explore untapped market segments and identify potential growth areas for your business expansion.",
    image: img,
  },
  Migration: {
    title: "Easy Migration Process",
    description:
      "Seamless data migration process ensuring zero downtime and complete data integrity during transition.",
    image: img,
  },
  Customization: {
    title: "Custom Solutions",
    description:
      "Tailor the platform to your specific needs with our flexible customization options.",
    image: img,
  },
};

const MarketGapAnalysis = () => {
  const [activeTab, setActiveTab] = useState("Price Point");

  // Content section component for mobile view
  const ContentSection = ({ title, description, image }) => (
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
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Market Gap <span className="text-purple-500">Analysis</span>
        </h1>
        <p className="text-gray-600 text-sm lg:text-base max-w-[343px] md:max-w-[770px]">
          Market Gap Analysis identifies unmet needs and opportunities by
          analyzing competitors, customer pain points, and industry trends.
        </p>
      </div>

      {/* Mobile View - All sections stacked */}
      <div className="md:hidden w-full">
        <div className="bg-[#F4F5FF] rounded-3xl p-4">
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
              className={`flex-1 py-2 px-4 rounded-full text-sm transition-all duration-200 ${
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
                src={TabContent[activeTab].image}
                alt="Content preview"
                className="w-[450px] h-[450px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center max-w-[360px]">
              <h2 className="text-4xl font-semibold mb-6">
                {TabContent[activeTab].title}
              </h2>
              <p className="text-gray-900 mb-8 text-base">
                {TabContent[activeTab].description}
              </p>
              <button className="flex items-center text-base justify-between gap-2 bg-black text-white pl-4 pr-1 py-1 rounded-full w-fit hover:bg-gray-800 transition-colors">
                Contact Us
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MarketGapAnalysis;
