import React from "react";
import SliderSection from "@/components/home/SliderSection";
import PopularSection from "@/components/home/PopularSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col relative lg:w-[1150px] h-[2000px] mx-auto px-2 mt-16 md:mt-32">
        <SliderSection/>
        <PopularSection/>
      </div>
    </main>
  )
}
