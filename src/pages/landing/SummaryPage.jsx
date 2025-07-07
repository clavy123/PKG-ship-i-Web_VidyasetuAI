import { useLocation, useNavigate } from "react-router";
import { ICONS } from "../../assets/icons";

const SummaryPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-auto bg-[#1C2536] rounded-2xl shadow-lg p-8 mt-5">
      <div
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
        onClick={() => navigate("/result-card")}
      >
        <ICONS.IconArrowBack size={16} className="text-white" />
      </div>

      <p className="text-lg leading-relaxed text-justify mt-5 text-white">
        {state?.summary || "No summary available for this quiz."}
      </p>
    </div>
  );
};

export default SummaryPage;
