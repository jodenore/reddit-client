import React, { useState, useEffect } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
const Post = ({ post }) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  let originalVotes = post.ups;
  const vote = (voteType) => {
    if (voteType === "upvote" && !upvote) {
      setUpvote(true);
      setDownvote(false);
      post.ups = originalVotes + 1;
    } else if (voteType === "downvote" && !downvote) {
      setDownvote(true);
      setUpvote(false);
      post.ups = originalVotes - 1;
    } else {
      setUpvote(false);
      setDownvote(false);
      post.ups = originalVotes;
    }
  };
  return (
    <article className="post box-shadow">
      <div className="post-votes">
        <button
          className={`post-vote transition ${upvote ? "post-voted" : ""}`}
          onClick={() => vote("upvote")}
        >
          <BiUpvote />
        </button>
        <p className="votes">{post.ups}</p>
        <button
          className={`post-vote transition ${downvote ? "post-voted" : ""}`}
          onClick={() => vote("downvote")}
        >
          <BiDownvote />
        </button>
      </div>
      <div className="post-body">
        <div className="post-header">
          <a target={"_blank"} href={`https://reddit.com${post.permalink}`}>
            <h2>
              {post.title} <span>{post.link_flair_text}</span>
            </h2>
          </a>
        </div>
        <div className="post-information">
          <p className="post-subreddit">{post.subreddit_name_prefixed}</p>
          <p className="post-author">posted by {post.author}</p>
          <time className="post-date"> 11 hours ago</time>
        </div>
        <div className="post-content">
          <img src={post.url_overridden_by_dest} />
        </div>
      </div>
    </article>
  );
};

export default Post;
