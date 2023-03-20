import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PostList from "../features/posts/PostList";
import { fetchAllReddit, selectAllPosts } from "../features/posts/postsSlice";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  useEffect(() => {
    dispatch(fetchAllReddit());
  }, []);
  return (
    <div className="home-container">
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
