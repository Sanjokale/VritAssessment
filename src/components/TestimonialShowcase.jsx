import Image from "next/image";

export default function TestimonialShowcase() {
  return (
    <div className="max-w-7xl h-screen mx-auto flex items-center justify-center px-6 py-12">
      {/* Top Avatars and Icons */}
      <div className="relative w-[600px] h-[350px] mb-4 flex items-center justify-center">
        {/* Centered Text */}
        <div className="text-center">
          <div className="text-[#414141] mb-1 text-2xl font-normal">
            Hear How They Level Up Their Game!
          </div>
          <div className=" text-[#2B2B2B] text-3xl font-bold mb-2">
            Skill <span className="text-[#1DA077]">Masters</span> Unite!{" "}
            <span role="img" aria-label="handshake">
              🤝
            </span>
          </div>
          <button className="text-base font-semibold text-gray-700  flex items-center justify-center mx-auto gap-2">
            <div>View all Testimonials</div>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3417 4.5084C10.7973 4.05278 11.536 4.05278 11.9916 4.5084L16.6583 9.17506C17.1139 9.63067 17.1139 10.3694 16.6583 10.825L11.9916 15.4916C11.536 15.9473 10.7973 15.9473 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1667L4.16667 11.1667C3.52233 11.1667 3 10.6444 3 10C3 9.35569 3.52233 8.83335 4.16667 8.83335H13.0168L10.3417 6.15831C9.8861 5.7027 9.8861 4.96401 10.3417 4.5084Z"
                  fill="#2B2B2B"
                />
              </svg>
            </span>
          </button>
        </div>
        {/* Top Row */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-5">
          <Image
            src="/user1.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
          />

          {/* Top Center Icon */}
          <Image src="/icon1.png" alt="" width={90} height={90} />

          <Image
            src="/user3.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
          />
        </div>

        {/* Left Avatar & Icon */}
        <Image
          src="/user4.png"
          alt=""
          width={90}
          height={90}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-2xl"
        />
        <Image
          src="/icon4.png"
          alt=""
          width={90}
          height={90}
          className="absolute left-16 bottom-10"
        />

        {/* Right Avatar & Icon */}
        <Image
          src="/user5.png"
          alt=""
          width={90}
          height={90}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl"
        />
        <Image
          src="/icon2.png"
          alt=""
          width={90}
          height={90}
          className="absolute right-16 bottom-10"
        />

        {/* Bottom Row */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
          <Image
            src="/user6.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
          />

          <Image src="/icon3.png" alt="" width={90} height={90} />

          <Image
            src="/user2.png"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
