"use client"

import React, {Fragment, useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import {HiOutlineTicket} from "react-icons/hi2";
import {FaUser} from "react-icons/fa";
import {MdLogout} from "react-icons/md";
import {IoMenu} from "react-icons/io5";
import {MdOutlineFavorite} from "react-icons/md";
import Button from "@/components/Button";
import Link from "next/link";
import {navData} from "@/lib/data";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/headless";

function Header() {

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const dropdownMenuRef = useRef(null);

  const handleOutsideClick = () => {
    if (dropdownMenuRef.current) {
      setDropdownMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="z-[999] fixed top-0 left-0 w-full h-16 md:h-32 bg-background shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
      <div className="flex px-2 justify-between items-center h-16 lg:w-[1150px] m-auto">
        <div className="cursor-pointer">
          <Image src="/images/next.svg" alt="logo" width="100" height="50"/>
        </div>
        <div
          className="hidden group md:flex h-12 lg:w-96 pl-4 rounded-[37px] items-center border border-transparent bg-gray-200 hover:border-gray-400 active:border-gray-400 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
          <input className="flex-1 h-1/2 text-base bg-inherit focus:outline-none"
                 placeholder="What do you want to see live?"/>
          <div className="w-auto h-full rounded-r-full flex pl-1 items-center justify-center hover:bg-gray-300 group-hover:text-primary">
            <button className="p-1 mr-2">
              <CiSearch className="text-3xl"/>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button className="hidden md:block">Create Event</Button>
          <Tippy interactive={true} appendTo={() => document.body} render={attrs => (
            <div className="font-bold bg-white p-2 rounded-md shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
              <h1>View Tickets</h1>
            </div>
          )}>
            <button className="hidden md:block">
              <HiOutlineTicket className="text-4xl"/>
            </button>
          </Tippy>
          <HeadlessTippy
            interactive={true}
            appendTo={() => document.body}
            render={attrs => (
              <div
                className="font-bold bg-white py-2 w-48 rounded-md shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
                <ul className="flex flex-col text-lg">
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                    <Link className="flex gap-3 items-center" href=""><FaUser/>View profile</Link>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                    <Link className="flex gap-3 items-center" href=""><MdOutlineFavorite/>Favorites</Link>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                    <Link className="flex gap-3 items-center" href=""><MdLogout/>Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          >
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <Image className="w-8 h-8 object-cover rounded-full cursor-pointer"
                     src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     width="32" height="32" alt="avatar"/>
              <h3 className="font-HelveticaBold">User Profile</h3>
            </div>
          </HeadlessTippy>

          <div className="md:hidden" onClick={() => setDropdownMenu(!dropdownMenu)}>
            <IoMenu className="text-4xl cursor-pointer"/>
          </div>
        </div>
      </div>
      <ul
        className="hidden md:flex px-2 h-16 font-HelveticaMedium text-[15px] lg:w-[1150px] justify-between items-center m-auto">
        {navData.map((nav, index) => {
          if (index > 1) {
            return <li key={index} className="font-HelveticaBold hover:underline">
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          }
        })}
      </ul>
      {dropdownMenu && (
        <div ref={dropdownMenuRef}
             className="z-[999] absolute top-3 right-3 font-bold bg-white py-2 rounded-md shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
          <ul className="flex flex-col text-xl">
            {navData.map((nav, index) => {
              if (index == 1) {
                return (<Fragment key={index}>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                    <Link className="flex gap-3 items-center" href={nav.href}>{nav.icon}{nav.name}</Link>
                  </li>
                  <hr className="bg-gray-500"/>
                </Fragment>)
              }
              return <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                <Link className="flex gap-3 items-center" href={nav.href}>{nav.icon}{nav.name}</Link>
              </li>
            })}
          </ul>
        </div>)}
    </div>
  );
}

export default Header;