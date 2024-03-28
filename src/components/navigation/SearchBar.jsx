import React from "react";
import { Search } from "@styled-icons/bootstrap/Search";

const SearchBar = () => {
  return (
    <div className="h-16">
        <div class="relative w-[93%] bg-[#333333] rounded-md ml-2 ">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="w-3 h-3 text-white " />
      </div>
      <input
        type="search"
        id="default-search"
        className="bg-[#333333] block w-full p-2 ps-10 text-sm rounded-md text-white "
        placeholder="Search"
        required
      />
    </div>
    </div>
  );
};

export default SearchBar;
