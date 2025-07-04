import React from "react";
import { ICONS } from "../assets/icons";

export const Header = () => {
  return (
    <header className="flex justify-center items-center px-20 py-6 w-full h-24 border-0 border border-solid bg-black bg-opacity-0 max-md:px-10 max-md:py-6 max-sm:px-5 max-sm:py-4">
      <nav className="flex justify-between items-center w-full max-w-screen-xl h-12 border-0 border border-solid bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex gap-3 items-center h-12 border-0 border border-solid bg-black bg-opacity-0">
          {/* <div className="flex justify-center items-center px-3.5 pt-3.5 pb-3.5 w-12 h-12 rounded-lg border-0 border border-solid shadow-sm bg-white">
           
          </div> */}
          <ICONS.IconCPu size={30} />
          <h1 className="text-2xl leading-8 bg-clip-text max-sm:text-xl max-sm:leading-6 text-white">
            QuizCraft
          </h1>
        </div>
        <button className="flex gap-2 justify-center items-center pt-1.5 pr-6 pb-2.5 pl-6 h-10 rounded-full border-0 border border-solid shadow-sm cursor-pointer w-[113px] max-sm:px-4 max-sm:py-2 max-sm:w-20 bg-white text-black">
          <ICONS.IconUser size={30} />
          <span className="text-base font-bold text-center bg-clip-text max-sm:text-sm">
            Login
          </span>
        </button>
      </nav>
    </header>
  );
};
