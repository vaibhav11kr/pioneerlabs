import React from "react";
import PopulationGraph from "./PopulationGraph";

const MarketOverview = () => {
  return (
    <div className="bg-[#171717] md:w-[50%] rounded-xl p-4 mb-8 md:mb-0 overflow-hidden flex flex-col items-center">
      <div className="flex justify-between w-full items-center">
        <p className="self-start text-base mb-2">Market Overview</p>
        <div className="flex gap-2 text-xs mb-2 cursor-pointer">
          <p className="">NBST</p>
          <p className="text-[#4F4F4F]">EFT</p>
          <p className="text-[#4F4F4F]">WBCT</p>
          <p className="text-[#4F4F4F]">RET</p>
          <p className="text-[#4F4F4F]">WET</p>
        </div>
      </div>
      <div className="border border-[#4F4F4F] w-full"></div>
      <PopulationGraph />
      <div className="border border-[#4F4F4F] w-full mt-4"></div>
      <div className="flex mt-4 justify-between w-full items-center">
        <p className="text-base">Get in depth charts in trade</p>
        <button
          type="submit"
          className="h-7 w-14 p-1 bg-[#20bd6c] text-xs rounded"
        >
          Trade
        </button>
      </div>
    </div>
  );
};

export default MarketOverview;
