import SkillShikshyaJourney from "@/components/SkillShikshaJourney";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
   <div className="py-6">
    {/* <SkillShikshyaJourney /> */}
    <TrendingCourses />
   </div>
  );
}
