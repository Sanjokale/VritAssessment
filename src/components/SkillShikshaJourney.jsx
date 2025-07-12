"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ArcCard from "./ArcCard"; // Adjust path as needed
import ArcCard2 from "./ArcCard2";

const cardData = [
  {
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bg: "bg-[#F45B5B]",
    img: "/img1.png",
  },
  {
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bg: "bg-[#5492A0]",
    img: "/img2.png",
  },
  {
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    bg: "bg-[#6C64A8]",
    img: "/img3.png",
  },
  {
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bg: "bg-[#A88964]",
    img: "/img4.png",
  },
];

function Card({
  title,
  subtitle,
  description,
  bg,
  img,
  idx,

  onHover,
  onLeave,
}) {
  const isoddCard = (idx + 1) % 2 === 0;
  const textAllignClass = isoddCard ? "text-left" : "text-right";
  const textContainerClass = isoddCard ? "mr-auto" : "ml-auto";
  const imagePositionClass = isoddCard ? "-right-10" : "-left-10";

  // Animate only for first two cards (optional)
  const shouldAnimate = idx === 0 || idx === 1;

  const imageContent = (
    <Image
      src={img}
      alt={`Image for ${title}`}
      fill
      className="object-contain"
    />
  );

  return (
    <motion.div
      className={`${bg} rounded-2xl px-4 py-10 relative w-[592px] h-[341px]`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {shouldAnimate ? (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${
            img === "/img3.png" ? "-bottom-30" : "-bottom-18"
          } ${imagePositionClass} ${
            img === "/img3.png" ? "w-[300px] h-[380px]" : "w-[250px] h-[330px]"
          }`}
        >
          {imageContent}
        </motion.div>
      ) : (
        <div
          className={`absolute ${
            img === "/img3.png" ? "-bottom-30" : "-bottom-18"
          } ${imagePositionClass} ${
            img === "/img3.png" ? "w-[300px] h-[380px]" : "w-[250px] h-[330px]"
          }`}
        >
          {imageContent}
        </div>
      )}

      <h2
        className={`font-nohemi text-[#FAFAFA] font-bold text-4xl mb-2.5 ${textAllignClass}`}
      >
        {title}
      </h2>
      <h3
        className={`text-[#FAFAFA] text-2xl font-medium mb-7 ${textAllignClass} ${textContainerClass}`}
      >
        {subtitle}
      </h3>
      <div className={`w-[350px] ${textAllignClass} ${textContainerClass}`}>
        <p className="font-outfit text-[#FAFAFA] text-lg font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SkillShikshyaJourney() {
  //   const [isFirstCardHovered, setIsFirstCardHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto py-12 ">
      <h2 className="font-sans font-medium text-[24px] leading-none tracking-normal text-[#414141] mb-6">
        Your SkillShikshya Journey
      </h2>

      <h1 className="font-nohemi font-bold text-[32px] leading-[1.2] tracking-normal space-x-1 ">
        <span className="text-[#1DA077]">Step</span>
        <span className="text-[#2B2B2B]">In.</span>
        <span className="text-[#1DA077]">Skill</span>
        <span className="text-[#2B2B2B]">Up.</span>
        <span className="text-[#1DA077]">Stand</span>
        <span className="text-[#2B2B2B]">Out.</span> 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {cardData.map((card, idx) => {
          if (idx === 0 || idx === 1) {
            const isHovered = hoveredCardIndex === idx;
            return (

              <div>

                <AnimatePresence
                  mode="popLayout"
                  key={`first-card-wrapper-${idx}`}
                >
                  {isHovered && (
                    <motion.div
                      key={`arc-card-${idx}`}
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }} // fade out to left
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      onMouseLeave={() => setHoveredCardIndex(null)}
                      className="flex items-center justify-center"
                    >
                      {idx === 0 ? <ArcCard /> : <ArcCard2 />}
                    </motion.div>
                  )}
                </AnimatePresence>

                    <AnimatePresence mode="popLayout">
                {hoveredCardIndex !== idx && (
                  <motion.div
                    key={`card-${idx}`}
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }} // fade out to left
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onMouseEnter={() => setHoveredCardIndex(idx)}
                    className="flex items-center justify-center"
                  >
                    <Card idx={idx} {...card} />
                  </motion.div>
                )}
              </AnimatePresence>
                  
              </div>
              
            );
          }

          // Other cards render normally without hover handlers
          return (
            <div
              key={`card-wrapper-${idx}`}
              className="flex items-center justify-center"
            >
              <Card idx={idx} {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
