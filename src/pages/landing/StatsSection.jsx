import React from "react";

export const StatsSection = () => {
  const stats = [
    { value: "10K+", label: "Quizzes Generated" },
    { value: "500+", label: "Active Players" },
    { value: "25", label: "Achievement Badges" },
  ];

  return (
    <section className="flex absolute left-0 gap-6 justify-center items-start w-full border-0 border border-solid bg-black bg-opacity-0 h-[116px] top-[276px] max-md:flex-col max-md:gap-4 max-md:items-center max-md:h-auto max-sm:static max-sm:mb-10">
      {stats.map((stat, index) => (
        // <StatCard key={index} value={stat.value} label={stat.label} />
        <article key={index} className="flex flex-col gap-2 justify-center items-start p-6 rounded-xl border-0 border border-solid shadow-sm h-[116px] w-[220px] max-md:w-[280px] max-sm:w-full max-sm:max-w-[280px] bg-gray-900">
          <div className="flex justify-center items-center w-full h-9 border-0 border border-solid bg-black bg-opacity-0">
            <h3 className="text-3xl text-center text-white">{stat.value}</h3>
          </div>
          <div className="flex justify-center items-center w-full h-6 border-0 border border-solid bg-black bg-opacity-0">
            <p className="text-base text-center text-gray-300">{stat.label}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
