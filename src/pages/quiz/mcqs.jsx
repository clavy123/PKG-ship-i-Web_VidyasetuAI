import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { formatTime } from "../../utils/helper";
import { quizEvaluate } from "../../store/slices/quiz.slice";
import { toast } from "react-toastify";

function Mcqs() {
  const { quizData } = useSelector((state) => state.quiz);
  const totalTime = useMemo(
    () => quizData?.questions?.length * 60 || 0,
    [quizData]
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("quiz_time_left");
    return saved ? parseInt(saved, 10) : totalTime;
  });

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const saved = localStorage.getItem("quiz_current_question");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const saved = localStorage.getItem("quiz_selected_options");
    return saved ? JSON.parse(saved) : [];
  });

  const [quizStartTime] = useState(() => {
    const saved = localStorage.getItem("quiz_start_time");
    if (saved) return parseInt(saved, 10);
    const now = Date.now();
    localStorage.setItem("quiz_start_time", now);
    return now;
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      localStorage.removeItem("quiz_current_question");
      localStorage.removeItem("quiz_selected_options");
      localStorage.removeItem("quiz_time_left");
      // navigate("/result-card");
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        localStorage.setItem("quiz_time_left", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, timeLeft]);

  useEffect(() => {
    localStorage.setItem(
      "quiz_selected_options",
      JSON.stringify(selectedOptions)
    );
  }, [selectedOptions]);

  useEffect(() => {
    localStorage.setItem("quiz_current_question", currentQuestion);
  }, [currentQuestion]);

  const handleOptionSelect = useCallback(
    (index) => {
      const currentQ = quizData?.questions?.[currentQuestion];
      if (!currentQ) return;

      const selected = currentQ.options[index];
      const updated = [...selectedOptions];

      updated[currentQuestion] = {
        question: currentQ.question_text,
        correctAnswer: currentQ.correct_answer,
        selectedOption: selected,
      };

      setSelectedOptions(updated);
    },
    [quizData, currentQuestion, selectedOptions]
  );

  const handleNext = useCallback(async () => {
    if (currentQuestion < quizData?.questions?.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const totalQuizTimeTaken = Math.floor(
        (Date.now() - quizStartTime) / 1000
      );

      const result = await dispatch(
        quizEvaluate({
          token: localStorage.getItem("quizToken"),
          answers: selectedOptions?.map((op) => ({
            questionText: op.question,
            givenAnswer: op.selectedOption,
          })),
          totalTimeTaken: totalQuizTimeTaken?.toString(),
        })
      );
      if (quizEvaluate.fulfilled.match(result)) {
        toast.success("Quiz evaluated successfully!");
        navigate("/result-card");
        localStorage.setItem("totalTimeTaken", totalQuizTimeTaken);
        localStorage.removeItem("quiz_selected_options");
        localStorage.removeItem("quiz_current_question");
        localStorage.removeItem("quiz_time_left");
        localStorage.removeItem("quiz_start_time");
      }
    }
  }, [
    currentQuestion,
    dispatch,
    navigate,
    quizData?.questions?.length,
    selectedOptions,
    quizStartTime,
  ]);

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  return (
    <div className="min-h-screen bg-[#0F1123] text-white px-4 py-6 font-sans max-w-6xl w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 ">
        <div className="flex items-center gap-3">
          <div className="bg-[#1E1F3A] p-2 rounded-full font-bold">QZ</div>
          <h1 className="text-xl font-semibold">Learning Game</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#0FFFA9] font-mono text-sm">
            {formatTime(timeLeft)}
          </span>
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
          Question {currentQuestion + 1} of {quizData?.questions?.length}
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full mb-6">
          <div
            className="h-full bg-teal-400 rounded-full"
            style={{
              width: `${
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
                    selectedOptions[currentQuestion]?.selectedOption === option
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
              disabled={
                selectedOptions[currentQuestion]?.selectedOption === null
              }
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
