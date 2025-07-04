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

        {/* Horizontal Table for Questions */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#121a2f] border border-gray-700 rounded-xl">
            <thead>
              <tr className="text-left text-gray-400 text-sm">
                <th className="p-4 font-semibold">Question</th>
                <th className="p-4 font-semibold">Your Answer</th>
                <th className="p-4 font-semibold">Correct Answer</th>
                <th className="p-4 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {resultData.questions.map((q, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="p-4 align-top text-white w-1/3">{q.question}</td>
                  <td className="p-4 align-top text-white w-1/4">{q.givenAnswer}</td>
                  <td className="p-4 align-top text-[#0FFFA9] w-1/4">{q.correctAnswer}</td>
                  <td className="p-4 align-top">
                    {q.isCorrect ? (
                      <span className="px-3 py-1 rounded-full bg-green-600 text-white text-xs">Correct</span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs">Incorrect</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
