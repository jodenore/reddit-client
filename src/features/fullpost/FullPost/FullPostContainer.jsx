import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchCurrentComments,
  fetchFullPost,
  setPostIsLoading,
  selectFullPost,
  selectPostIsLoading,
  selectCommentsIsLoading,
} from "../../fullpost/fullPostSlice";
import FullPost from "./FullPost";
import "./FullPost.css";
import { AiFillGithub } from "react-icons/ai";

const FullPostContainer = () => {
  let { subreddit, id, title } = useParams();
  const postIsLoading = useSelector(selectPostIsLoading);
  let fullPostInfo = useSelector(selectFullPost);
  const dispatch = useDispatch();
  const commentIsLoading = useSelector(selectCommentsIsLoading);

  useEffect(() => {
    // set loading flag to true when starting new fetch
    setPostIsLoading(true);
    dispatch(fetchFullPost({ subreddit, id, title }));
    dispatch(fetchCurrentComments({ subreddit, id, title }));
  }, [id, subreddit, title]);

  return (
    <section>
      {postIsLoading ? (
        <AiFillGithub className="spinner" />
      ) : (
        <FullPost fullPost={fullPostInfo} />
      )}
    </section>
  );
};

export default FullPostContainer;
