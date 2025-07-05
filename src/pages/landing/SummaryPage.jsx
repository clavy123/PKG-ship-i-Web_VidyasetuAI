import { useLocation } from "react-router";

const SummaryPage = () => {
  const { state } = useLocation();
  return (
    <div className="max-w-xl mx-auto bg-[#1C2536] rounded-2xl shadow-lg p-8 text-white mt-5">
      <p className="text-lg leading-relaxed text-justify">
        {state?.summary || "No summary available for this quiz."}
      </p>
    </div>
  );
};

export default SummaryPage;