"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";
import FloatingStatsCard from "./FloatingStatsCard";
import course1 from "@/utills/images/LMSD_ContactUS_Course1.svg";
import course2 from "@/utills/images/LMSD_ContactUS_Course2.svg";
import Image from "next/image";

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [autoChange] = useState(true);

  useEffect(() => {
    if (!autoChange) return;

    // const tabs = ["dashboard", "course", "learning-plans", "content-library"];
    // const interval = setInterval(() => {
    //   setActiveTab((current) => {
    //     const currentIndex = tabs.indexOf(current);
    //     return tabs[(currentIndex + 1) % tabs.length];
    //   });
    // }, 3000);

    // return () => clearInterval(interval);
  }, [autoChange]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative pl-[20vw] md:pl-0"
    >
      <div className="bg-white outline outline-[9px] outline-[#3d36ce] rounded-tl-3xl shadow-xl overflow-hidden max-h-[376px] md:max-h-[550px] ">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center p-2 md:p-4">
          <div className="flex items-center space-x-2">
            <span className="text-pink-500 font-semibold">Lynk</span>
            <span className="font-semibold">LMS</span>
          </div>
          {/* <button
            onClick={() => setAutoChange(!autoChange)}
            className={`text-[6px] md:text-[10px] px-2 py-1 rounded ${
              autoChange ? "bg-violet-100 text-[#433BDB]" : "bg-gray-100"
            }`}
          >
            {autoChange ? "Auto-Cycling" : "Manual"}
          </button> */}
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-12 h-[600px] relative">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainContent activeTab={activeTab} />
          <div className="absolute h-4 w-4 cursor-pointer bg-white shadow-lg rounded-full bottom-48 left-[150px] flex items-center justify-center">
            <ChevronRight height={12} width={12} className="text-gray-600" />
          </div>
        </div>
      </div>
      <FloatingStatsCard />
    </motion.div>
  );
};

const Sidebar = ({ activeTab, setActiveTab }: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="col-span-3 bg-gray-50">
      <div className="p-1 md:p-2">
        <div className="bg-[#635BFF] flex items-center text-white px-1 md:px-3 py-[6px] rounded mb-4">
          <span className="text-[6px] md:text-[10px] font-semibold">Dashboard</span>
        </div>

        <div className="space-y-1 md:space-y-4">
          <div className="font-[600]">
            <p className="text-[6px] md:text-[10px] text-gray-500 px-1 md:px-3 mb-2">LEARNING</p>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setActiveTab("course")}
                className={`w-full text-left px-1 md:px-3 py-[2px] md:py-[6px] text-[6px] md:text-[10px] ${
                  activeTab === "course" ? "text-[#433BDB]" : "text-gray-500"
                }`}
              >
                Course
              </button>
              <button
                onClick={() => setActiveTab("learning-plans")}
                className={`w-full text-left px-1 md:px-3 py-[2px] md:py-[6px] text-[6px] md:text-[10px] ${
                  activeTab === "learning-plans"
                    ? "text-[#433BDB]"
                    : "text-gray-500"
                }`}
              >
                Learning Plans
              </button>
              <button
                onClick={() => setActiveTab("content-library")}
                className={`w-full text-left px-1 md:px-3 py-[2px] md:py-[6px] text-[6px] md:text-[10px] ${
                  activeTab === "content-library"
                    ? "text-[#433BDB]"
                    : "text-gray-500"
                }`}
              >
                Content Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = ({ activeTab }: {activeTab:string}) => {
  return (
    <div className="col-span-9 bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {activeTab === "course" && <CourseView />}
          {activeTab === "learning-plans" && <LearningPlansView />}
          {activeTab === "content-library" && <ContentLibraryView />}
          {activeTab === "dashboard" && <DefaultView />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const DefaultView = () => (
  <div className="p-4 sm:p-6 pr-0">
    <div className="mb-3 md:mb-6">
      <h2 className="text-[10px] md:text-[13px] font-medium">Welcome Adam</h2>
      <p className="text-[9px] md:text-[12px] text-gray-500">You Are Signed In As Admin.</p>
    </div>
    <ActionCards />
    <Tabs />
    <SearchBar />
    <CourseCards />
  </div>
);

const CourseView = () => (
  <div className="p-4 md:p-6 pr-0">
    <div className="mb-3 md:mb-6">
      <h2 className="text-[10px] md:text-[13px] font-medium">Course Management</h2>
      <p className="text-[9px] md:text-[12px] text-gray-500">
        Manage your courses and content
      </p>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white hover:scale-105 transition-all hover:shadow-xl rounded-lg overflow-hidden"
        >
          <Image
            height={100}
            width={100}
            src={course1}
            alt={`Course ${i}`}
            className="w-full h-[80px] md:h-[123px] object-cover"
          />
          <div className="p-2">
            <h3 className="text-[8px] md:text-[11.1px] font-medium">Course Title {i}</h3>
          </div>
          <div className="md:w-42 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
          <div className="md:w-36 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
          <div className="md:w-36 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
        </motion.div>
      ))}
    </div>
  </div>
);

const LearningPlansView = () => (
  <div className="p-4 md:p-6 pr-0">
    <div className="mb-3 md:mb-6">
      <h2 className="text-[10px] md:text-[13px] font-medium">Learning Plans</h2>
      <p className="text-[9px] md:text-[12px] text-gray-500">
        Track and manage learning paths
      </p>
    </div>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-1 md:p-2 px-4 rounded-lg hover:scale-105 transition-all hover:shadow-xl"
        >
          <h3 className="text-[8px] md:text-[11.1px] font-medium mb-1 md:mb-2">Learning Path {i}</h3>
          <div className="w-full h-1 md:h-2 bg-gray-100 rounded-full mb-1 md:mb-2">
            <div
              className="h-full bg-[#433BDB] rounded-full"
              style={{ width: `${30 + i * 20}%` }}
            />
          </div>
          <p className="text-[6px] md:text-[10px] text-gray-500">
            {3 + i} courses • {12 + i * 4} hours
          </p>
        </motion.div>
      ))}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-gray-50 p-1 md:p-2 px-4 rounded-lg hover:scale-105 transition-all hover:shadow-xl"
        >
          <h3 className="text-[8px] md:text-[11.1px] font-medium mb-2 text-transparent">
            Learning Path {i}
          </h3>
          <div className="w-full h-1 md:h-2 rounded-full mb-1 md:mb-2">
            <div
              className="h-full rounded-full"
              style={{ width: `${30 + i * 20}%` }}
            />
          </div>
          <p className="text-[6px] md:text-[10px] text-transparent">
            {3 + i} courses • {12 + i * 4} hours
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

const ContentLibraryView = () => (
  <div className="p-4 md:p-6 pr-0">
    <div className="mb-3 md:mb-6">
      <h2 className="text-[10px] md:text-[13px] font-medium">Content Library</h2>
      <p className="text-[9px] md:text-[12px] text-gray-500">
        Browse and manage learning materials
      </p>
    </div>
    <SearchBar />
    <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white hover:scale-105 transition-all hover:shadow-xl rounded-lg overflow-hidden"
        >
          <Image
            height={100}
            width={100}
            src={course2}
            alt={`Resource ${i}`}
            className="w-full h-[80px] md:h-[143px] object-cover"
          />
          <div className="p-2 md:p-4">
            <h3 className="text-[8px] md:text-[11.1px] font-medium">Learning Resource {i}</h3>
          </div>
          <div className="md:w-42 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
          <div className="md:w-36 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Keeping original components
const ActionCards = () => {
  // ... (keep original ActionCards component)
  return (
    <div className="flex gap-4 mb-4">
      {/* Action Card 1 */}
      <div className="bg-white hover:scale-105 transition-all hover:shadow-xl w-full p-3 rounded-lg border">
        <div className="mb-4">
          <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#433BDB]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-[8px] md:text-[13px] font-medium mb-1">Add Users</h3>
        <p className="text-[6px] md:text-[9px] text-gray-500">
          Efficiently manage users on your platform by adding learners.
        </p>
      </div>

      {/* Action Card 2 */}
      <div className="bg-white hover:scale-105 transition-all hover:shadow-2xl w-full p-3 rounded-lg border">
        <div className="mb-4">
          <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#433BDB]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v12m-8-6h16"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-[8px] md:text-[13px] font-medium mb-1">Manage Courses</h3>
        <p className="text-[6px] md:text-[9px] text-gray-500">
          Create and manage Courses that inspire curiosity and captivate
          learners.
        </p>
      </div>
    </div>
  );
};

const Tabs = () => {
  return (
    <div className="px-6 py-2 pb-0 bg-white rounded mb-3">
      <div className="flex space-x-6">
        <button className="text-[#433BDB] border-b-2 border-[#433BDB] pb-2 text-[9.4px] md:text-[11.4px] font-medium">
          Published
        </button>
        <button className="text-gray-500 pb-2 text-[9.4px] md:text-[11.4px] font-medium">
          Retired
        </button>
        <button className="text-gray-500 pb-2 text-[9.4px] md:text-[11.4px] font-medium">
          Draft
        </button>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="relative mb-3">
      <input
        type="text"
        placeholder="Search for a course"
        className="text-[6px] md:text-[10px] w-full pl-10 pr-4 py-2 max-w-[325px] border rounded-lg"
      />
      <Search className="text-[9.4px] md:text-[11.4px] absolute left-3 top-2.5 h-3 w-3 text-gray-400" />
    </div>
  );
};

const CourseCards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      <div className="bg-white hover:scale-105 transition-all hover:shadow-xl rounded-lg overflow-hidden">
        <Image
          height={100}
          width={100}
          src={course1}
          alt="Teaching Strategies"
          className="w-full h-[80px] md:h-[143px] object-cover"
        />
        <div className="p-4">
          <h3 className="text-[8px] md:text-[11.1px] font-medium">
            Teaching Strategies for Modern Educators
          </h3>
        </div>
        <div className="md:w-42 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
        <div className="md:w-36 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
        <div className="md:w-36 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
      </div>
      <div className="bg-white hover:scale-105 transition-all hover:shadow-xl rounded-lg overflow-hidden">
        <Image
          height={100}
          width={100}
          src={course2}
          alt="Online Education"
          className="w-full h-[80px] md:h-[143px] object-cover"
        />
        <div className="p-4">
          <h3 className="text-[8px] md:text-[11.1px] font-medium">
            Online Education for Global Learners
          </h3>
        </div>
        <div className="md:w-42 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
        <div className="md:w-36 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
        <div className="md:w-36 h-1 md:h-2 m-1 md:m-2 rounded-full bg-gray-100"></div>
      </div>
    </div>
  );
};

export default DashboardPreview;
