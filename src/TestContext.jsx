import axios from "axios";
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { postOne } from "../data";

export const TestContext = createContext();

const TestContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("inazuma");

  const fetchRedditPosts = async (term) => {
    const URL = `https://www.reddit.com/search.json?q=${term}`;
    const res = await axios.get(URL);
    const data = await res.data.data;
    setPosts(data.children);
  };
  useEffect(() => {
    fetchRedditPosts(search);
  }, [setSearch]);

  return (
    <TestContext.Provider
      value={{ search, setSearch, fetchRedditPosts, posts }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
