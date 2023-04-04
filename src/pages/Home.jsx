import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CategoryDropdown from "../features/posts/CategoryDropdown";
import PostList from "../features/posts/PostList";
import {
  fetchAllReddit,
  selectAllPosts,
  selectCategory,
  setCategory,
  selectIsLoading,
} from "../features/posts/postsSlice";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const category = useSelector(selectCategory);
  const isLoading = useSelector(selectIsLoading);
  let categories = [
    { id: 1, categoryName: "best" },
    { id: 2, categoryName: "hot" },
    { id: 3, categoryName: "new" },
    { id: 4, categoryName: "top" },
  ];
  useEffect(() => {
    dispatch(fetchAllReddit(category));
  }, [category]);
  return (
    <div className="home-container">
      <CategoryDropdown
        categories={categories}
        categorySelector={selectCategory}
        categoryAction={setCategory}
      />
      <PostList posts={posts} loading={isLoading} />
    </div>
  );
};

export default Home;
