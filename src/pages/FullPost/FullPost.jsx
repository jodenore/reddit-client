import React from "react";
import { TfiComments } from "react-icons/tfi";
const FullPost = ({ fullPost }) => {
  return (
    <section>
      <article className="full-post">
        <div className="full-post-body post-body">
          <div className="post-information">
            <p className="post-subreddit">{fullPost.subreddit_name_prefixed}</p>
            <p className="post-author">u/{fullPost.author}</p>
            <time className="post-time">3 hours ago</time>
          </div>
          <div className="post-header">
            <h2 className="post-header-h2">
              {fullPost.title}
              {fullPost.link_flair_text ? (
                <span className={`flair ${fullPost.link_flair_text_color}`}>
                  {fullPost.link_flair_text}
                </span>
              ) : null}
            </h2>
          </div>
        </div>
        <div className="post-content">
          {fullPost.selftext ? <p>{fullPost.selftext}</p> : null}
          {fullPost.url_overridden_by_dest ? (
            <img src={fullPost.url_overridden_by_dest} />
          ) : null}
        </div>
        <div className="post-footer">
          <TfiComments />
          <p>{fullPost.num_comments} comments</p>
        </div>
      </article>
    </section>
  );
};

export default FullPost;
