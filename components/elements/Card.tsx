"use client"

import React, {useState} from 'react';
import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";

interface CardProps {
  title: string,
  image: string,
  date: string,
  category: string,
  href: string
}

function Card({title, image, date, category, href}: CardProps) {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="flex flex-col w-64 bg-white border border-gray-200 cursor-pointer justify-self-center align-self-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:transition-transform hover:-translate-y-[1px] hover:shadow-md">
      <a href="#">
        <Image className="rounded-t-lg w-64 h-28 object-cover"
               src={image}
               alt={title} width="256" height="112"/>
      </a>
      <div className="px-3 pt-1">
        <a href={href}>
          <h5 className="mb-1 text-base font-HelveticaBold text-gray-900 dark:text-white">{title}</h5>
        </a>
      </div>
      <div className="mt-auto px-3 pb-1 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-700 dark:text-gray-400">{date}</p>
          <p className="text-xs font-HelveticaMedium text-gray-400 dark:text-gray-400">{category}</p>
        </div>
        <div className="text-2xl text-primary" onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <GoHeartFill/> : <IoIosHeartEmpty/>}
        </div>
      </div>
    </div>
  );
}

export default Card;