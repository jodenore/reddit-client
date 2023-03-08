import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { createSearchParams, useNavigate } from "react-router-dom";
import { TestContext } from "../../TestContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { fetchRedditPosts, query, setQuery } = useContext(TestContext);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (query) {
      fetchRedditPosts(query);
      navigate({
        pathname: "/search",
        search: `${createSearchParams({ q: query }).toString()}`,
      });
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleKeyPress} className="search-bar">
      <input
        className="transition"
        placeholder="Search for Posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type={"submit"} className="search-icon">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
