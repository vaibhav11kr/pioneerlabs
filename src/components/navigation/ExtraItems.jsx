import React from 'react'
import { Link } from 'react-router-dom';
import { Bell } from '@styled-icons/fa-regular/Bell';
import { QuestionMarkCircleOutline } from '@styled-icons/evaicons-outline/QuestionMarkCircleOutline';
import {Settings2Outline} from "@styled-icons/evaicons-outline/Settings2Outline"


const links = [
    { url: "/notification", title: "Notification", icon: <Bell className='h-4 mr-3 text-white'/>, value: 12 },
    { url: "/support", title: "Support", icon: <QuestionMarkCircleOutline className='h-4 mr-3 text-white'/> },
    { url: "/settings", title: "Settings", icon: <Settings2Outline className='h-4 mr-3 text-white'/> },
    
  ];
const ExtraItems = () => {
  return (
    <div className='h-auto mt-10 items-end'>
        {
            links.map((link)=>{
                return(
                  <li key={link.url} className='list-none'>
                  <Link to={link.url} className='list-none text-sm font-medium pl-4 mb-6 text-[#686868] flex flex-row items-center relative mr-5' >
                      <p>{link.icon} </p>
                      <p>{link.title} </p>
                      { link.value && <p className='bg-green-600 text-black w-6 h-4 text-[10px] rounded align-center absolute right-0 flex justify-center items-center'>{link.value} </p>}
                      
                      
                  </Link>

                  </li>
                )
            })
        }
      
    </div>
  )
}

export default ExtraItems
