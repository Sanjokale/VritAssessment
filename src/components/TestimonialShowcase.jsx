"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export default function TestimonialShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  // Define translation for each image on hover (x, y)
  const translations = {
    user1: { x: -150, y: -150 },
    icon1: { x: 0, y: -150 },
    user3: { x: 150, y: -100 },
    user4: { x: -200, y: 0 },
    icon4: { x: -150, y: 100 },
    user5: { x: 200, y: 0 },
    icon2: { x: 150, y: 100 },
    user6: { x: -150, y: 150 },
    icon3: { x: 0, y: 180 },
    user2: { x: 150, y: 150 },
  };

  // Variants for motion images
  const imageVariants = (key) => ({
    initial: { x: 0, y: 0 },
    hover: {
      x: translations[key].x,
      y: translations[key].y,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  });

  const bounceAnimation = {
    y: [0, -5, 0], // moves up 10px and back down
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  function getRandomBounce() {
    const amplitude = Math.random() * 8 + 3; // 3-11 px vertical bounce
    const duration = Math.random() * 1.5 + 1.5; // 1.5-3 sec duration
    return {
      y: [0, -amplitude, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "mirror",
          duration,
          ease: "easeInOut",
        },
      },
    };
  }
  return (
    <div
      className="max-w-7xl mx-auto h-screen flex items-center justify-center py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[600px] h-[350px] mb-4 flex items-center justify-center">
        {/* Centered Text */}
        <div className="text-center z-10">
          <div className="text-[#414141] mb-1 text-2xl font-normal">
            Hear How They Level Up Their Game!
          </div>
          <div className=" text-[#2B2B2B] text-3xl font-bold mb-2">
            Skill <span className="text-[#1DA077]">Masters</span> Unite!{" "}
            <span role="img" aria-label="handshake">
              🤝
            </span>
          </div>
          <button className="text-base font-semibold text-gray-700 flex items-center justify-center mx-auto gap-2">
            <motion.div
              animate={{ x: [0, -5, 0] }} // slide left and back
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
              className="font-outfit"
            >
              View all Testimonials
            </motion.div>
            <motion.span
              animate={{ x: [0, 5, 0] }} // slide right and back
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3417 4.5084C10.7973 4.05278 11.536 4.05278 11.9916 4.5084L16.6583 9.17506C17.1139 9.63067 17.1139 10.3694 16.6583 10.825L11.9916 15.4916C11.536 15.9473 10.7973 15.9473 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1667L4.16667 11.1667C3.52233 11.1667 3 10.6444 3 10C3 9.35569 3.52233 8.83335 4.16667 8.83335H13.0168L10.3417 6.15831C9.8861 5.7027 9.8861 4.96401 10.3417 4.5084Z"
                  fill="#2B2B2B"
                />
              </svg>
            </motion.span>
          </button>
        </div>

        {/* Top Row */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-5">
          <MotionImage
            src="/user1.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
            variants={imageVariants("user1")}
            initial="initial"
            animate={isHovered ? ["hover", getRandomBounce()] : "initial"}
          />
          <MotionImage
            src="/trofy.gif"
            alt=""
            width={90}
            height={90}
            variants={imageVariants("icon1")}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          />
          <MotionImage
            src="/user3.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
            variants={imageVariants("user3")}
            initial="initial"
            animate={isHovered ? ["hover", getRandomBounce()] : "initial"}
          />
        </div>

        {/* Left Avatar & Icon */}
        <MotionImage
          src="/user4.png"
          alt=""
          width={90}
          height={90}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-2xl"
          variants={imageVariants("user4")}
          initial="initial"
          animate={isHovered ? ["hover", getRandomBounce()] : "initial"}
        />
        <MotionImage
          src="/message.gif"
          alt=""
          width={90}
          height={90}
          className="absolute left-16 bottom-10"
          variants={imageVariants("icon4")}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        {/* Right Avatar & Icon */}
        <MotionImage
          src="/user5.png"
          alt=""
          width={90}
          height={90}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl"
          variants={imageVariants("user5")}
          initial="initial"
          animate={isHovered ? ["hover", getRandomBounce()] : "initial"}
        />
        <MotionImage
          src="/love.gif"
          alt=""
          width={90}
          height={90}
          className="absolute right-16 bottom-10"
          variants={imageVariants("icon2")}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        {/* Bottom Row */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
          <MotionImage
            src="/user6.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
            variants={imageVariants("user6")}
            initial="initial"
            animate={isHovered ? ["hover", getRandomBounce()] : "initial"}
          />
          <MotionImage
            src="/like.gif"
            alt=""
            width={90}
            height={90}
            variants={imageVariants("icon3")}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          />
          <MotionImage
            src="/user2.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
            variants={imageVariants("user2")}
            initial="initial"
            animate={isHovered ? ["hover", getRandomBounce()] : "initial"}
          />
        </div>
      </div>
    </div>
  );
}
