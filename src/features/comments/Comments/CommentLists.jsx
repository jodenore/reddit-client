import React from "react";
import { useSelector } from "react-redux";
import {
  selectCommentsIsLoading,
  selectFullPost,
} from "../../fullpost/fullPostSlice";
import Comment from "./Comment";
import "./Comment.css";
const CommentList = ({ comments }) => {
  const commentsLoading = useSelector(selectCommentsIsLoading);
  let fullPostInfo = useSelector(selectFullPost);
  let content;
  if (commentsLoading) {
    <div>Loading </div>;
  } else if (!commentsLoading) {
    content = comments.map(({ data }) => {
      return data.body_html ? (
        <Comment
          author={data.author}
          relativeDate={data.created}
          content={data.body_html}
          key={data.id}
          score={data.ups}
          flair={data.author_flair_text}
          backgroundColor={fullPostInfo.link_flair_background_color}
        />
      ) : null;
    });
  }

  return (
    <section className="comments-main">
      <div className="comments-container">
        <div className="comments-grid">{content}</div>
      </div>
    </section>
  );
};

export default CommentList;
