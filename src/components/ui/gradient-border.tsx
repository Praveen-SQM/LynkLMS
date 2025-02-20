import React from "react";
import { motion } from "framer-motion";

const GradientBorder: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  // Create gradient animation keyframes
  const gradientAnimation = {
    background: [
      "linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff0000)",
      "linear-gradient(180deg, #00ff00, #0000ff, #ff0000, #00ff00)",
      "linear-gradient(270deg, #0000ff, #ff0000, #00ff00, #0000ff)",
      "linear-gradient(360deg, #ff0000, #00ff00, #0000ff, #ff0000)",
    ],
    backgroundSize: ["200% 200%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div className={`relative p-[1.5px] w-fit h-fit overflow-hidden ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-full "
        animate={gradientAnimation}
      />

      {/* Content container */}
      <div
        className={`relative bg-white dark:bg-gray-900 w-fit h-fit rounded-full`}
      >
        {children}
      </div>
    </div>
  );
};

// Example usage component

export default GradientBorder;
