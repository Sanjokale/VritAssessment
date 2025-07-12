import ArcCard from "@/components/ArcCard";
import ArcCard2 from "@/components/ArcCard2";
import SkillShikshyaJourney from "@/components/SkillShikshaJourney";
import TestimonialShowcase from "@/components/TestimonialShowcase";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
   <div className="py-6">
    {/* <SkillShikshyaJourney />  */}
    <TrendingCourses />
    {/* <TestimonialShowcase /> */}
    
   </div>
  );
}
