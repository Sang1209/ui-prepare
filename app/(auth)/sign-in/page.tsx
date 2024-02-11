"use client";

import React from 'react';
import Image from "next/image";
import Button from "@/components/elements/Button";
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import {useTheme} from "@/context/theme-context";

function SignIn() {

  const {theme} = useTheme();

  return (
    <div className="px-2 w-full">
      <div
        className="flex justify-between mt-20 mb-4 mx-auto h-auto min-h-[82vh] lg:w-[1150px] rounded-3xl shadow-[15px_15px_15px_-5px_rgba(0,0,0,0.3)] shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border dark:border-dark-0">
        <Image className="rounded-tl-3xl rounded-bl-3xl hidden lg:block"
               src="https://images.unsplash.com/photo-1524201862652-0d3d485d6d07?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="cover" width="500" height="500" objectFit="cover"/>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 py-10">
          {
            theme === "light" ?
              <Image className="mb-10" src="/images/ovation-black.png" alt="logo" width="200" height="50"/> :
              <Image className="mb-10" src="/images/ovation-white.png" alt="logo" width="200" height="50"/>
          }
          <form className="w-4/5 mx-auto">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                email</label>
              <input type="email" id="email"
                     className="bg-gray-50 border border-dark-0/20 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-300 dark:bg-dark-0 dark:border-dark-0 dark:placeholder-gray-400 dark:focus:ring-dark-0 dark:focus:border-dark-0"
                     placeholder="name@flowbite.com" required/>
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                password</label>
              <input type="password" id="password"
                     className="bg-gray-50 border border-dark-0/20 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-300 dark:bg-dark-0 dark:border-dark-0 dark:placeholder-gray-400 dark:focus:ring-dark-0 dark:focus:border-dark-0"
                     required/>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value=""
                       className="w-4 h-4 text-primary border border-dark-0/20 rounded bg-gray-50 focus:ring-0 dark:bg-dark-0 dark:border-dark-0 dark:focus:ring-0 dark:ring-offset-0 dark:focus:ring-offset-0"
                       required/>
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                me</label>
            </div>
            <Button className="w-full" type="submit">Sign in</Button>
          </form>
          <div className="flex justify-center items-center gap-3 w-4/5 my-2">
            <hr className="w-full bg-gray-300/50"/>
            <span className="text-sm dark:text-gray-300">OR</span>
            <hr className="w-full bg-gray-300/50"/>
          </div>
          <Button className="w-4/5 flex items-center">
            <FcGoogle className="text-2xl"/>
            <span className="flex-1 text-center">Sign in with Google</span>
          </Button>
          <Button className="w-4/5 flex items-center">
            <FaFacebook className="text-2xl"/>
            <span className="flex-1 text-center">Sign in with Facebook</span>
          </Button>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            New here?
            <Link href="/sign-up" className="font-medium text-blue-600 hover:underline dark:text-blue-500"> Create an
              NextJS account</Link>.
          </p>
          <hr className="w-4/5 bg-gray-300/50 my-2"/>
          <p className="mt-2 w-4/5 text-sm text-gray-500 dark:text-gray-400">
            NextJS collects and uses personal data in accordance with our
            <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500"> Privacy
              Policy</Link>.
            By creating an account, you agree to our
            <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500"> Terms &
              Conditions</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;