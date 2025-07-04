import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Mcqs() {
  const { quizData } = useSelector((state) => state.quiz);
  console.log("quizData-", quizData);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("quiz_selected_options");
    return saved ? JSON.parse(saved) : [];
  });
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "quiz_selected_options",
      JSON.stringify(selectedOptions)
    );
  }, [selectedOptions]);

  const handleOptionSelect = (index) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[currentQuestion] =
        updated[currentQuestion] === index ? null : index;
      return updated;
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizData?.questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result-card");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1123] text-white px-4 py-6 font-sans max-w-6xl w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 ">
        <div className="flex items-center gap-3">
          <div className="bg-[#1E1F3A] p-2 rounded-full font-bold">QZ</div>
          <h1 className="text-xl font-semibold">Learning Game</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#0FFFA9] font-mono text-sm">00:45</span>
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=11"
              className="w-8 h-8 rounded-full"
              alt="User"
            />
            <span className="text-sm">JohnDoe</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="mb-2 text-sm text-gray-400 ">
          {showResults
            ? `Quiz Complete!`
            : `Question ${currentQuestion + 1} of ${
                quizData?.questions?.length
              }`}
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full mb-6">
          <div
            className="h-full bg-teal-400 rounded-full"
            style={{
              width: showResults
                ? "100%"
                : `${
                    ((currentQuestion + 1) / quizData?.questions?.length) * 100
                  }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question Box */}
      <div className="flex justify-center w-full">
        <div className="bg-[#1C1D35] p-6 rounded-xl shadow-md mb-8 max-w-3xl w-full">
          <h2 className="text-lg font-bold mb-6">
            {quizData?.questions?.[currentQuestion]?.question_text}
          </h2>

          <div className="flex flex-col gap-4">
            {quizData?.questions?.[currentQuestion]?.options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg border transition text-left
                  ${
                    selectedOptions[currentQuestion] === index
                      ? "bg-[#6A5AE0]"
                      : "bg-[#2B2D51] hover:bg-[#3a3d6f]"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-[#1F203D] flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-sm">{option}</span>
                </button>
              )
            )}
          </div>

          <div className="mt-6 flex gap-4 w-full">
            <button
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium disabled:opacity-50"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              className="flex-1 bg-[#8C6EFF] hover:bg-[#7a5ce0] text-white py-2 rounded-lg font-medium disabled:opacity-50"
              onClick={handleNext}
              disabled={selectedOptions[currentQuestion] == null}
            >
              {currentQuestion === quizData?.questions?.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mcqs;
