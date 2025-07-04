
import React from 'react';
import { FaRocket } from 'react-icons/fa';

export const HeroSection = () => {
  return (
    <main className="relative w-full h-[400px] max-sm:min-h-[450px] bg-[#0A0A23] text-white flex items-center justify-center px-2">
      <div className="max-w-4xl w-full text-center">

        {/* Gradient Title with Rocket */}
        <h1 className="flex items-center justify-center gap-4 text-6xl ml-7 sm:text-7xl font-bold bg-gradient-to-r from-lime-400 via-cyan-400 to-pink-500 text-transparent bg-clip-text animate-bounce-slow">
          LEVEL UP
          <span className="inline-flex animate-rocket-bounce">
            <FaRocket className="text-pink-400 drop-shadow-lg" size={54} />
          </span>
        </h1>


        {/* Subheading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mt-4">
          Your Learning Game
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
          Transform any YouTube video into an epic quiz adventure. Challenge yourself, earn badges, and become the ultimate knowledge champion!
        </p>
        
      </div>
    </main>
  );
};
