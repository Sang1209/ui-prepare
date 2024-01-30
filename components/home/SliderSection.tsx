"use client"

import React from 'react';
import {Carousel} from "flowbite-react";
import {GrPrevious} from "react-icons/gr";
import {GrNext} from "react-icons/gr";

function SliderSection() {
  return (
    <section className="h-48 sm:h-72 md:h-96 xl:h-108 mt-4">
      <Carousel pauseOnHover leftControl={<GrPrevious className="customTransition hover:text-white"/>}
                rightControl={<GrNext className="customTransition hover:text-white"/>}>
        <img className="object-cover h-full" src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg"
             alt="..."/>
        <img className="object-cover h-full" src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/17/26A067.jpg" alt="..."/>
        <img className="object-cover h-full" src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg" alt="..."/>
      </Carousel>
    </section>
  );
}

export default SliderSection;