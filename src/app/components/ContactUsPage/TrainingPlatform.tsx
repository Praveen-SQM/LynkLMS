"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import trainingPlatform from "@/utills/images/trainingPlatform.svg";
import trainingPlatform1 from "@/utills/images/trainingPlatform1.svg";

const TrainingPlatform = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      title: "Transforming Education",
      description: "Transform classrooms with digital tools that simplify assessments and empower educators with content creation.",
      image: trainingPlatform,
      bg: "bg-[#F7F7FF]"
    },
    {
      title: "Corporate Training Excellence",
      description: "Streamline onboarding with customized programs, measure ROI, and keep your workforce current to improve performance.",
      image: trainingPlatform1,
      bg: "bg-[#F7F7FF]"
    }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate slides for continuous loop
  const duplicatedSlides = [...slides, ...slides];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        paginate(1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      const maxIndex = isMobile ? duplicatedSlides.length - 1 : duplicatedSlides.length - 2;
      
      if (nextIndex >= maxIndex) {
        return 0;
      }
      if (nextIndex < 0) {
        return maxIndex - 1;
      }
      return nextIndex;
    });
  };

  const getCurrentSlides = () => {
    if (isMobile) {
      return [duplicatedSlides[currentIndex]];
    }
    return [duplicatedSlides[currentIndex], duplicatedSlides[currentIndex + 1]];
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-12 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Train diverse user groups efficiently.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-[14px] md:text-[16px]">
          Measure the impact of training on customer success, drive revenue, and
          deliver an exceptional brand experience to your end users.
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div 
        className="relative h-[500px] md:h-[500px] w-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {getCurrentSlides().map((slide, index) => (
              <div 
                key={index}
                className={`rounded-2xl ${slide.bg} p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="flex flex-col h-full">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-sm md:text-base text-gray-600">
                    {slide.description}
                  </p>
                  <div className="mt-auto">
                    <div className="rounded-xl p-4 relative overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        className="rounded-lg w-full h-48 md:h-64 object-cover mb-4"
                        width={800}
                        height={600}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
          onClick={() => {
            paginate(-1);
            setIsAutoPlaying(false);
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
          onClick={() => {
            paginate(1);
            setIsAutoPlaying(false);
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex % slides.length) === index ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPlatform;