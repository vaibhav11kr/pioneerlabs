import React from 'react';
import PopulationGraph from './PopulationGraph';

const MarketOverview = () => {
  return (
    <div className='bg-[#171717] h-auto md:h-[90%] md:w-[50%] rounded-xl p-4 mb-8 md:mb-0 overflow-hidden'>
      <PopulationGraph />
    </div>
  );
};

export default MarketOverview;