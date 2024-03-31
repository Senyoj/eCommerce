import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex items-center  border-2 border-less rounded-3xl overflow-hidden h-10 py-2 lg:w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4  bg-transparent outline-none"
      />
      <button type="submit" className="px-4 py-2">
        <FaSearch size={24} color="#CCCCCC" />
      </button>
    </div>
  );
};

export default SearchBar;
