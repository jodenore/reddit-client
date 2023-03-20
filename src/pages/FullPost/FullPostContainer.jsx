import React, { Suspense, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchFullPost,
  selectFullPost,
  selectPostIsLoading,
} from "../../features/posts/postsSlice";
import FullPost from "./FullPost";
import "./FullPost.css";

const FullPostContainer = () => {
  let { subreddit, id, title } = useParams();
  const postIsLoading = useSelector(selectPostIsLoading);
  const fullPostInfo = useSelector(selectFullPost);
  const dispatch = useDispatch();

  useEffect(() => {
    // set loading flag to true when starting new fetch
    dispatch(fetchFullPost({ subreddit, id, title }));
  }, [id, subreddit, title]);

  return (
    <div className="full-posts-wrapper">
      {postIsLoading ? (
        <div>Loading...</div>
      ) : (
        <FullPost fullPost={fullPostInfo} />
      )}
    </div>
  );
};

export default FullPostContainer;

// let {
//   fetchFullPost,
//   fullPostInfo,
//   postIsLoading,
//   setPostIsLoading,
// } = useContext(TestContext);
