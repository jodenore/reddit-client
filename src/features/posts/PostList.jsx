import React from "react";
import { useContext } from "react";
import { TestContext } from "../../TestContext";
import Post from "./Post";
import "./Post.css";
const PostList = () => {
  const { posts } = useContext(TestContext);
  return (
    <section className="posts-main">
      <div className="posts-container">
        <div className="posts-grid">
          {posts.length > 0 ? (
            posts.map((post) => {
              return <Post key={post.data.id} post={post.data} />;
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
