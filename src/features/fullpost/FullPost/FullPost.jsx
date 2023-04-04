import React from "react";
import { GoComment } from "react-icons/go";
import parse from "html-react-parser";
import CommentList from "../../comments/Comments/CommentLists";
import MiniVotes from "../../../Components/MiniVotes";
import { RxCross1 } from "react-icons/rx";
const FullPost = ({
  subreddit,
  author,
  postTitle,
  score,
  navigate,
  flair,
  flairColor,
  postImage,
  postContent,
  numOfComments,
  comments,
  backgroundColor,
}) => {
  return (
    <div className="full-posts-wrapper">
      <div className="full-post-bar">
        <div class="post-bar-inner">
          <div className="post-bar-title">
            <MiniVotes score={score} />
            <h1 className="post-bar-h1">
              {postTitle}
              {flair ? (
                <span
                  style={{ backgroundColor: backgroundColor, borderRadius: 0 }}
                  className={`flair ${flairColor}`}
                >
                  {flair}
                </span>
              ) : null}
            </h1>
          </div>
          <div className="go-back">
            <button title="Close" onClick={() => navigate(-1)}>
              <RxCross1 />
            </button>
          </div>
        </div>
      </div>
      <article className="full-post">
        <div className="full-post-body post-body">
          <div className="full-post-info">
            <p className="post-subreddit">{subreddit}</p>
            <div className="flex">
              <span>Posted</span>
              <p className="full-post-author post-author">by {author}</p>
              <time className="full-post-time post-time">3 hours ago</time>
            </div>
          </div>
          <div className="post-header">
            <h2 className="full-header-h2 post-header-h2">
              {postTitle}
              {flair ? (
                <span
                  style={{ backgroundColor: backgroundColor, borderRadius: 0 }}
                  className={`flair ${flairColor}`}
                >
                  {flair}
                </span>
              ) : null}
            </h2>
          </div>
        </div>
        <div className="full-post-content post-content">
          {postImage ? <img src={postImage} /> : null}
          <div className="post-self-text">
            {postContent ? parse(postContent) : null}
          </div>
        </div>
        <div className="post-footer">
          <GoComment className="comment-icon" />
          <p>{numOfComments} comments</p>
        </div>
      </article>
      {comments?.length > 0 ? <CommentList comments={comments} /> : null}
    </div>
  );
};

export default FullPost;
