"use client";
import React, { useState, useEffect } from "react";
import logo from "@/utills/Icons/LynkLogo.svg";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";

export function NavbarTop() {
  return (
    <div className="">
      <Navbar className="md:top-2 z-[100]" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
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
          "fixed inset-x-0 max-w-6xl md:mx-4 lg:mx-auto z-50  " + className
        )}
      >
        <Menu setActive={setActive} className=" md:rounded-full">
          <Link
            href={"/"}
            onClick={() => {
              setActive(null);
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center"
          >
            <Image height={25} width={25} src={logo} alt="logo" />
            <p className="font-bold">Lynk</p>
          </Link>

          <div className="hidden sm:flex text-[14px] items-center gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <Link href={"/lms"}>
                <MenuItem
                  setActive={setActive}
                  item="LMS"
                  active={null}
                ></MenuItem>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <Link href="/e-learning">
                <MenuItem
                  setActive={setActive}
                  active={null}
                  item="E-Learning"
                ></MenuItem>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <MenuItem
                setActive={setActive}
                active={null}
                item="Contact Us"
                className="bg-[#6559FF] p-2 px-4 text-white rounded-full"
              />
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
        </Menu>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="exit"
            variants={mobileMenuVariants}
            className={`
              fixed inset-0 bg-white sm:hidden z-50 flex justify-between space-x-4 px-8 py-2 transition-all duration-300`}
          >
            <div className="flex flex-col justify-between h-full w-full">
              <motion.div className="flex flex-col mt-24 space-y-8 font-[600] text-gray-900">
                <Link href="/lms" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.a
                    variants={mobileLinkVariants}
                    className="hover:scale-110 transition-transform"
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
                    className="hover:scale-110 transition-transform"
                  >
                    E-Learning
                  </motion.a>
                </Link>
                <motion.a
                  variants={mobileLinkVariants}
                  href="/about-us"
                  className="hover:scale-110 transition-transform"
                >
                  About Us
                </motion.a>
              </motion.div>
              <motion.a
                variants={mobileLinkVariants}
                href="/contact-us"
                className="border-2 mb-4 bg-[#6559FF] border-white text-white text-center w-full font-[600] p-3 px-6 rounded-lg hover:bg-white hover:text-[#6559FF] transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
