import React from "react";
import { ICONS } from "../assets/icons";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/auth.slice";

export const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("quizToken");
    localStorage.removeItem("totalTimeTaken");
    navigate("/login");
  };

  return (
    <header className="flex justify-center items-center px-20 py-6 w-full h-24 border-0 border-solid bg-black bg-opacity-0 max-md:px-10 max-md:py-6 max-sm:px-5 max-sm:py-4 border-b">
      <nav className="flex justify-between items-center w-full max-w-screen-xl h-12 border-0 border-solid bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex gap-3 items-center h-12 border-0 border-solid bg-black bg-opacity-0">
          <ICONS.IconCPu size={30} color="#fff" />
          
          <h1
            className="text-2xl leading-8 max-sm:text-xl max-sm:leading-6 bg-gradient-to-r from-[#39ff14] to-[#667eea] bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/")}
          >
            VidyaSetu
          </h1>
        </div>
        {token ? (
          <div className="flex gap-5">
            <button
              className="flex gap-2 justify-center items-center pt-1.5 pr-6 pb-2.5 pl-6 h-10 rounded-full border-0 border-solid shadow-sm cursor-pointer w-[113px] max-sm:px-4 max-sm:py-2 max-sm:w-20 text-white bg-gradient-to-r from-[#ff073a] to-[#667eea]"
              onClick={() => navigate("/")}
            >
              <ICONS.IconHome size={30} />
              Home
            </button>
            <button
              className="flex gap-2 justify-center items-center pt-1.5 pr-6 pb-2.5 pl-6 h-10 rounded-full border-0 border-solid shadow-sm cursor-pointer w-[113px] max-sm:px-4 max-sm:py-2 max-sm:w-20 text-white bg-gradient-to-r from-[#ff073a] to-[#667eea]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-5">
            <button
              className="flex gap-2 justify-center items-center pt-1.5 pr-6 pb-2.5 pl-6 h-10 rounded-full border-0 border-solid shadow-sm cursor-pointer w-[113px] max-sm:px-4 max-sm:py-2 max-sm:w-20 text-white bg-gradient-to-r from-[#ff073a] to-[#667eea]"
              onClick={() => navigate("/")}
            >
              <ICONS.IconHome size={30} />
              Home
            </button>
            <button
              className="flex gap-2 justify-center items-center pt-1.5 pr-6 pb-2.5 pl-6 h-10 rounded-full border-0 border-solid shadow-sm cursor-pointer w-[113px] max-sm:px-4 max-sm:py-2 max-sm:w-20 text-white bg-gradient-to-r from-[#ff073a] to-[#667eea]"
              onClick={() => navigate("/login")}
            >
              <ICONS.IconUser size={30} />
              <Link
                className="text-base font-bold text-center bg-clip-text max-sm:text-sm"
                to={`/login`}
              >
                Login
              </Link>
            </button>
            <button
              className="flex gap-2 justify-center items-center pt-1.5 pr-6 pb-2.5 pl-6 h-10 rounded-full border-0 border-solid shadow-sm cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:w-20 text-white bg-gradient-to-r from-[#ff073a] to-[#667eea]"
              onClick={() => navigate("/signup")}
            >
              <ICONS.IconUserIcon size={16} />
              <Link
                className="text-base font-bold text-center bg-clip-text max-sm:text-sm"
                to={`/signup`}
              >
                Sign up
              </Link>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
