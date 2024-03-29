import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import ExtraItems from "./ExtraItems";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import Logo from "../../assets/image.png";
import LogoSymbol from "../../assets/logosymbol.png";
import { Menu } from "@styled-icons/entypo/Menu";

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768; 
      setIsNavVisible(!isSmallScreen);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isNavVisible && (
        <div className="fixed top-0 left-0 md:static bg-[#1A1E1C] h-full sm:min-w-[20%] pt-6 shadow-lg flex flex-col rounded-r-lg z-20 overflow-y-auto">
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
        className={`pl-2 pt-2 h-[100%] w-10 bg-[#1A1E1C] z-20 ${
          isNavVisible ? "hidden" : "justify-center items-center"
        }`}
        
        // onMouseOver={toggleNavVisibility}
      >
        <img src={LogoSymbol} alt="logo" className="h-6 ml-1 mb-2" />
        <Menu className="text-white h-7 m-auto cursor-pointer" onClick={toggleNavVisibility}/>
      </div>
    </>
  );
};

export default NavBar;
