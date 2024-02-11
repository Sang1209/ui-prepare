"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/elements/Button";
import {GrPrevious} from "react-icons/gr";
import {useTheme} from "@/context/theme-context";

function AuthHeader() {

  const {theme} = useTheme();

  return (
    <div
      className="z-[999] fixed top-0 left-0 w-full h-16 bg-background shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:shadow-black/[0.3] dark:bg-dark-500">
      <div className="flex px-2 justify-between items-center h-16 lg:w-[1150px] m-auto">
        <Link href="/" className="cursor-pointer">
          {theme === "light" ?
            <Image src="/images/ovation-black.png" alt="logo" width="115" height="50"/> :
            <Image src="/images/ovation-white.png" alt="logo" width="115" height="50"/>
          }
        </Link>
        <Link href="/">
          <Button className="flex justify-between items-center gap-4">
            <GrPrevious/>
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AuthHeader;