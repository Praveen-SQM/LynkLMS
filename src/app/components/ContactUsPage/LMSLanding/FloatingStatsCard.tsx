import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import world from "@/utills/images/world.svg";
import { ArrowDown, MinusIcon, PlusIcon } from "lucide-react";

const regions = [
  { name: "United States", progress: 0.8 },
  { name: "Canada", progress: 0.7 },
  { name: "France", progress: 0.6 },
  { name: "Italy", progress: 0.5 },
  { name: "Australia", progress: 0.4 },
  { name: "India", progress: 0.3 },
];

const FloatingStatsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute -left-[1px] md:-left-36 bottom-2 md:bottom-10 bg-white rounded-xl shadow-2xl w-40 md:w-64 ml-4"
    >
      <div className="p-2 mb-4 border-b relative">
        <div className="flex items-center justify-between pb-2">
          <p className="text-[6px] bold-[500] text-gray-600 md:text-[10px]">New learners statistics</p>
          <div className="p-[3px] md:p-1 px-2 text-[6px] md:text-[8px] border bg-blue-50 rounded-full flex items-center gap-2">
            {" "}
            Last 7 Days <ArrowDown size={8} />
          </div>
        </div>
        <Image
          height={100}
          width={100}
          src={world}
          alt="World Map"
          className="w-full h-16 md:h-32 object-cover rounded-lg"
        />
        <div className="absolute bottom-4 flex items-center gap-1">
          <div className="p-1 bg-[#635BFF] text-white rounded border">
            <PlusIcon size={6} />
          </div>
          <div className="p-1 text-[#635BFF] bg-white  rounded border">
            <MinusIcon size={6} />
          </div>
        </div>
      </div>

      <div className="space-y-0 p-2 text-[6px] md:text-[10px] font-semibold">
        {regions.map((region, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{region.name}</span>
            <div className="w-24 h-[4px] md:h-[6px] bg-violet-100 rounded-full">
              <div
                className="h-full bg-[#433BDB] rounded-full"
                style={{ width: `${region.progress * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingStatsCard;
