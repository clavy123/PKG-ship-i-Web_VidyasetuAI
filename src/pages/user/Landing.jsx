import React, { useState } from "react";
import Modal from "../../components/Modal";
import { CreateChallengeSection } from "../landing/CreateChallangeSection";

const studyModes = [
  { label: "Play Quiz", icon: "🧩", locked: false },
  // { label: "Study Flashcards", icon: "🃏", locked: false },
  // { label: "Spaced Repetition", icon: "⏰", locked: true }
];

const Landing = () => {
  const [playQuizModal, setPlayQuizModal] = useState(false);

  const closePlayQuizModal = () => setPlayQuizModal(false);
  const openPlayQuizModal = () => setPlayQuizModal(true);

  return (
    <div className="flex h-screen bg-[#10162A]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#151A2F] flex flex-col justify-between py-6 px-4">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-indigo-400 font-bold text-xl">QUIZCRAFT</span>
          </div>
          <div className="mt-8">
            <div className="text-xs text-gray-400 mb-2">Recent</div>
            <div className="flex items-center gap-2 bg-[#23294a] rounded px-2 py-2 text-gray-200">
              <span>📘</span>
              <span className="truncate">Newton’s Laws of Motion</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400">
          <span className="block mb-1">Upgrade plan</span>
          <span className="text-gray-500">Create unlimited lessons</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-[#10162A]">
        {/* Header */}
        <header className="flex justify-between items-center px-10 py-6 bg-[#10162A]">
          <div />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow"
            onClick={openPlayQuizModal}
          >
            + Generate
          </button>
          <div>
            <img
              src="https://i.pravatar.cc/32"
              alt="User"
              className="rounded-full w-8 h-8 border-2 border-indigo-400"
            />
          </div>
        </header>

        {/* Banner */}
        <div className="px-10">
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Lesson Banner"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Study Modes */}
        <div className="px-10">
          <div className="flex gap-4 mb-8">
            {studyModes.map((mode) => (
              <div
                key={mode.label}
                className={`flex flex-col items-center justify-center px-6 py-4 cursor-pointer rounded-xl bg-[#181F39] text-white shadow relative ${
                  mode.locked ? "border-2 border-yellow-400" : ""
                }`}
                onClick={openPlayQuizModal}
              >
                <span className="text-3xl mb-2">{mode.icon}</span>
                <span className="font-semibold">{mode.label}</span>
                {mode.locked && (
                  <span className="absolute top-2 right-2 text-yellow-400 text-xs border border-yellow-400 rounded px-2 py-0.5">
                    🔒
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal for CreateChallengeSection */}
      <Modal open={playQuizModal} onClose={closePlayQuizModal}>
        <CreateChallengeSection isTitleDisplay={false} />
      </Modal>
    </div>
  );
};

export default Landing;
