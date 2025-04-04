"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
    <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-50 justify-between pt-20  3xl:pt-0 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-20">
      {/* Left Content Section */}
      <div className="flex w-full flex-col 3xl:gap-[112px] 2xl:gap-[86px] xl:gap-[86px] lg:gap-[86px] md:gap-[32px] sm:gap-[32px]">
        <div className="flex flex-col items-center sm:items-start gap-[20px] 3xl:gap-[42px] 2xl:gap-[42px] xl:gap-[42px] lg:gap-[42px] md:gap-[24px] sm:gap-[20px]">
          <div className="flex justify-center items-center sm:items-start sm:justify-start flex-col gap-[12px]">
            <motion.div
              className="rounded-full sm:rounded-full bg-gray-200 w-fit px-6 py-2 font-[500] text-gray-950 2xl:text-[14px] 3xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[13px] sm:text-[12px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Driven by Data. Focused on Results
            </motion.div>

            <motion.h1
              className="text-center sm:text-start text-[26px] sm:text-[26px] md:text-[42px] lg:text-[52px] xl:text-[52px] 2xl:text-[52px] 3xl:text-[72px] w-full font-[500] md:font-[600] sm:font-[600] 2xl:leading-[110%] 3xl:leading-[110%] xl:leading-[100%] lg:leading-[100%] md:leading-[52px] sm:leading-[34px] overflow-hidden"
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
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-[700] md:font-[600] sm:font-[600]">
                Lynk
              </span>{" "}
              LMS & Content Creation.
            </motion.h1>
          </div>

          <motion.p
            className="text-gray-500 font-[400] max-w-[340px] sm:max-w-[576px] text-[13px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[20px] text-center sm:text-start overflow-hidden mb-[32px] 3xl:mb-[0px] 2xl:mb-[0px] xl:mb-[0px] lg:mb-[0px] md:mb-[0px] sm:mb-[32px]"
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

        <div className="flex flex-col lg:flex-row items-center md:items-start sm:items-center gap-4 sm:gap-[24px] pb-4 sm:pb-0">
          <motion.button
            className="bg-black text-white px-[12px] py-[10px] min-w-[160px] w-[0rem] sm:w-[7.9375rem] rounded-xl font-[600]"
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
            {/* <motion.div
              className="flex items-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Communities />
            </motion.div> */}
            {/* <motion.span
              className="text-[14px] mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Be a Part of Our Growing Community{" "}
              <span className="text-green-500">10000+</span>
            </motion.span> */}
          </motion.div>
        </div>
      </div>

      {/* Right Logo Animation */}
      {/* <div className="rounded-full w-full"> */}
        <Image src={logo} alt=" " className=" 3xl:w-[541px] 3xl:h-[559px] xl:w-[394px] xl:h-[539px] lg:w-[394px] lg:h-[539px] md:w-[377px] md:h-[296px] sm:w-[261px] sm:h-[332px] h-[332px] w-[261px]" />
      {/* </div> */}

      <ContactModal isOpen={contact} onClose={() => setContact(false)} />
    </div>
  );
};

export default LandingHero;