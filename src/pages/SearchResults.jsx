import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CategoryDropdown from "../features/posts/CategoryDropdown";
import PostList from "../features/posts/PostList";
import {
  searchRedditPosts,
  selectAllSearchResults,
  setSearchCategory,
  selectSearchCategory,
} from "../features/posts/postsSlice";
const SearchResults = () => {
  //Reads the query in state and adds it to the end of the url
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const dispatch = useDispatch();
  const searchResults = useSelector(selectAllSearchResults);
  const category = useSelector(selectSearchCategory);
  const searchData = {
    query,
    category,
  };
  let categories = [
    { id: 1, categoryName: "relevance" },
    { id: 2, categoryName: "hot" },
    { id: 3, categoryName: "top" },
    { id: 4, categoryName: "new" },
  ];

  useEffect(() => {
    if (query) {
      dispatch(searchRedditPosts(searchData));
    }
  }, [category]);
  return (
    <>
      <CategoryDropdown
        categories={categories}
        categorySelector={selectSearchCategory}
        categoryAction={setSearchCategory}
      />
      <PostList posts={searchResults} />;
    </>
  );
};

export default SearchResults;
