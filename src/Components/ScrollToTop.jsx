import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectPostIsLoading } from "../features/fullpost/fullPostSlice";
import {
  selectAllPosts,
  selectAllSearchResults,
} from "../features/posts/postsSlice";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const posts = useSelector(selectAllPosts);
  const searchResults = useSelector(selectAllSearchResults);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [posts, searchResults]);
  return null;
};

export default ScrollToTop;
