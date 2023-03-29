import React from "react";
import { GoComment } from "react-icons/go";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Votes from "../../posts/Votes";
const FullPost = ({ fullPost }) => {
  return (
    <div className="full-posts-wrapper">
      <article className="full-post">
        <div className="full-post-body post-body">
          <div className="full-post-info">
            <p className="post-subreddit">{fullPost.subreddit_name_prefixed}</p>
            <div className="flex">
              <span>Posted</span>

              <p className="full-post-author post-author">
                by {fullPost.author}
              </p>
              <time className="full-post-time post-time">3 hours ago</time>
            </div>
          </div>
          <div className="post-header">
            <h2 className=" full-header-h2 post-header-h2">
              {fullPost.title}
              {fullPost.link_flair_text ? (
                <span className={`flair ${fullPost.link_flair_text_color}`}>
                  {fullPost.link_flair_text}
                </span>
              ) : null}
            </h2>
          </div>
        </div>
        <div className="full-post-content post-content">
          {fullPost.url_overridden_by_dest ? (
            <img src={fullPost.url_overridden_by_dest} />
          ) : null}
          {fullPost.selftext ? (
            <ReactMarkdown
              children={fullPost.selftext}
              className="full-post-p"
            />
          ) : null}
        </div>
        <div className="post-footer">
          <GoComment />
          <p>{fullPost.num_comments} comments</p>
        </div>
      </article>
    </div>
  );
};

export default FullPost;

{
  /* <p className="full-post-p">{fullPost.selftext}</p> */
}

// <Votes className="full-votes" score={fullPost.ups} />
