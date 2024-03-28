import React from "react";
import { Menu } from "@styled-icons/entypo/Menu";

const Sidebar = ({ onClick }) => {
  return (
    <div className="bg-[#1A1E1C] h-[98%] w-[30%] md:w-[20%] pt-6 z-10 shadow-lg flex flex-col rounded-r-lg overflow-scroll mb-4">
      <div className="flex mb-6 items-center justify-between w-[97%] h-14">
        <Menu
          className="text-white h-7 mb-3 self-end cursor-pointer"
          onClick={onClick}
        />
      </div>
      {/* Additional sidebar content can go here */}
    </div>
  );
};

export default Sidebar;
