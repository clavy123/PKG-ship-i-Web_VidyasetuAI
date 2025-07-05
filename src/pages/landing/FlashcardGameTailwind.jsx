import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ICONS } from "../../assets/icons";

const FlashcardGameTailwind = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [viewed, setViewed] = useState(() => Array(flashcards.length).fill(false));
  const navigate = useNavigate();

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="text-white text-center py-10">
        No flashcards available.
      </div>
    );
  }

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1));
  };

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => {
      if (prev < flashcards.length - 1) return prev + 1;
      navigate("/result-card");
      return prev;
    });
  };

  const handleFlip = () => {
    setFlipped((f) => {
      // Mark this card as viewed when flipping to answer
      if (!viewed[currentIndex]) {
        const updated = [...viewed];
        updated[currentIndex] = true;
        setViewed(updated);
      }
      return !f;
    });
  };

  return (
    <div className="min-h-[400px] flex flex-col items-center px-4 py-6 text-white">
      {/* Flashcard Container */}
      <div className="relative w-[600px] h-[400px] [perspective:1200px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""
            }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full flex flex-col items-center justify-center bg-[#1C2536] rounded-2xl shadow-2xl p-8 [backface-visibility:hidden]">
             <div
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-10"
              onClick={() => navigate("/result-card")}
            >
              <ICONS.IconArrowBack size={16} className="text-white" />
            </div>
            <p className="text-xl text-center mb-4">
              {flashcards[currentIndex].question}
            </p>
            {viewed[currentIndex] && !flipped && (
              <span className="mt-2 px-3 py-1 bg-blue-700 text-white text-xs rounded-full flex items-center gap-1">
                👁️ Answer Seen
              </span>
            )}
          </div>

          {/* Back */}
          <div className="absolute w-full h-full flex flex-col items-center justify-center bg-[#1C2536] rounded-2xl shadow-2xl p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-xl text-center mb-4">
              {flashcards[currentIndex].answer}
            </p>
            <span className="mt-2 px-3 py-1 bg-green-700 text-white text-xs rounded-full flex items-center gap-1">
              👁️ Answer Shown
            </span>
          </div>
        </div>
      </div>

      {/* Flip Button */}
      <button
        className="mt-6 mb-2 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#39FF14] to-[#667eea] text-white shadow hover:opacity-90 transition"
        onClick={handleFlip}
      >
        {flipped ? "Hide Answer" : "Flip to See Answer"}
      </button>

      {/* Navigation Buttons */}
      <div className="flex gap-4 w-full max-w-xs">
        <button
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous Question
        </button>
        <button
          className="flex-1 bg-[#8C6EFF] hover:bg-[#7a5ce0] text-white py-2 rounded-lg font-medium disabled:opacity-50"
          onClick={handleNext}
        >
          {currentIndex === flashcards.length - 1 ? "Finish Review" : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default FlashcardGameTailwind;