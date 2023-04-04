import React from "react";
import LoadingPost from "./LoadingPost";

import "./Post.css";
import PostContainer from "./PostContainer";
const PostList = ({ posts, loading }) => {
  return (
    <section className="posts-main">
      <div className="posts-container">
        <div className="posts-grid">
          {posts.map((post) => {
            return loading ? (
              <LoadingPost key={post.data.id} />
            ) : (
              <PostContainer post={post.data} key={post.data.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostList;
