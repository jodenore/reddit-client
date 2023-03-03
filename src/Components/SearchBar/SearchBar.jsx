import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input className="transition" placeholder="Search for Posts" value="" />
      <div className="search-icon">
        <BsSearch onClick={() => alert("clicked")} />
      </div>
    </div>
  );
};

export default SearchBar;
