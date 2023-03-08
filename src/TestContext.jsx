import axios from "axios";
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { postOne } from "../data";

export const TestContext = createContext();

const TestContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
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

  useEffect(() => {
    fetchAllReddit();
  }, []);

  return (
    <TestContext.Provider
      value={{ posts, searchResults, fetchRedditPosts, query, setQuery }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
