"use client";
import React from "react";
import { motion } from "framer-motion";
import { Communities } from "./Community";
import { CardContainer, CardItem, CardBody } from "@/components/ui/3d-card";

const LandingHero = () => {
  return (
    <div className="container mx-auto pt-20 flex flex-col md:flex-row items-center bg-gray-50 justify-between">
      {/* Left Content Section */}
      <CardContainer className="flex w-full flex-col gap-10 sm:gap-[112px]">
       <CardBody className="flex flex-col items-center sm:items-start gap-[42px]">
          <div className="flex justify-center items-center sm:items-start sm:justify-start flex-col gap-[12px]">
            <CardItem translateZ="50">
              <motion.div
                className="rounded sm:rounded-full bg-gray-200 w-fit px-6 py-2 text-[14px] sm:text-base text-gray-950"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Driven by Data. Focused on Results
              </motion.div>
            </CardItem>

            <CardItem translateZ="60">
              <motion.h1
                className="text-center sm:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full font-bold md:font-normal sm:leading-[71.35px]"
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(10px)",
                  WebkitMaskImage:
                    "linear-gradient(90deg, black 0%, black 100%)",
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
            </CardItem>
          </div>

          <CardItem translateZ="100">
            <motion.p
              className="text-gray-500 font-[400] max-w-[340px] sm:max-w-[576px] text-[14px] sm:text-lg text-center sm:text-start"
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
                maskImage:
                  "linear-gradient(90deg, black 80%, transparent 100%)",
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              Transform your learning processes with a customizable LMS and
              tailored e-learning content for your goals.
            </motion.p>
          </CardItem>
          </CardBody>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 pb-4 sm:pb-0">
          <CardItem translateZ={50}>
            <motion.button
              className="bg-black text-white px-[12px] py-[10px] min-w-[160px] rounded-xl font-[600]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect Us Now
            </motion.button>
          </CardItem>

          <CardItem translateZ={40}>
            <motion.div
              className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-8 text-gray-500"
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
          </CardItem>
        </div>
      </CardContainer>

      {/* Right Logo Animation */}
      <CardContainer className="max-w-sm h-[280px] min-w-[394px] md:h-[394px] rounded-full w-full">
        <CardItem translateZ={30} className="w-full h-full">
          <div className="w-full h-full bg-blue-200 rounded-full"></div>
        </CardItem>
      </CardContainer>
    </div>
  );
};

export default LandingHero;
