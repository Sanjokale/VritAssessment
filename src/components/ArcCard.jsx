import Image from "next/image";

// ArcCard.jsx
export default function ArcCard() {
  return (

      <div className="relative flex w-[592px] h-[341px] bg-[#fa5a5a] rounded-[40px] px-8 py-6 border-none">
        <div className="w-1/2">
          <div className="absolute left-5 bottom-0 z-10">
            <Image
              src="/designer1.png"
              width={352}
              height={325}
              alt="Designer"
            />
          </div>
          <div className="absolute right-18 bottom-5">
            <Image src="/wow1.png" width={88} height={88} alt="Designer" />
          </div>
          <div className="absolute left-20 ">
            <Image src="/wow2.png" width={88} height={88} alt="Designer" />
          </div>
        </div>

        <div className="w-1/2  ">
          <p className=" font-bold text-[20px] text-white mt-6 ">
            Clarity unlocked—stickers, sips, and skills all in one go!
          </p>
        </div>
        {/* Left Arc */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="w-20 h-26 bg-[#FAFAFA] rounded-r-full"></div>
        </div>
        {/* Right Arc */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="w-20 h-26 bg-[#FAFAFA] rounded-l-full"></div>
        </div>

        {/* Navigation Buttons */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#fa5a5a"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white  w-16 h-16 rounded-full  flex items-center justify-center shadow">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#fa5a5a"
            strokeWidth="2"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    
  );
}
