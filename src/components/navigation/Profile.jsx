import React from 'react'
import {PersonCircle} from "@styled-icons/bootstrap/PersonCircle"
import {ThreeDotsVertical} from "@styled-icons/bootstrap/ThreeDotsVertical"
const Profile = () => {
  return (
    <div className='bg-[#333333] w-[93%] text-white flex flex-row h-auto pt-5 pb-5 justify-evenly items-center text-xs ml-2 rounded-md'>
        <div className="h-8">
        <PersonCircle className='h-8 text-[#686868]'/>
            
        </div>
        <div className="flex flex-col">
            <p>Brooklyn Simmons</p>
            <p className='text-[#686868] text-[9px] mt-1'>brooklyn@simmons.com</p>
        </div>
        <div className="h-4">
            <ThreeDotsVertical className="h-4 text-[#686868]"/>
        </div>
      
    </div>
  )
}

export default Profile
