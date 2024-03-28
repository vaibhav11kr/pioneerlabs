import React from 'react'
import TopSection from './TopSection'
import "../../App.css"
const name = "Brooklyn Simmons"
const Main = () => {
  return (
    <div className='pl-7 pt-9 text-white text-2xl w-[100vw] pr-7 h-full'>
        <div className="mb-8">
            <p className='text-2xl'>Hello, <span className='text-gradient'>{name}</span> 👋🏻</p>
            <p className='text-xl'>Welcome to <span className='text-[#259926]'>Spot trading !</span></p>
        </div>
      <TopSection />
      <div className="flex flex-col">
        <p className='text-white text-xl mb-4'>Assets</p>
        <div className="flex flex-row gap-4">
        <div className="bg-[#171717] w-44 rounded-lg">
          <div className='flex flex-row'>
            <p>img</p>
            <p>NBST</p>
          </div>
          <div className='flex flex-row'>
            Nature Based Solution Token
          </div>
          <div className='flex flex-row'>
            <p>0.72 $</p>
            <p>+11.01%</p>
          </div>
          <div className='flex flex-row'>
            <p>img</p>
            <button type="submit">Trade</button>
          </div>
        </div>
        <div className="bg-[#171717] w-44 rounded-lg">
          <div className='flex flex-row'>
            <p>img</p>
            <p>NBST</p>
          </div>
          <div className='flex flex-row'>
            Nature Based Solution Token
          </div>
          <div className='flex flex-row'>
            <p>0.72 $</p>
            <p>+11.01%</p>
          </div>
          <div className='flex flex-row'>
            <p>img</p>
            <button type="submit">Trade</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Main
