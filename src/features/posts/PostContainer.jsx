import React, { useState, useEffect } from "react";
import Post from "./Post";
import moment from "moment";

const PostContainer = ({ post }) => {
  const [isPicture, setIsPicture] = useState(false);
  let timestamp = moment.unix(post.created);
  let relativeDate = moment(timestamp).fromNow();
  useEffect(() => {
    if (post.url_overridden_by_dest) {
      if (
        post.url_overridden_by_dest.includes("jpg") ||
        post.url_overridden_by_dest.includes("png") ||
        post.url_overridden_by_dest.includes("jpeg")
      ) {
        setIsPicture((prev) => (prev = true));
      }
    }
  }, []);

  return <Post post={post} isPicture={isPicture} relativeDate={relativeDate} />;
};

export default PostContainer;
