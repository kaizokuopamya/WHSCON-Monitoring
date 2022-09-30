import React from "react";
import logo from "../Images/aldi.png";

export default function Navbar() {
  return (
    <div className="w-full h-10 mb-6 flex justify-center items-center bg-[071A2F] border-b border-slate-500 ">
      <img src={logo} className="w-8 h-8 hover:animate-spin" alt="Aldi logo" />
      <h1 className="ml-2 font-bold text-base text-sky-400">WHSCON Monitoring</h1>
    </div>
  );
}
