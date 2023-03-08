import moment from "moment";
import Votes from "./Votes";
export const Post = ({ post, isPicture }) => {
  let timestamp = moment.unix(post.created);
  let relativeDate = moment(timestamp).fromNow();
  return (
    <article className="post box-shadow">
      <Votes score={post.ups} />
      <div className="post-body">
        <div className="post-information">
          <p className="post-subreddit">{post.subreddit_name_prefixed}</p>
          <p className="post-author">Posted by u/{post.author}</p>
          <time className="post-date">{relativeDate}</time>
        </div>
        <div className="post-header">
          <a target={"_blank"} href={`https://reddit.com${post.permalink}`}>
            <h2>
              {post.title}
              {post.link_flair_text ? (
                <span className={`flair ${post.link_flair_text_color}`}>
                  {post.link_flair_text}
                </span>
              ) : null}
            </h2>
          </a>
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
    </article>
  );
};

export default Post;
