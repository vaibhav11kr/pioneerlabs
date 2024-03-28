import React from 'react'
import MarketOverview from './MarketOverview';
import WalletBalance from './WalletBalance';
import RecentPost from './RecentPost';

const TopSection = () => {
  return (
    <div className='md:flex md:flex-row gap-5 md:h-[45%]'>
      <MarketOverview />
      <WalletBalance />
      <RecentPost />
    </div>
  )
}

export default TopSection
