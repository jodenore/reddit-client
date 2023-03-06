import React, { useState, useEffect } from "react";
import Post from "./Post";

const PostContainer = ({ post }) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votes, setVotes] = useState(null);
  const [isPicture, setIsPicture] = useState(false);

  useEffect(() => {
    if (post.url_overridden_by_dest) {
      if (
        post.url_overridden_by_dest.includes("jpg") ||
        post.url_overridden_by_dest.includes("png")
      ) {
        setIsPicture((prev) => (prev = true));
      }
    }
  }, []);

  return <Post post={post} isPicture={isPicture} />;
};

export default PostContainer;
