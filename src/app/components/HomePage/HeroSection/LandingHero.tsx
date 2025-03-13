"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Communities } from "./Community";
import ContactModal from "../../contactModal";
import Image from "next/image";
import logo from "@/app/utilities/images/main_large.png";

const LandingHero = () => {
  const [contact, setContact] = React.useState(false);

  useEffect(()=>{
    if (contact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  },[contact])
  return (
    <div className="container mx-auto pt-20 flex flex-col lg:flex-row items-center bg-gray-50 justify-between">
      {/* Left Content Section */}
      <div className="flex w-full flex-col gap-10 lg:gap-[112px]">
        <div className="flex flex-col items-center sm:items-start gap-[42px]">
          <div className="flex justify-center items-center sm:items-start sm:justify-start flex-col gap-[12px]">
            <motion.div
              className="rounded-full sm:rounded-full bg-gray-200 w-fit px-6 py-2 text-[14px] sm:text-base text-gray-950"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Driven by Data. Focused on Results
            </motion.div>

            <motion.h1
              className="text-center sm:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full font-bold md:font-normal sm:leading-[71.35px] overflow-hidden"
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
                WebkitMaskImage: "linear-gradient(90deg, black 100%)", // Full visibility
                maskImage: "linear-gradient(90deg, black 100%)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                WebkitMaskImage:
                  "linear-gradient(45deg, black 90%, rgba(0,0,0,0.1) 100%)", // Slight fade but no full transparency
                maskImage:
                  "linear-gradient(45deg, black 90%, rgba(0,0,0,0.1) 100%)",
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
            className="text-gray-500 font-[400] max-w-[340px] sm:max-w-[576px] text-[14px] sm:text-lg text-center sm:text-start overflow-hidden"
            initial={{
              opacity: 0,
              scale: 1.2,
              filter: "blur(10px)",
              WebkitMaskImage: "linear-gradient(90deg, black 100%)", // Full visibility initially
              maskImage: "linear-gradient(90deg, black 100%)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              WebkitMaskImage:
                "linear-gradient(90deg, black 95%, rgba(0,0,0,0.2) 100%)", // Reduce fade effect
              maskImage:
                "linear-gradient(90deg, black 95%, rgba(0,0,0,0.2) 100%)",
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

        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-10 pb-4 sm:pb-0">
          <motion.button
            className="bg-black text-white px-[12px] py-[10px] min-w-[160px] rounded-xl font-[600]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setContact(true);
            }}
          >
            Connect With Us
          </motion.button>

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
        </div>
      </div>

      {/* Right Logo Animation */}
      <div className="max-w-sm h-[280px] min-w-[394px] md:h-[394px] rounded-full w-full">
        <Image src={logo} alt=" " className="w-full h-full" />
      </div>

      <ContactModal isOpen={contact} onClose={() => setContact(false)} />
    </div>
  );
};

export default LandingHero;