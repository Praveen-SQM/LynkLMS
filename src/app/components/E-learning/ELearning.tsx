"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Book, Award, Users } from "lucide-react";
import image1 from "@/utills/images/Training-containt-1.svg";
import image2 from "@/utills/images/Training-containt-2.svg";
import image3 from "@/utills/images/Training-containt-3.svg";
import image4 from "@/utills/images/Training-containt-4.svg";
import image5 from "@/utills/images/Training-containt-5.svg";
import Image from "next/image";
import Link from "next/link";

const TrainingContent = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w-6xl flex flex-col items-center justify-center mx-auto px-4 py-24">
      <motion.div
        className="text-center mb-16 max-w-2xl "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-[600] mb-4">
          Training <span className="text-purple-600">content</span>, ready when
          you need it.
        </h1>
        <p className="text-gray-600">
          Access the right training materials instantly, ensuring seamless
          learning anytime.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="w-full md:flex gap-[18px]">
          {/* First Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex gap-[33px] rounded-xl mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0 }}
          >
            {/* Image First on Mobile */}
            <div className="flex items-center order-1 md:order-2 w-full h-full justify-center pr-[35px] pl-[35px] pt-[20px] lg:pt-[46px] lg:pb-[35px] md:pl-0 md:pr-[19px] lg:pr-[31px]">
              <Image
                src={image1}
                alt="image1"
                width={343}
                height={313}
                className="w-full h-full md:w-[214px] md:h-[196px] lg:w-[323px] lg:h-[313px]"
              />
            </div>

            {/* Text Below Image on Mobile */}
            <div className="pl-[30px] order-2 md:order-1 lg:pl-[46px] py-[37px] lg:py-[73px]">
              <h3 className="text-xl font-semibold mb-2">Visual Learning</h3>
              <p className="text-gray-600 lg:text-lg mb-4">
                Engage learners with animations and games.
              </p>
              <ul className="space-y-2 mb-4 text-sm lg:text-[16px] font-[500]">
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                  2D Animations
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                  Gamified Learning
                </li>
              </ul>
              <Link href="/contact-us">
                <button className="lg:mt-4 px-6 py-3 bg-white rounded-full text-sm font-medium hover:bg-[#F4F5FF] transition-colors">
                  Contact Now
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Second Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between rounded-xl p-[15px] lg:p-[46px] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="md:flex w-full h-full items-center px-[70px] pt-[20px] md:px-0 md:py-0 justify-center">
              <Image
                src={image2}
                alt="image2"
                height={186}
                width={270}
                className="w-full h-full md:w-[196px] md:h-[116px] lg:w-[270px] lg:h-[186px]"
              />
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-2">Micro-learning</h3>
              <p className="text-gray-600 lg:text-lg mb-4">
                Provides quick, targeted lessons for efficient learning.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Third Feature Card */}
        <div className="md:flex gap-[18px]">
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between rounded-xl p-[12px] lg:p-[46px] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center px-[62px] py-[20px] md:px-0 md:py-0 ">
              <Image src={image3} alt="image2" height={152} width={286} />
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-2">
                Assessments and Materials
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Assess progress and provide resources such as eBooks.
              </p>
            </div>
          </motion.div>

          {/* Fourth Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between rounded-xl mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center w-full justify-center">
              <Image
                src={image4}
                alt="image4"
                className="rounded-t-xl w-full"
                height={298}
                width={386}
              />
            </div>
            <div className="p-[12px] lg:p-[46px]">
              <h3 className="text-xl font-semibold mb-2">AR/VR Simulations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Transform training with immersive AR/VR learning.
              </p>
            </div>
          </motion.div>

          {/* Fifth Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between rounded-xl p-[12px] lg:p-[46px] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center w-full px-[62px] py-[20px] md:px-0 md:py-0 ">
              <Image
                src={image5}
                alt="image5"
                width={238}
                height={221}
                className="w-full md:w-[148px] md:h-[138px] lg:w-[238px] lg:h-[221px]"
              />
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-2">
                Scenario-Based Learning
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Real-world simulations for practical problem-solving skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrainingContent;
