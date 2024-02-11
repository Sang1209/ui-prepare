import React from 'react';
import {footerSocialData} from "@/lib/data";
import Link from "next/link";

function AuthFooter() {
  return (
    <footer
      className="z-[999] w-full bg-background dark:bg-dark-500 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.3)] shadow-black/[0.03] backdrop-blur-[0.5rem] dark:shadow-black/[0.3]">
      <div className="mx-auto">
        <div className="px-4 py-6 dark:bg-dark-500">
          <div
            className="lg:w-[1150px] mx-auto flex flex-col-reverse gap-2 items-center md:flex-row md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a
              href="https://flowbite.com/">NextJS™</a>. All Rights Reserved.
            </span>
            <ul className="flex items-center gap-8 dark:text-gray-400 font-medium">
              <li>
                <Link href="#" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Policies</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">License</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AuthFooter;