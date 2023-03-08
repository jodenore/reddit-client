import React, { useContext } from "react";
import PostList from "../features/posts/PostList";
import { TestContext } from "../TestContext";
import "./Home.css";
const Home = () => {
  const { posts } = useContext(TestContext);

  return (
    <div className="home-container">
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
