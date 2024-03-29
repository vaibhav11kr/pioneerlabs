import React from 'react'
import TopSection from './TopSection'
import "../../App.css"
import BottomSection from './BottomSection';
const name = "Brooklyn Simmons"
const Main = () => {
  return (
    <div className='pl-7 pt-9 text-white text-2xl w-[calc(100vw-2.5rem)] pr-7 h-full'>
        <div className="mb-8">
            <p className='text-2xl'>Hello, <span className='text-gradient'>{name}</span> 👋🏻</p>
            <p className='text-xl'>Welcome to <span className='text-[#259926]'>Spot trading !</span></p>
        </div>
      <TopSection />
      <BottomSection/>
    </div>
  )
}

export default Main
