import React from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import {
  searchRedditPosts,
  selectQuery,
  selectSearchCategory,
  setQuery,
} from "../../features/posts/postsSlice";
import "./SearchBar.css";
const SearchBar = () => {
  // Selecting the query and category from the global state
  const query = useSelector(selectQuery);
  const category = useSelector(selectSearchCategory);
  // dispatch(react redux) and navigate(react router) functions
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchData = {
    query,
    category,
  };
  const handleKeyPress = (e) => {
    // Preventing the form from reloading the page
    e.preventDefault();
    if (query) {
      dispatch(searchRedditPosts(searchData));
      navigate({
        pathname: "/search",
        search: `${createSearchParams({
          q: query,
        }).toString()}`,
      });
      dispatch(setQuery(""));
    }
  };

  return (
    <form onSubmit={handleKeyPress} className="search-bar">
      <input
        className="transition"
        placeholder="Search for Posts"
        value={query}
        // Using the setQuery action from the global state
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
      <button type={"submit"} className="search-icon">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
