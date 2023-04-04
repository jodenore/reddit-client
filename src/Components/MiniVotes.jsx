import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";

const CommentVotes = ({ score }) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votes, setVotes] = useState(null);

  useEffect(() => {
    setVotes(score);
  }, []);

  const vote = (voteType) => {
    if (voteType === "upvote" && !upvote) {
      setVotes((prev) => (prev = score + 1));
      setUpvote(true);
      setDownvote(false);
    } else if (voteType === "downvote" && !downvote) {
      setVotes((prev) => (prev = score - 1));
      setDownvote(true);
      setUpvote(false);
    } else {
      setUpvote(false);
      setDownvote(false);
      setVotes(score);
    }
  };

  return (
    <div className="comment-votes">
      <button
        className={`comment-vote transition ${upvote ? "comments-voted" : ""} `}
        onClick={() => vote("upvote")}
      >
        <BiUpvote />
      </button>

      <p
        className={`comment-score transition ${upvote ? "score-upvoted" : ""} ${
          downvote ? "score-downvoted" : ""
        }`}
      >
        {votes}
      </p>

      <button
        className={`comment-vote transition ${
          downvote ? "comments-downvoted" : ""
        }`}
        onClick={() => vote("downvote")}
      >
        <BiDownvote />
      </button>
    </div>
  );
};

export default CommentVotes;
