"use client"

import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import {HiOutlineTicket} from "react-icons/hi2";
import {IoMenu} from "react-icons/io5";
import Link from "next/link";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/headless";
import {useDispatch} from "react-redux";

import {AppDispatch} from "@/redux/store";
import filterSlice from "@/redux/features/filter-slice";
import {categoryNavData, pageNavData} from "@/lib/data";
import Button from "@/components/elements/Button";

function Header() {

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const dropdownMenuRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleOutsideClick = () => {
    if (dropdownMenuRef.current) {
      setDropdownMenu(false);
    }
  }

  const handleSubmitSearchForm = () => {

    dispatch(filterSlice.actions.searchFilterChange(searchValue));
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
        <Link href="/" className="cursor-pointer">
          <Image src="/images/next.svg" alt="logo" width="100" height="50"/>
        </Link>
        <form onSubmit={handleSubmitSearchForm}>
          <div
            className="hidden group md:flex h-12 lg:w-96 pl-4 rounded-[37px] items-center border-2 border-transparent bg-gray-200 hover:border-gray-300 transition hover:duration-300 active:border-gray-300 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
            <input className="flex-1 h-1/2 text-base bg-inherit focus:outline-none"
                   placeholder="What do you want to see live?" onChange={(e) => setSearchValue(e.target.value)}/>
            <div
              className="w-auto h-full rounded-r-full flex pl-1 items-center justify-center transition duration-300 group-hover:bg-gray-300">
              <button type="submit" className="p-1 mr-2 text-3xl">
                <CiSearch/>
              </button>
            </div>
          </div>
        </form>
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
                  {pageNavData.map((pageNav, index) => {
                    if (index > 2) {
                      return (
                        <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                          <Link className="flex gap-3 items-center"
                                href={pageNav.href}>{pageNav.icon}{pageNav.name}</Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            )}
          >
            <div className="hidden md:flex gap-2 items-center justify-center cursor-pointer">
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
        {pageNavData.map((pageNav, index) => {
          if (pageNav.name === "Home") {
            return (
              <li key={index} className="font-HelveticaBold hover:underline">
                <Link href={pageNav.href}>{pageNav.name}</Link>
              </li>
            )
          }
        })}
        {categoryNavData.map((categoryNav, index) => {
          if (index < 7) {
            return <li key={index} className="font-HelveticaBold hover:underline">
              <Link href={categoryNav.href}
                    onClick={() => dispatch(filterSlice.actions.navFilterHandle(categoryNav.name))}>{categoryNav.name}</Link>
            </li>
          }
        })}
      </ul>
      {dropdownMenu && (
        <div ref={dropdownMenuRef}
             className="z-[999] absolute top-3 right-3 font-bold bg-white py-2 rounded-md shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
          <ul className="flex flex-col text-xl">
            {pageNavData.map((pageNav, index) => (
                <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                  <Link className="flex gap-3 items-center"
                        href={pageNav.href}>{pageNav.icon}{pageNav.name}</Link>
                </li>
              )
            )}
            <hr className="bg-gray-500 my-2"/>
            {categoryNavData.map((categoryNav, index) => {
              return <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:transition">
                <Link className="flex gap-3 items-center"
                      href={categoryNav.href}>{categoryNav.icon}{categoryNav.name}</Link>
              </li>
            })}
          </ul>
        </div>)}
    </div>
  );
}

export default Header;