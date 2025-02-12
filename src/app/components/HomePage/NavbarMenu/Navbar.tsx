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
import { motion } from "framer-motion"; // Import framer-motion for animation

export function NavbarTop() {
  return (
    <div className="">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Define the initial and final states for the motion animation
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 }, // Initially, items are hidden and slightly below
    visible: { opacity: 1, y: 0 },  // When visible, items are in their normal state
  };

  return (
    <div className={cn("fixed inset-x-0 max-w-6xl mx-4 lg:mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center">
          <Image height={25} width={25} src={logo} alt="logo" />
          <p className="font-bold">Lynk</p>
        </div>

        {/* Animating MenuItems one by one with delay */}
        <div className="flex text-[14px] items-center gap-6">
          {/* Services MenuItem */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
          </motion.div>

          {/* Products MenuItem */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {/* Product items can be uncommented here */}
              </div>
            </MenuItem>
          </motion.div>

          {/* Pricing MenuItem */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </motion.div>

          {/* Contact Us MenuItem */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
              className="bg-[#6559FF] p-2 px-4 text-white rounded-full"
            ></MenuItem>
          </motion.div>
        </div>
      </Menu>
    </div>
  );
}
