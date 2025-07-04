import React from "react";

const Truefalse = () => {
  const players = ["Sarah", "Mike", "Emma", "Alex", "Lisa"];
  const totalQuestions = 10;
  const currentQuestion = 4;
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-[#0B1220] text-white p-4 flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <div>
          <p className="text-sm font-light">Learning Game</p>
          <p className="text-xs">Question {currentQuestion} of {totalQuestions}</p>
          <div className="w-48 h-1 bg-gray-600 mt-1 rounded-full">
            <div
              className="h-1 bg-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">⏱️ 00:30</span>
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <span className="text-sm">JohnDoe</span>
        </div>
      </div>

      {/* Question Box */}
      <div className="bg-[#1C2536] p-6 rounded-xl shadow-md w-full max-w-xl text-center">
        <h2 className="text-lg font-semibold mb-6">
          Is a design system only for designers?
        </h2>

        {/* Options */}
        <div className="space-y-4">
          <div className="bg-[#2B364D] py-3 rounded-md border border-green-500 flex items-center justify-between px-4">
            <span>True</span>
            <span className="text-green-400">✔</span>
          </div>

          <div className="bg-[#2B364D] py-3 rounded-md border border-red-500 flex items-center justify-between px-4">
            <span>False</span>
            <span className="text-red-400">✖</span>
          </div>
        </div>

        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full">
          Next Question →
        </button>
      </div>

      {/* Live Players */}
      <div className="mt-10 w-full max-w-4xl">
        <h3 className="text-sm mb-2">Live Players</h3>
        <div className="flex items-center space-x-4">
          {players.map((player, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <span className="text-xs mt-1">{player}</span>
            </div>
          ))}
          <div className="w-10 h-10 rounded-full bg-[#2B364D] flex items-center justify-center text-sm">+3</div>
        </div>
        <p className="text-xs text-gray-400 mt-1">8 online</p>
      </div>
    </div>
  );
};

export default Truefalse;
