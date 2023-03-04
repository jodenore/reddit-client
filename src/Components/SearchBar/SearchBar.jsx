import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { TestContext } from "../../TestContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { search, setSearch, fetchRedditPosts } = useContext(TestContext);

  return (
    <div className="search-bar">
      <input
        className="transition"
        placeholder="Search for Posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search-icon">
        <BsSearch onClick={() => fetchRedditPosts(search)} />
      </div>
    </div>
  );
};

export default SearchBar;
