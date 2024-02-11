"use client"

import React, {useEffect, useState} from 'react';
import {filterData} from "@/lib/data";
import {VscLayoutSidebarLeft} from "react-icons/vsc";
import {useDispatch, useSelector} from "react-redux";
import filterSlice from "@/redux/features/filter-slice";
import {AppDispatch} from "@/redux/store";
import {filterSelector} from "@/redux/selectors";

function Sidebar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const filterList = useSelector(filterSelector);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    }

    // On first loading
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <aside
      className="flex justify-center shadow-[-10px_0_15px_-5px_rgba(0,0,0,0.3)] shadow-black/[0.03] backdrop-blur-[0.5rem] dark:shadow-black/[0.3]">
      <div
        className={!isSidebarOpen ? 'shadow-[10px_0_15px_-5px_rgba(0,0,0,0.3)] shadow-black/[0.05] backdrop-blur-[0.5rem] dark:shadow-black/[0.5]' : ""}>
        <button className={`text-2xl cursor-pointer p-1 mx-1 mt-3 rounded ${isSidebarOpen && 'bg-dark-100/20 dark:bg-white/20'}`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <VscLayoutSidebarLeft className="dark:text-gray-300"/>
        </button>
      </div>
      {isSidebarOpen && (
        <div
          className="border-l-[1px] w-[200px] py-4 flex flex-col gap-4 shadow-[10px_0_15px_-5px_rgba(0,0,0,0.3)] shadow-black/[0.05] backdrop-blur-[0.5rem] dark:shadow-black/[0.5]">
          <h2 className="text-lg font-HelveticaBold pl-3 dark:text-gray-300">Filter Options</h2>
          <hr className="bg-gray-300"/>
          {filterData.map((filter, index) => {
            return (
              <div key={index} className="ml-3">
                <ul>
                  <li className="font-HelveticaBold mb-4 text-gray-300">{filter.name}</li>
                  {filter.options.map((filterOption, index) => (
                    <li key={index} className="flex items-center gap-4 text-sm font-HelveticaMedium">
                      <div className="flex items-center mb-4 ml-3 select-none">
                        <input id={filterOption}
                               type="checkbox"
                               value=""
                               className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded cursor-pointer focus:ring-transparent focus:transition dark:bg-dark-0 dark:ring-offset-0"
                               onChange={() => dispatch(filterSlice.actions.categoryFilterChange(filterOption))}
                               checked={filterList.categories.some(filter => filter === filterOption)}
                        />
                        <label htmlFor={filterOption}
                               className="ms-2 text-sm font-medium dark:text-gray-300 cursor-pointer">{filterOption}</label>
                      </div>
                    </li>
                  ))}
                </ul>
                <hr className="bg-gray-300"/>
              </div>
            )
          })}
        </div>
      )}
    </aside>
  );
}

export default Sidebar;