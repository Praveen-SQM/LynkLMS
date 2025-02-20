"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import ContactModal from "../contactModal";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [contactModal, setContactModal] = useState(false);
  const faqs = [
    {
      question: "How long does it take to implement the LMS?",
      answer:
        "We can deploy your LMS within 20-30 days, including basic training for your team.",
    },
    {
      question: "Can the LMS be customized?",
      answer:
        "Yes, our LMS platform offers extensive customization options to match your specific needs and requirements.",
    },
    {
      question: "Can I use my existing content with your LMS?",
      answer:
        "Yes, our platform supports importing content from various formats and sources.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive ongoing support to ensure your success with our platform.",
    },
    {
      question: "Is the content compatible with other LMS platforms?",
      answer:
        "Yes, our content follows industry standards and can be exported to other LMS platforms.",
    },
  ];

  // Variants for staggering questions
  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for individual questions
  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto p-8 py-24 gap-6 lg:gap-28 sm:flex">
      <motion.div
        className="flex flex-col gap-[24px] lg:gap-[28px] mb-6 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }} // Add motion for left section
      >
        <div className="text-center sm:text-start">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:leading-[57.3px]">
            Your questions{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              answered
            </span>
            <span className="text-black">.</span>
          </h1>
          <p className="text-gray-600 text-sm">
            Let's do our best to answer your most frequently asked questions.
          </p>
        </div>
        <motion.div
          className="hidden sm:block mt-8 bg-white rounded-2xl shadow-xl shadow-gray-200 p-3 lg:p-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-4 lg:mb-6 gap-2">
            <div className="rounded-2xl w-[42px] h-[42px] lg:w-[64px] lg:h-[64px] border flex items-center justify-center">
              <div className="bg-[#635bffc5] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
                <span className="text-white">?</span>
              </div>
            </div>
            <div className="w-full max-w-[180px] lg:max-w-[213px]">
              <h3 className="lg:text-lg text-start font-semibold mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 text-start text-sm mb-4">
                Can't find the answer you're looking for? Please chat to our
                friendly team!
              </p>
            </div>
          </div>
          <button
            onClick={() => setContactModal(true)}
            className="bg-[#635bff] w-full text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Get in touch
          </button>
        </motion.div>
      </motion.div>

      {/* FAQ Section with staggered animation */}
      <motion.div
        className="space-y-4 w-full max-w-[672p] lg:max-w-[627px]"
        variants={faqVariants}
        initial="hidden"
        animate="visible"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl text-sm lg:text-base border border-gray-100 overflow-hidden"
            variants={questionVariants}
          >
            <button
              className="w-full px-6 py-4 lg:py-5 text-left flex justify-between items-center "
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-[600] sm:font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 text-gray-500">{faq.answer}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="block sm:hidden mt-8 bg-white rounded-2xl shadow-xl shadow-gray-200 p-3 lg:p-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-4 lg:mb-6 gap-2">
          <div className="rounded-2xl w-[42px] h-[42px] lg:w-[64px] lg:h-[64px] border flex items-center justify-center">
            <div className="bg-[#635bffc5] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
              <span className="text-white">?</span>
            </div>
          </div>
          <div className="w-full sm:max-w-[180px] lg:max-w-[213px]">
            <h3 className="lg:text-lg text-start font-semibold mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-start text-sm mb-4">
              Can't find the answer you're looking for? Please chat to our
              friendly team!
            </p>
          </div>
        </div>
        <button
          onClick={() => setContactModal(true)}
          className="bg-[#635bff] w-full text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Get in touch
        </button>
      </motion.div>

      <ContactModal
        isOpen={contactModal}
        onClose={() => setContactModal(false)}
      />
    </div>
  );
};

export default FAQSection;
