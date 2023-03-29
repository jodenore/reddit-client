import axios from "axios";
import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const TestContext = createContext();

const TestContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [postIsLoading, setPostIsLoading] = useState(true);
  const [fullPostInfo, setFullPostInfo] = useState(null);
  const fetchRedditPosts = async (term) => {
    const URL = `https://www.reddit.com/search.json?q=${term}`;
    const res = await axios.get(URL);
    const data = await res.data.data;
    setSearchResults(data.children);
  };

  const fetchAllReddit = async () => {
    const URL = `https://www.reddit.com/r/all.json`;
    const res = await axios.get(URL);
    const data = await res.data.data;
    setPosts(data.children);
  };

  const fetchFullPost = async (subreddit, id, title) => {
    const URL = `https:/www.reddit.com/r/${subreddit}/comments/${id}/${title}.json`;
    const response = await axios.get(URL);
    const data = await response.data[0];
    const children = await data.data.children;
    setFullPostInfo((prev) => (prev = children[0].data));
  };

  useEffect(() => {
    fetchAllReddit();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <TestContext.Provider
      value={{
        posts,
        searchResults,
        fetchRedditPosts,
        query,
        setQuery,
        isLoading,
        fetchFullPost,
        fullPostInfo,
        postIsLoading,
        setPostIsLoading,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
