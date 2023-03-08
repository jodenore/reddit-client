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
              return <PostContainer key={post.data.id} post={post.data} />;
            })
          ) : (
            <div>Nothing</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostList;
