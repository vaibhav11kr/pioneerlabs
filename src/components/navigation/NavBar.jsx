import React from "react";
import NavLinks from "./NavLinks";
import ExtraItems from "./ExtraItems";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import Logo from "../../assets/image.png"
import {Menu} from "@styled-icons/entypo/Menu"

const NavBar = () => {
  return (
    <div className="bg-[#1A1E1C] h-[98%] w-[20%] pt-6 z-10 shadow-lg flex flex-col rounded-r-lg overflow-scroll mb-4">
    <div className="flex mb-6 items-center justify-between w-[97%] h-14">
        <img src={Logo} alt="logo" className="h-12"/>
        <Menu className="text-white h-7 mb-3 self-end"/>
    </div>
      <SearchBar />
      <NavLinks />
      <ExtraItems />
      <Profile />
    </div>
  );
};

export default NavBar;
