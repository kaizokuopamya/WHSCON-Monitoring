import React from "react";
import logo from "../Images/aldi.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar({darkMode, toggleMode}) {
  
  return (
      <div className="w-full h-12 mb-6 flex justify-around items-center bg-gray-100 dark:bg-[#071A2F] shadow-md dark:border-b dark:border-slate-500">
        <img
          src={logo}
          className="w-8 h-8 hover:animate-bounce"
          alt="Aldi logo"
        />
        <h1 className="ml-2 font-bold text-base text-amber-400 dark:text-sky-400">
          WHSCON Monitoring
        </h1>
        {darkMode ? (
          <MdLightMode className="text-white text-2xl" onClick={toggleMode} />
        ) : (
          <MdDarkMode className="text-black text-2xl" onClick={toggleMode} />
        )}
      </div>
  );
}
