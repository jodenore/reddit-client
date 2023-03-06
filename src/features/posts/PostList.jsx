import React from "react";
import { useContext } from "react";
import { TestContext } from "../../TestContext";
import "./Post.css";
import PostContainer from "./PostContainer";
const PostList = () => {
  const { posts } = useContext(TestContext);
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
