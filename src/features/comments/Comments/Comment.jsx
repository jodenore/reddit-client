import React from "react";
import parse from "html-react-parser";
import MiniVotes from "../../../Components/MiniVotes";
import "animate.css";
import moment from "moment";
const Comment = ({
  author,
  relativeDate,
  content,
  score,
  flair,
  backgroundColor,
}) => {
  return (
    <div className=" transition comment">
      <div className="comment-body">
        <div className="comment-information">
          <h3 className="comment-user-name">{author}</h3>
          <time className="comment-date post-time">
            {moment.unix(relativeDate).fromNow()}
          </time>
        </div>
        <div>
          {flair ? (
            <span
              style={{ backgroundColor: backgroundColor, borderRadius: 0 }}
              className="flair user-flair"
            >
              {flair}
            </span>
          ) : null}
        </div>
        <div className="comment-content">{content ? parse(content) : null}</div>
      </div>
      <div className="comment-footer">
        <MiniVotes score={score} />
      </div>
    </div>
  );
};

export default Comment;

<p>Double D can't make buttered toast</p>;
