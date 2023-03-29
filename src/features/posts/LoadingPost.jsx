import React from "react";
import Votes from "./Votes";
import PlaceHolder from "../../assets/placeholder_2.png";
import "animate.css";
const LoadingPost = () => {
  return (
    <article
      className={`post animate__animated animate__zoomIn ease transition box-shadow `}
    >
      <Votes score={0} />
      <div className="post-body">
        <div className="post-information">
          <p className="post-subreddit"></p>
          <p className="is-loading-info pulse animate__animated animate__zoomIn animate__fadeIn "></p>
          <time className="post-date"></time>
        </div>
        <div className="">
          <h2 className="is-loading-header animate__animated animate__zoomIn ">
            <span></span>
          </h2>
        </div>

        <div className="post-content">
          <img
            src={PlaceHolder}
            className="is-loading-content pulse animate__animated animate__zoomIn  "
          />
        </div>
      </div>
    </article>
  );
};

export default LoadingPost;
