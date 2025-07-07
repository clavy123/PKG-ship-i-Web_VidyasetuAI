import React from "react";
import { useNavigate } from "react-router";
import logo from "../assets/Ai-logo.png";
const CustomLoader = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-[#0c0f24] bg-opacity-90 flex flex-col items-center justify-center z-50">
      <img
        src={logo}
        alt="VidyaSetu Logo"
        className="w-24 h-24 animate-pulse"
      />
      <h1
        className="text-3xl mt-4 bg-gradient-to-r from-[#39ff14] to-[#667eea] bg-clip-text text-transparent font-bold cursor-pointer animate-pulse"
        onClick={() => navigate("/")}
      >
        VidyaSetu
      </h1>
    </div>
  );
};
export default CustomLoader;
