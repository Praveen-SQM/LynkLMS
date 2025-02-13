"use client";
import React, { useState } from "react";
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

export function NavbarTop() {
  return (
    <div className="">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 max-w-6xl mx-4 lg:mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <div className="flex items-center">
            <Image height={25} width={25} src={logo} alt="logo" />
            <p className="font-bold">Lynk</p>
          </div>

          <div className="hidden sm:flex text-[14px] items-center gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <MenuItem setActive={setActive} active={active} item="LMS">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <MenuItem
                setActive={setActive}
                active={null}
                item="E-Learning"
              ></MenuItem>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <MenuItem
                setActive={setActive}
                active={null}
                item="About Us"
              ></MenuItem>
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
            className="fixed inset-0 bg-[#6559FF] dark:bg-black dark:border-white/[0.2] bg-white/70 backdrop-blur-lg  sm:hidden z-40"
          >
            <div className="flex flex-col px-14 justify-between h-full">
              <motion.div className="flex flex-col mt-24 space-y-8 text-black font-[600] text-gray-900">
                <motion.a
                  variants={mobileLinkVariants}
                  href="/web-dev"
                  className="hover:scale-110 transition-transform"
                >
                  LMS
                </motion.a>
                <motion.a
                  variants={mobileLinkVariants}
                  href="/interface-design"
                  className="hover:scale-110 transition-transform"
                >
                  E-Learning
                </motion.a>
                <motion.a
                  variants={mobileLinkVariants}
                  href="/seo"
                  className="hover:scale-110 transition-transform"
                >
                  About Us
                </motion.a>
              </motion.div>
              <motion.a
                variants={mobileLinkVariants}
                href="/contact"
                className="border-2 mb-4 bg-[#6559FF] border-white text-white text-center  font-[600] p-3 px-6 rounded-lg hover:bg-white hover:text-[#6559FF] transition-colors"
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
