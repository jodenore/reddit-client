import React from "react";

import "./Post.css";
import PostContainer from "./PostContainer";
const PostList = ({ posts }) => {
  return (
    <section className="posts-main">
      <div className="posts-container">
        <div className="posts-grid">
          {posts.length > 0 ? (
            posts.map((post) => {
              return <PostContainer post={post.data} key={post.data.id} />;
            })
          ) : (
            <div>Empty</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostList;
