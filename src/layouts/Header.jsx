import React from "react";
import { ICONS } from "../assets/icons";
import { Link, useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-center items-center px-20 py-6 w-full h-24 border-0 border-solid bg-black bg-opacity-0 max-md:px-10 max-md:py-6 max-sm:px-5 max-sm:py-4 border-b">
      <nav className="flex justify-between items-center w-full max-w-screen-xl h-12 border-0 border-solid bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex gap-3 items-center h-12 border-0 border-solid bg-black bg-opacity-0">
          <ICONS.IconCPu size={30} color="#fff" />
          <h1 className="text-2xl leading-8 max-sm:text-xl max-sm:leading-6 bg-gradient-to-r from-[#39ff14] to-[#667eea] bg-clip-text text-transparent">
            QuizCraft
          </h1>
        </div>
        <button
          className="flex gap-2 justify-center items-center pt-1.5 pr-6 pb-2.5 pl-6 h-10 rounded-full border-0 border-solid shadow-sm cursor-pointer w-[113px] max-sm:px-4 max-sm:py-2 max-sm:w-20 text-white bg-gradient-to-r from-[#ff073a] to-[#667eea]"
          onClick={() => navigate("/login")}
        >
          <ICONS.IconUser size={30} />
          <span className="text-base font-bold text-center bg-clip-text max-sm:text-sm">
            Login
          </span>
        </button>
      </nav>
    </header>
  );
};
