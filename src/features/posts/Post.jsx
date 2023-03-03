import React, { useState, useEffect } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
const Post = () => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const vote = (voteType) => {
    if (voteType === "upvote" && !upvote) {
      setUpvote(true);
      setDownvote(false);
    } else if (voteType === "downvote" && !downvote) {
      setDownvote(true);
      setUpvote(false);
    } else {
      setUpvote(false);
      setDownvote(false);
    }
  };
  return (
    <article className="post">
      <div className="post-votes">
        <button
          className={`upvote ${upvote ? "post-voted" : ""}`}
          onClick={() => vote("upvote")}
        >
          <BiUpvote />
        </button>
        <p className="votes">123</p>
        <button
          className={`upvote ${downvote ? "post-voted" : ""}`}
          onClick={() => vote("downvote")}
        >
          <BiDownvote />
        </button>
      </div>
      <div className="post-body">
        <div className="post-header">
          <h2>Post Title</h2>
        </div>
        <div className="post-content">
          <p>content</p>
          <img src="" />
        </div>
      </div>
      <div className="post-footer">
        <p>Posted by User123</p>
      </div>
    </article>
  );
};

export default Post;
