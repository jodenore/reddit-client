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
  selectAllCurrentComments,
} from "../../fullpost/fullPostSlice";
import FullPost from "./FullPost";
import "./FullPost.css";
import { AiFillRedditCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const FullPostContainer = () => {
  let { subreddit, id, title } = useParams();
  const postIsLoading = useSelector(selectPostIsLoading);
  let fullPostInfo = useSelector(selectFullPost);
  const dispatch = useDispatch();
  const currentComments = useSelector(selectAllCurrentComments);
  const navigate = useNavigate();
  useEffect(() => {
    // set loading flag to true when starting new fetch
    setPostIsLoading(true);
    dispatch(fetchFullPost({ subreddit, id, title }));
    dispatch(fetchCurrentComments({ subreddit, id, title }));
  }, [id, subreddit, title]);

  let fullPostContent;
  if (postIsLoading) {
    fullPostContent = <AiFillRedditCircle className="spinner loading" />;
  } else if (!postIsLoading) {
    fullPostContent = (
      <FullPost
        subreddit={fullPostInfo.subreddit_name_prefixed}
        author={fullPostInfo.author}
        postTitle={fullPostInfo.title}
        score={fullPostInfo.ups}
        navigate={navigate}
        flair={fullPostInfo.link_flair_text}
        flairColor={fullPostInfo.link_flair_text_color}
        backgroundColor={fullPostInfo.link_flair_background_color}
        postImage={fullPostInfo.url_overridden_by_dest}
        postContent={fullPostInfo.selftext_html}
        numOfComments={fullPostInfo.num_comments}
        comments={currentComments}
      />
    );
  }

  return <section>{fullPostContent}</section>;
};

export default FullPostContainer;
