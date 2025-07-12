"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Upcoming Courses",
    description: "exciting new courses waiting to boost your skills.",
    number: "05",
  },
  {
    title: "Ongoing Courses",
    description: "currently happening—don't miss out on the action!",
    number: "10",
  },
];

export default function TrendingCourses() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto py-12">
      
      {/* Header */}
      <div className="mb-12">
        <p className="text-[#414141] font-normal text-2xl mb-5">
          Explore our classes and master trending skills!
        </p>
        <h2 className="font-bold text-3xl text-[#2B2B2B]">
          Dive Into{" "}
          <span className="text-[#1DA077] ">
            What's Hot Right Now!{" "}
            <span>
              <Image
                src="/flames-icon.svg"
                alt="flameicon"
                height={25}
                width={25}
                className="inline-block object-contain -mt-2"
              ></Image>
            </span>
          </span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-x-5">
        {/* Large Card (spans 2 columns) */}
        <div className="col-span-2 bg-[#C33241] rounded-2xl text-white p-8 flex flex-col gap-16 ">
          {/* Top-right Button */}

          <motion.button
            className="flex items-center justify-end gap-2 bg-[#C33241] rounded-2xl text-white p-4"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: {},
              hover: {},
            }}
          >
            <p>View all Courses</p>

            <motion.svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={{
                rest: { x: 0 },
                hover: {
                  x: [0, 6, 0], // slide right 6px and back
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3417 5.00837C10.7973 4.55275 11.536 4.55275 11.9916 5.00837L16.6583 9.67503C17.1139 10.1306 17.1139 10.8693 16.6583 11.3249L11.9916 15.9916C11.536 16.4472 10.7973 16.4472 10.3417 15.9916C9.8861 15.536 9.8861 14.7973 10.3417 14.3417L13.0168 11.6667L4.16667 11.6667C3.52233 11.6667 3 11.1443 3 10.5C3 9.85566 3.52233 9.33332 4.16667 9.33332H13.0168L10.3417 6.65828C9.8861 6.20267 9.8861 5.46398 10.3417 5.00837Z"
                fill="#F9EBEC"
              />
            </motion.svg>
          </motion.button>
          {/* Icons Row */}
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/react.png"
              alt="React"
              width={75}
              height={75}
              className=" object-contain"
            />
            <Image
              src="/figma.png"
              alt="Figma"
              width={75}
              height={75}
              className=" object-contain"
            />
            <Image
              src="/vue.png"
              alt="VueJS"
              width={75}
              height={75}
              className=" object-contain"
            />
            <Image
              src="/pen.png"
              alt="Pen"
              width={75}
              height={75}
              className=" object-contain"
            />
          </div>
          {/* Main Text */}
          <div className="flex items-center justify-center gap-6 ">
            <div className="text-[150px] font-bold leading-none">
              23
              <span className="text-[64px] font-bold align-text-top -ml-[10px]">
                +
              </span>
            </div>
            <div className="flex items-start justify-center flex-col gap-3">
              <div className="text-3xl font-bold">All Courses</div>
              <div className="text-lg font-normal">
                courses you're powering through right now.
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Courses Card */}
        {cardData.map((card, idx) => (
          <VerticalCard
            key={idx}
            {...card}
            hoveredIndex={hoveredIndex}
            index={idx}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}

function VerticalCard({
  title,
  description,
  number,
  hoveredIndex,
  index,
  onHoverStart,
  onHoverEnd,
}) {
  const isAnyHoverd = hoveredIndex !== null;
  const direction = [
    { x: 0, y: 5 }, // move right 5px and up 5px on hover
    { x: 5, y: 5 }, // move left 5px and
  ];

  const isHovered = hoveredIndex === index;

  const animateDirection =
    hoveredIndex !== null ? direction[hoveredIndex] : { x: 0, y: 0 };
  return (
    <motion.div
      className="relative bg-[#F9EBEC] rounded-2xl p-8 text-[#C33241] flex flex-col items-center justify-center gap-10 min-h-[250px]"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      animate={isAnyHoverd ? "hover" : "rest"}
      initial="rest"
      variants={{
        rest: {},
        hover: {},
      }}
    >
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#C33241] font-semibold text-lg pointer-events-none"
        variants={{
          rest: { opacity: 0, y: -10 },
          hover: { opacity: 1, y: 0 },
        }}
        animate={isHovered ? "hover" : "rest"}
        initial="rest"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        Click me
      </motion.div>

      <div className="-rotate-90 flex-1 flex items-center flex-col justify-center w-[250px] gap-3">
        <div className="font-bold text-3xl">{title}</div>
        <div className="text-lg font-normal">{description}</div>
      </div>

      <div className="relative w-[150px] text-[150px] font-bold leading-none">
        {number}
        <motion.span
          className="absolute -top-7 -right-8 text-[64px]"
          variants={{
            rest: { x: 0, y: 0 },
            hover: animateDirection,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          animate={isAnyHoverd ? "hover" : "rest"}
          initial="rest"
        >
          +
        </motion.span>
      </div>
    </motion.div>
  );
}






