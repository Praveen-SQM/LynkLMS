import React from "react";
import { motion } from "framer-motion";
import { Communities } from "./Community";

const LandingHero = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-50 justify-between">
      {/* Left Content Section */}
      <div className="flex flex-col gap-[112px]">
        <div className="flex flex-col gap-[42px]">
          <div className="flex flex-col gap-[12px]">
            <motion.div
              className="rounded-full bg-gray-200 w-fit px-6 py-2 text-gray-950"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Driven by Data. Focused on Results
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl w-full"
              style={{ lineHeight: "71.35px" }}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
                WebkitMaskImage: "linear-gradient(90deg, black 0%, black 100%)",
                maskImage: "linear-gradient(90deg, black 0%, black 100%)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                WebkitMaskImage:
                  "linear-gradient(45deg, black 70%, transparent 100%)",
                maskImage:
                  "linear-gradient(45deg, black 70%, transparent 100%)",
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              Empower Learning with{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Lynk
              </span>{" "}
              LMS & Content Creation.
            </motion.h1>
          </div>
          <motion.p
            className="text-gray-500 font-[400] max-w-[576px] text-lg"
            initial={{
              opacity: 0,
              scale: 1.2,
              filter: "blur(10px)",
              WebkitMaskImage: "linear-gradient(90deg, black 0%, black 100%)",
              maskImage: "linear-gradient(90deg, black 0%, black 100%)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              WebkitMaskImage:
                "linear-gradient(90deg, black 80%, transparent 100%)",
              maskImage: "linear-gradient(90deg, black 80%, transparent 100%)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            Transform your learning processes with a customizable LMS and
            tailored e-learning content for your goals.
          </motion.p>
        </div>

        <div className="flex items-center gap-10">
          <motion.button
            className="bg-black text-white px-[12px] py-[8px] min-w-[160px] rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect Us Now
          </motion.button>

          <motion.div
            className="flex items-end gap-8 text-gray-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Communities />
            </motion.div>
            <motion.span
              className="text-[14px] mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Be a Part of Our Growing Community{" "}
              <span className="text-green-500">10000+</span>
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Right Logo Animation */}
      <div className="max-w-sm h-[394px] rounded-full bg-blue-200 w-full"></div>
    </div>
  );
};

export default LandingHero;
