import React from "react";

const LoadingPost = () => {
  return (
    <>
      <div className="post-body">
        <div className="post-information">
          <p className=" is-loading-h2 post-subreddit"></p>
          <p className=" is-loading-h2  post-author"></p>
          <time className="post-date"></time>
        </div>
        <div className="">
          <h2 className=" is-loading-h2">
            <span></span>
          </h2>
        </div>

        <div className="post-content">
          <img />
        </div>
      </div>
    </>
  );
};

export default LoadingPost;
