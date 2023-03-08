import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PostList from "../features/posts/PostList";
import { TestContext } from "../TestContext";
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { searchResults, fetchRedditPosts } = useContext(TestContext);

  useEffect(() => {
    if (query) {
      fetchRedditPosts(query);
    }
  }, []);
  return <PostList posts={searchResults} />;
};

export default SearchResults;
