import React from "react";
import { HeroSection } from "./HeroSection";
import { StatsSection } from "./StatsSection";
import { FeaturesSection } from "./FeaturesSection";
import { CreateChallengeSection } from "./CreateChallangeSection";

const LandingPage = () => {
  return (
    <div className="inline-flex flex-col items-start mx-auto my-0 w-full rounded-lg">
      <div className="flex relative flex-col justify-center items-start w-full bg-gray-900 border-0 border border-solid">
        <div className="relative w-full">
          <HeroSection />
          <StatsSection />
        </div>
        <CreateChallengeSection />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default LandingPage;
