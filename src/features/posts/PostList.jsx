import React from "react";
import Post from "./Post";
import "./Post.css";
const PostList = () => {
  return (
    <section className="posts-main">
      <div className="posts-container">
        <div className="posts-grid">
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
};

export default PostList;
