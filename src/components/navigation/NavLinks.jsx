import React from 'react';
import { useLocation } from 'react-router-dom'; 

import { Home } from 'styled-icons/boxicons-regular';
import { Organization } from '@styled-icons/octicons/Organization';
import { Cube } from "@styled-icons/boxicons-regular/Cube";
import { ArrowDownUp } from "@styled-icons/bootstrap/ArrowDownUp";
import { HourglassEmpty } from "@styled-icons/material/HourglassEmpty";
import { Wallet } from "@styled-icons/ionicons-outline/Wallet";

const links = [
    { url: "/", title: "Home", icon: <Home className='h-4 mr-3 text-[#686868] hover:text-[#247D25] hover:scale-110'/> },
    { url: "/about", title: "Organization", icon: <Organization className='h-4 mr-3 text-[#686868] hover:text-[#247D25] hover:scale-110'/> },
    { url: "/contact", title: "Assets", icon: <Cube className='h-4 mr-3 text-[#686868] hover:text-[#247D25] hover:scale-110'/> },
    { url: "/trade", title: "Trade", icon: <ArrowDownUp className='h-4 mr-3 text-[#686868] hover:text-[#247D25] hover:scale-110'/> },
    { url: "/history", title: "History", icon: <HourglassEmpty className='h-4 mr-3 text-[#686868] hover:text-[#247D25] hover:scale-110'/> },
    { url: "/wallet", title: "Wallet", icon: <Wallet className='h-4 mr-3 text-[#686868] hover:text-[#247D25] hover:scale-110'/> },
];

const NavLinks = () => {
    const { pathname } = useLocation(); 
    
    return (
        <div className='h-auto mt-10 mb-24'>
            {
                links.map((link) => {
                    const isActive = link.url === pathname; 
                    
                    return (
                        <li key={link.url} className={`list-none text-sm font-medium pl-4 mb-6 ${isActive ? 'text-green-500' : 'text-white'} flex items-center hover:text-[#247D25]`}>
                            <a href={link.url} className='flex items-center'>
                                <p>{link.icon}</p>
                                <p>{link.title}</p>
                            </a>
                        </li>
                    );
                })
            }
        </div>
    );
};

export default NavLinks;
