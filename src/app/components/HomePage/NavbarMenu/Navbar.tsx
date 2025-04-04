"use client";
import React, { useState, useEffect } from "react";
import logo from "@/utills/Icons/LynkLogo.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";

export function NavbarTop() {
  return (
    <div className="">
      <Navbar className="sm:top-2 z-[100]" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "top",
    },
    open: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  // Scroll event listener to track if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 3xl:max-w-[1590px] max-w-6xl lg:mx-4 xl:mx-auto z-50 py-4 px-6 sm:rounded-full ",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white",
          className
        )}
      >
        <div className="flex items-center justify-between sm:rounded-full">
          <Link
            href={"/"}
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2"
          >
            <Image height={25} width={25} src={logo} alt="logo" />
            <p className="font-bold">Lynk</p>
          </Link>

          <div className="hidden sm:flex text-[14px] font-[600] items-center gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <Link href={"/lms"} className="hover:text-gray-600 transition-color">
                LMS
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <Link href="/e-learning" className="hover:text-gray-600 transition-colors">
                E-Learning
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <Link href="/contact-us" className="bg-[#6559FF] p-2 px-4 text-white rounded-full hover:bg-[#5449EF] transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </div>

          <motion.button
            className="flex sm:hidden justify-center items-center z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X className="text-black" /> : <AlignJustify />}
          </motion.button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-white sm:hidden z-40 flex justify-between space-x-4 px-8 py-2 transition-all duration-300"
          >
            <div className="flex flex-col justify-between h-full w-full">
              <motion.div className="flex flex-col mt-24 space-y-8 font-[600] text-gray-900">
                <Link href="/lms" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.a
                    variants={mobileLinkVariants}
                    className="hover:scale-110 transition-transform block"
                  >
                    LMS
                  </motion.a>
                </Link>
                <Link
                  href="/e-learning"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.a
                    variants={mobileLinkVariants}
                    className="hover:scale-110 transition-transform block"
                  >
                    E-Learning
                  </motion.a>
                </Link>
              </motion.div>
              <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.a
                  variants={mobileLinkVariants}
                  className="border-2 mb-4 bg-[#6559FF] border-white text-white text-center w-full font-[600] p-3 px-6 rounded-lg hover:bg-white hover:text-[#6559FF] transition-colors block"
                >
                  Contact Us
                </motion.a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;