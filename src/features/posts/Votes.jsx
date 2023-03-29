import React, { useState, useEffect } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./postsSlice";
const Votes = ({ score }) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votes, setVotes] = useState(null);
  useEffect(() => {
    setVotes(score);
  }, []);

  const loading = useSelector(selectIsLoading);

  const vote = (voteType) => {
    if (voteType === "upvote" && !upvote) {
      setVotes((prev) => (prev = score + 1));
      setUpvote(true);
      setDownvote(false);
    } else if (voteType === "downvote" && !downvote) {
      setDownvote(true);
      setUpvote(false);
      setVotes((prev) => (prev = score - 1));
    } else {
      setUpvote(false);
      setDownvote(false);
      setVotes((prev) => (prev = score));
    }
  };

  return (
    <div className="post-votes">
      <button
        className={`post-vote transition ${upvote ? "post-voted" : ""}`}
        onClick={() => vote("upvote")}
      >
        <BiUpvote />
      </button>
      <p
        className={`votes transition ${
          loading ? "is-loading-votes pulse" : ""
        } ${upvote ? "votes-upvoted" : ""} ${
          downvote ? "votes-downvoted" : ""
        }`}
      >
        {votes}
      </p>
      <button
        className={`post-vote downvote transition ${
          downvote ? "votes-downvoted" : ""
        }`}
        onClick={() => vote("downvote")}
      >
        <BiDownvote />
      </button>
    </div>
  );
};
export default Votes;
