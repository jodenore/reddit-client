import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CategoryDropdown from "../features/posts/CategoryDropdown";
import PostList from "../features/posts/PostList";
import {
  searchRedditPosts,
  selectAllSearchResults,
  selectIsLoading,
  setSearchCategory,
  selectSearchCategory,
} from "../features/posts/postsSlice";
import NoSearchResults from "./NoSearchResults";
const SearchResults = () => {
  //Reads the query in state and adds it to the end of the url
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const dispatch = useDispatch();
  const searchResults = useSelector(selectAllSearchResults);
  const category = useSelector(selectSearchCategory);
  const isLoading = useSelector(selectIsLoading);
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
  let searchContent = null;
  if (searchResults?.length > 0) {
    searchContent = <PostList posts={searchResults} loading={isLoading} />;
  } else if (searchResults?.length === 0 && !isLoading) {
    searchContent = <NoSearchResults />;
  }

  return (
    <>
      <CategoryDropdown
        categories={categories}
        categorySelector={selectSearchCategory}
        categoryAction={setSearchCategory}
      />
      {searchContent}
    </>
  );
};

export default SearchResults;
