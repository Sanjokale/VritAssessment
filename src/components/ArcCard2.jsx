import Image from "next/image";

// ArcCard.jsx
export default function ArcCard2() {
  return (
    <div className="relative flex h-[341px] w-[592] bg-[#5492A0] rounded-2xl px-8 py-6 border-none">
      <div className="w-2/5 ">
        <p className=" font-bold text-[20px] text-white mt-6 ml-6 ">
          Focused faces—learning mode: ON!
        </p>
      </div>

      <div className="w-1/2  ">
        <div className="absolute right-0 bottom-0 z-10">
          <Image src="/designer2.png" width={572} height={330} alt="Designer" />
        </div>
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
