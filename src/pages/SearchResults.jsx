import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PostList from "../features/posts/PostList";
import {
  searchRedditPosts,
  selectAllSearchResults,
} from "../features/posts/postsSlice";
const SearchResults = () => {
  //Reads the query in state and adds it to the end of the url
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const dispatch = useDispatch();
  const searchResults = useSelector(selectAllSearchResults);

  useEffect(() => {
    if (query) {
      dispatch(searchRedditPosts(query));
    }
  }, []);
  return <PostList posts={searchResults} />;
};

export default SearchResults;
