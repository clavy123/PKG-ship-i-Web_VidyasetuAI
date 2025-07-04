import React from "react";

const ResultCard = () => {
  const resultData = {
    user: "Prince Sen",
    quizTitle: "Newton's Laws of Motion",
    score: 25,
    correct: 5,
    total: 20,
    completionTime: "47s",
    date: "Wed 2nd Jul, 18:50",
    passMark: null,
    questions: [
      {
        question:
          "Which statement best defines 'motion' as it relates to Newton's Laws?",
        givenAnswer:
          "Motion is the capacity of an object to resist external forces and maintain its state.",
        correctAnswer:
          "Motion is the process of an object undergoing a change in its location or position.",
        allOptions: [
          "Motion refers to the internal energy an object possesses due to its molecular activity.",
          "Motion is the process of an object undergoing a change in its location or position.",
          "Motion is the capacity of an object to resist external forces and maintain its state.",
          "Motion is the visible change in an object's color or texture over time.",
        ],
        isCorrect: false,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-xl text-gray-300 mb-2">
          Results for: <span className="text-white font-semibold">{resultData.user}</span> - 23 seconds ago
        </h2>
        <h1 className="text-3xl font-bold text-white mb-6">{resultData.quizTitle}</h1>

        {/* Summary */}
        <div className="flex flex-wrap items-center justify-between bg-[#121a2f] border border-gray-700 rounded-xl p-6 mb-10">
          <div>
            <p className="text-gray-400">Score</p>
            <p className="text-3xl font-bold text-blue-400">
              {resultData.score}% <span className="text-sm font-medium text-gray-400 ml-2">({resultData.correct} / {resultData.total} correct)</span>
            </p>
          </div>
          <div>
            <p className="text-gray-400">Pass/Fail</p>
            <p className="text-gray-200">No pass mark set</p>
          </div>
          <div>
            <p className="text-gray-400">Completion Time</p>
            <p className="text-gray-200">{resultData.completionTime} <span className="text-sm text-gray-400">{resultData.date}</span></p>
          </div>
        </div>

        {/* Question Block */}
        {resultData.questions.map((q, index) => (
          <div key={index} className="bg-[#121a2f] border border-gray-700 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-12 gap-4 text-sm md:text-base">
              <div className="col-span-12 md:col-span-3 text-gray-400 font-semibold">
                Question
              </div>
              <div className="col-span-12 md:col-span-9 text-white">
                {q.question}
              </div>

              <div className="col-span-12 md:col-span-3 text-gray-400 font-semibold">
                Answer
              </div>
              <div className="col-span-12 md:col-span-9 text-white flex items-center justify-between">
                <span>{q.givenAnswer}</span>
                {!q.isCorrect && (
                  <span className="text-sm px-3 py-1 rounded-full bg-red-600 text-white ml-4">
                    Incorrect
                  </span>
                )}
              </div>

              <div className="col-span-12 md:col-span-3 text-gray-400 font-semibold">
                Correct Answer
              </div>
              <div className="col-span-12 md:col-span-9 space-y-2">
                {q.allOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 rounded-lg ${
                      opt === q.correctAnswer
                        ? "bg-[#1e293b] border-l-4 border-green-500 font-semibold text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {opt}
                    {opt === q.correctAnswer && (
                      <span className="ml-2 text-green-400 font-bold">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
