import React from "react";
import PostList from "../features/posts/PostList";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <PostList />
    </div>
  );
};

export default Home;
