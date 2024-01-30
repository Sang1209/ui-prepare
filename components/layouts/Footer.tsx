import React from 'react';
import Image from "next/image";
import {footerData, footerSocialData} from "@/lib/data";

function Footer() {
  return (
    <footer className="z-[999] bg-background dark:bg-gray-900 shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.3)] shadow-black/[0.03] backdrop-blur-[0.5rem]">
      <div className="mx-auto">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 mx-auto lg:w-[1150px] md:grid-cols-4">
          {footerData.map((footer, index) => (<div key={index}>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{footer.name}</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {footer.options.map((footerOption, index) => (<li key={index} className="mb-4">
                <a href="#" className="hover:underline">{footerOption.name}</a>
              </li>))}
            </ul>
          </div>))}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download App</h2>
            <Image className="cursor-pointer" src="/images/mobile-app.svg" alt="Get Mobile App" width="300" height="100"/>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700">
          <div className="lg:w-[1150px] mx-auto md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a
            href="https://flowbite.com/">NextJS™</a>. All Rights Reserved.
          </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              {footerSocialData.map((footerSocial, index) => (
                <a key={index} href={footerSocial.href} className="text-gray-400 hover:text-gray-900 hover:transition dark:hover:text-white">
                  {footerSocial.icon}
                  <span className="sr-only">{footerSocial.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;