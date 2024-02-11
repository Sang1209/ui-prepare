"use client"

import React from 'react';
import {BsMoon, BsSun} from "react-icons/bs";
import {useTheme} from "@/context/theme-context";
import Tippy from "@tippyjs/react/headless";

function ThemeSwitch() {

  const {theme, toogleTheme} = useTheme();

  return (
    <Tippy
    interactive={true}
    appendTo={() => document.body}
    render={attrs => (
      <div className="font-bold bg-white p-2 rounded-md shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-dark-0 dark:text-gray-300">
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      </div>
    )}
    >
      <button
        className="fixed bottom-5 right-5 bg-dark-500 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white"
        onClick={toogleTheme}
      >
        {
          theme === "light" ? <BsMoon className="text-white"/> : <BsSun/>
        }
      </button>
    </Tippy>
  );
}

export default ThemeSwitch;