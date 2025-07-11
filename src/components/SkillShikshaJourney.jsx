import Image from "next/image";

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

function Card({ title, subtitle, description, bg, img, idx }) {
  const isoddCard = idx % 2 === 0;
  const textAllignClass = isoddCard ? "text-left" : "text-right";
  const textContainerClass = isoddCard ? "mr-auto" : "ml-auto";
  const imagePositionClass = isoddCard ? "-right-10" : "-left-10";
  return (
    <div className={`${bg} rounded-2xl px-4 py-10 relative`}>
      <div
        className={`absolute ${
    img === "/img3.png" ? "-bottom-30" : "-bottom-18"
  } ${imagePositionClass} ${
    img === "/img3.png" ? "w-[300px] h-[380px]" : "w-[250px] h-[330px]"
  }`}
      >
        <Image
          src={img}
          alt={`Image for ${title}`}
          fill
          className="object-contain"
        />
      </div>

      <h2
        className={`font-nohemi  text-[#FAFAFA] font-bold text-4xl mb-2.5  ${textAllignClass}`}
      >
        {title}
      </h2>
      <h3
        className={`text-[#FAFAFA] text-2xl font-medium  mb-7  ${textAllignClass} ${textContainerClass}`}
      >
        {subtitle}
      </h3>
      <div className={`w-[350px] ${textAllignClass} ${textContainerClass}`}>
        <p className="font-outfit text-[#FAFAFA] text-lg font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SkillShikshyaJourney() {
  return (
    <div className="max-w-7xl mx-auto px-12 ">
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
        {cardData.map((card, idx) => (
          <Card key={idx} idx={idx + 1} {...card} />
        ))}
      </div>
    </div>
  );
}
