import React, { useState } from "react";
import NavLinks from "./NavLinks";
import ExtraItems from "./ExtraItems";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import Logo from "../../assets/image.png";
import LogoSymbol from "../../assets/logosymbol.png";
import { Menu } from "@styled-icons/entypo/Menu";

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {isNavVisible && (
        <div className="bg-[#1A1E1C] h-[98%] w-[70%] md:w-[20%] pt-6 z-10 shadow-lg flex flex-col rounded-r-lg overflow-scroll mb-4">
          <div className="flex mb-6 items-center justify-between w-[97%] h-14">
            <img src={Logo} alt="logo" className="h-12" />
            <Menu
              className="text-white h-7 mb-3 self-end cursor-pointer"
              onClick={toggleNavVisibility}
            />
          </div>
          <SearchBar />
          <NavLinks />
          <ExtraItems />
          <Profile />
        </div>
      )}
      <div
        className={`fixed top-0 left-0 pl-2 pt-2 h-full w-10 bg-[#1A1E1C] z-20 cursor-pointer ${
          isNavVisible ? "hidden" : "justify-center items-center"
        }`}
        onClick={toggleNavVisibility}
      >
        <img src={LogoSymbol} alt="logo" className="h-6 ml-1 mb-2" />
        <Menu className="text-white h-7 m-auto" />
      </div>
    </>
  );
};

export default NavBar;
