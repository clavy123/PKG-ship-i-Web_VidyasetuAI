import React, { useState } from "react";
import { useNavigate } from "react-router";

const FlashcardGameTailwind = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
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
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/result-card");
    }
  };

  return (
    <div className="min-h-[400px] flex flex-col items-center px-4 py-6 text-white">
      {/* Flashcard Container */}
      <div className="relative w-[600px] h-[400px] [perspective:1200px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
          onClick={() => setFlipped(!flipped)}
        >
          {/* Front */}
          <div className="absolute w-full h-full flex items-center justify-center bg-[#1C2536] rounded-2xl shadow-2xl p-8 [backface-visibility:hidden] cursor-pointer">
            <p className="text-xl text-center">
              {flashcards[currentIndex].question}
            </p>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full flex items-center justify-center bg-[#1C2536] rounded-2xl shadow-2xl p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] cursor-pointer">
            <p className="text-xl text-center">
              {flashcards[currentIndex].answer}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 w-full max-w-xs">
        <button
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className="flex-1 bg-[#8C6EFF] hover:bg-[#7a5ce0] text-white py-2 rounded-lg font-medium disabled:opacity-50"
          onClick={handleNext}
        >
          {currentIndex === flashcards.length - 1 ? "Finish Review" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default FlashcardGameTailwind;
