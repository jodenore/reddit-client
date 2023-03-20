import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingPost from "./LoadingPost";
import { selectIsLoading } from "./postsSlice";
import Votes from "./Votes";
import PlaceHolder from "../../assets/icon_placeholder.png";
export const Post = ({ post, isPicture, relativeDate }) => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <article
      className={`post ease transition box-shadow ${isLoading ? "pulse" : ""}`}
    >
      <Votes score={post.ups} />
      {isLoading === true ? (
        <LoadingPost />
      ) : (
        <div className="post-body">
          <div className="post-information">
            <p className="post-subreddit">
              <span>
                {post.sr_detail && post.sr_detail.icon_img ? (
                  <img
                    className="subreddit-icon"
                    src={post.sr_detail.icon_img}
                  />
                ) : (
                  <img className="subreddit-icon" src={PlaceHolder} />
                )}
              </span>
              {post.subreddit_name_prefixed}
            </p>
            <p className="post-author">Posted by u/{post.author}</p>
            <time className="post-date">{relativeDate}</time>
          </div>
          <div className="post-header">
            <Link to={`/FullPost${post.permalink}`}>
              <h2 title="Press For Full Post" className="post-header-h2">
                {post.title}
                {post.link_flair_text ? (
                  <span className={`flair ${post.link_flair_text_color}`}>
                    {post.link_flair_text}
                  </span>
                ) : null}
              </h2>
            </Link>
          </div>

          <div className="post-content">
            {isPicture ? (
              <img
                src={post.url_overridden_by_dest}
                referrerPolicy="no-referrer"
              />
            ) : null}
          </div>
        </div>
      )}
    </article>
  );
};

export default Post;
