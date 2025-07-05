import React from "react";
import Modal from "../../components/Modal";
import { ICONS } from "../../assets/icons";

export const StatsSection = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const stats = [
    {
      value: "10K+",
      label: "Quizzes Generated",
      color: "text-green-400",
      hover: "hover:shadow-green-400/30",
    },
    {
      value: "500+",
      label: "Active Players",
      color: "text-cyan-400",
      hover: "hover:shadow-cyan-400/30",
    },
    {
      value: "25",
      label: "Achievement Badges",
      color: "text-pink-500",
      hover: "hover:shadow-pink-400/30",
    },
  ];

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 bg-[#0A0A23]">
      <section className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-3xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-[#11152C] border border-[#1f1f3a] rounded-xl p-6 w-64 min-w-[200px] text-center shadow-md transition duration-200 ${stat.hover}`}
          >
            <p className={`text-3xl font-extrabold ${stat.color}`}>
              {stat.value}
            </p>
            <p className="text-base text-gray-300 mt-2 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </section>
      <button
        className="mt-10 mb-10 inline-flex items-center gap-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform text-lg"
        onClick={handleOpenModal}
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.5V10H10V8h7c0-5.5-4.5-10-10-10z" />
        </svg>
        <span className="bg-gradient-to-r from-slate-50 via-gray-100 to-slate-200 bg-clip-text text-transparent">
          START WITH MULTI PLAYER
        </span>
      </button>

      <Modal open={openModal} onClose={handleCloseModal}>
        <div className="relative bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-10 w-full max-w-xl mx-auto h-80 flex items-center justify-center">
          {/* Close Icon */}
          <button
            className="absolute top-4 right-4 text-white hover:text-red-400 transition"
            onClick={handleCloseModal}
            aria-label="Close"
          >
            <ICONS.IconCancel size={24} />
          </button>

          {/* Message */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-center bg-gradient-to-r from-[#39FF14] via-[#667eea] to-[#ff073a] bg-clip-text text-transparent">
            Coming Soon!
          </h3>
        </div>
      </Modal>
    </div>
  );
};
