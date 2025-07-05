import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizEvaluate } from "../store/slices/quiz.slice.js";
import { formatTime } from "../utils/helper.js";
import CustomLoader from "./CustomLoader.jsx";

const ResultCard = () => {
  const quizToken = localStorage.getItem("quizToken");
  const dispatch = useDispatch();
  const { evaluateQuizData, loading } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (quizToken) {
      dispatch(
        quizEvaluate({
          token: localStorage.getItem("quizToken"),
        })
      );
    }
  }, [dispatch, quizToken]);

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      {loading && (
        <CustomLoader />
      )}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Content and Sidebar */}
        <div className="flex-1">
          {/* Header */}
          {/* <h2 className="text-xl text-gray-300 mb-2">
            Results for:{" "}
            <span className="text-white font-semibold">{resultData.user}</span>{" "}
            - 23 seconds ago
          </h2> */}
          {evaluateQuizData?.title && (
            <h1 className="text-3xl font-bold text-white mb-6">
              {evaluateQuizData.title}
            </h1>
          )}

          {/* Summary - Responsive + Gamification Badges */}
          <div className="w-full bg-[#121a2f] border border-gray-700 rounded-xl p-6 mb-10 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-0 items-stretch sm:items-center justify-between relative">
            {/* Badges */}
            <div className="absolute right-4 top-4 flex gap-2 z-10">
              {evaluateQuizData?.scorePercentage >= 90 && (
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold shadow">
                  Gold Medal 🥇
                </span>
              )}
              {evaluateQuizData?.scorePercentage >= 80 &&
                evaluateQuizData?.scorePercentage < 90 && (
                  <span className="bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold shadow">
                    Silver Medal 🥈
                  </span>
                )}
              {evaluateQuizData?.scorePercentage > 50 &&
                evaluateQuizData?.scorePercentage < 80 && (
                  <span className="bg-gradient-to-r from-orange-300 to-orange-500 text-orange-900 px-2 py-1 rounded-full text-xs font-bold shadow">
                    Bronze Medal 🥉
                  </span>
                )}
              {evaluateQuizData?.scorePercentage <= 50 && (
                <span className="bg-red-400 text-red-900 px-2 py-1 rounded-full text-xs font-bold shadow">
                  Try Again! 😢
                </span>
              )}
              {evaluateQuizData?.scorePercentage === 100 && (
                <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold shadow">
                  Perfect!
                </span>
              )}
            </div>
            {/* ...existing code... */}
            <div className="flex-1 min-w-[180px] mb-4 sm:mb-0">
              <p className="text-gray-400">Score</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-400 break-words">
                {evaluateQuizData?.scorePercentage}%{" "}
                <span className="text-sm font-medium text-gray-400 ml-2">
                  ({evaluateQuizData?.correctAnswers} /{" "}
                  {evaluateQuizData?.totalQuestions} correct)
                </span>
              </p>
            </div>
            <div className="flex-1 min-w-[140px] mb-4 sm:mb-0">
              <p className="text-gray-400">Pass/Fail</p>
              <p className="text-gray-200">
                {evaluateQuizData?.scorePercentage >= 50 ? "Pass" : "Fail"}
              </p>
            </div>
            {evaluateQuizData?.totalTimeTaken && (
              <div className="flex-1 min-w-[180px]">
                <p className="text-gray-400">Completion Time</p>
                <p className="text-gray-200">
                  {formatTime(evaluateQuizData?.totalTimeTaken)}
                </p>
              </div>
            )}
          </div>

          {/* Progress Bar - Gamified */}
          <div className="w-full mb-6">
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-700"
                style={{ width: `${evaluateQuizData?.scorePercentage}%` }}
                title={`${evaluateQuizData?.scorePercentage}%`}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>100%</span>
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
                  {evaluateQuizData?.videoUrl && (
                    <th className="p-4 font-semibold">Rewatch Explanation</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {evaluateQuizData?.incorrectQuestions.map((q, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="p-4 align-top text-white w-1/4">
                      {q.questionText}
                    </td>
                    <td className="p-4 align-top text-white w-1/6">
                      {q.givenAnswer}
                    </td>
                    <td className="p-4 align-top text-[#0FFFA9] w-1/6">
                      {q.correctAnswer}
                    </td>
                    <td className="p-4 align-top">
                      <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs">
                        Incorrect
                      </span>
                    </td>
                    {evaluateQuizData?.videoUrl && (
                      <td className="p-4 align-top">
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-semibold"
                          onClick={() => {
                            if (evaluateQuizData?.videoUrl) {
                              window.open(
                                `${evaluateQuizData?.videoUrl}&t=${q.timeStamp}s`,
                                "_blank"
                              );
                            } else {
                              window.open("https://www.youtube.com", "_blank");
                            }
                          }}
                        >
                          Play Video
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
                {evaluateQuizData?.correctQuestions?.map((q, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="p-4 align-top text-white w-1/4">
                      {q.questionText}
                    </td>
                    <td className="p-4 align-top text-white w-1/6">
                      {q.givenAnswer}
                    </td>
                    <td className="p-4 align-top text-[#0FFFA9] w-1/6">
                      {q.correctAnswer}
                    </td>
                    <td className="p-4 align-top">
                      <span className="px-3 py-1 rounded-full bg-green-600 text-white text-xs">
                        Correct
                      </span>
                    </td>
                    {evaluateQuizData?.videoUrl && (
                      <td className="p-4 align-top">
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-semibold"
                          onClick={() => {
                            if (evaluateQuizData?.videoUrl) {
                              window.open(
                                `${evaluateQuizData?.videoUrl}&t=${q.timeStamp}s`,
                                "_blank"
                              );
                            } else {
                              window.open("https://www.youtube.com", "_blank");
                            }
                          }}
                        >
                          Play Video
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar: Suggested Videos */}
        {evaluateQuizData?.recommendations?.length && (
          <aside className="w-full md:w-80 flex-shrink-0 mt-10 md:mt-0 md:ml-8">
            <div className="bg-[#121a2f] border border-gray-700 rounded-xl p-4 mt-8 md:mt-14">
              <h3 className="text-lg font-bold text-white mb-4">
                Suggested Videos
              </h3>
              <div className="flex flex-col gap-4">
                {evaluateQuizData?.recommendations.map((video, idx) => (
                  <a
                    key={idx}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:bg-[#23244a] rounded-lg p-2 transition"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-16 h-10 object-cover rounded"
                    />
                    <span className="text-sm text-white font-medium line-clamp-2">
                      {video.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
