"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Book, Award, Users } from "lucide-react";
import image1 from "@/utills/images/Training-containt-1.svg"
import image2 from "@/utills/images/Training-containt-2.svg"
import image3 from "@/utills/images/Training-containt-3.svg"
import image4 from "@/utills/images/Training-containt-4.svg"
import image5 from "@/utills/images/Training-containt-5.svg"
interface FeatureCard {
  title: string;
  description: string;
  details?: string[];
  progress?: number;
  duration?: string;
  lessons?: number;
  certificate?: boolean;
}

const TrainingContent = () => {
  const features: FeatureCard[] = [
    {
      title: "Visual Learning",
      description: "Engage learners with animations and games.",
      details: ["2D Animations", "Gamified Learning"],
    },
    {
      title: "Micro-learning",
      description: "Provides quick, targeted lessons for efficient learning.",
    },
    {
      title: "Assessments and Materials",
      description: "Assess progress and provide resources such as eBooks.",
    },
    {
      title: "AR/VR Simulations",
      description: "Transform training with immersive AR/VR learning.",
    },
    {
      title: "Scenario-Based Learning",
      description:
        "Real-world simulations for practical problem-solving skills.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Training <span className="text-purple-600">content</span>, ready when
          you need it.
        </h1>
        <p className="text-gray-600">
          Access the right training materials instantly, ensuring seamless
          learning anytime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>

            {feature.details && (
              <ul className="mb-4 space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            {feature.progress && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {feature.duration}
                    </span>
                    <Book className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {feature.lessons} lessons
                    </span>
                    {feature.certificate && (
                      <>
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          Certificate
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 rounded-full h-2"
                    style={{ width: `${feature.progress}%` }}
                  />
                </div>
              </div>
            )}

            {index === 0 && (
              <button className="mt-4 px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                Contact Now
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrainingContent;
