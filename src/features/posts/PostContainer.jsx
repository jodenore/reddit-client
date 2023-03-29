import React, { useState, useEffect } from "react";
import Post from "./Post";
import moment from "moment";
import { selectIsLoading } from "./postsSlice";
import { useSelector } from "react-redux";
import LoadingPost from "./LoadingPost";

const PostContainer = ({ post }) => {
  const [isPicture, setIsPicture] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  let timestamp = moment.unix(post.created);
  let relativeDate = moment(timestamp).fromNow();
  useEffect(() => {
    if (post.url_overridden_by_dest) {
      if (
        post.url_overridden_by_dest.includes("jpg") ||
        post.url_overridden_by_dest.includes("png") ||
        post.url_overridden_by_dest.includes("jpeg")
      ) {
        setIsPicture(true);
      }
    }
  }, []);

  return isLoading ? (
    <LoadingPost />
  ) : (
    <Post post={post} isPicture={isPicture} relativeDate={relativeDate} />
  );
};

export default PostContainer;
