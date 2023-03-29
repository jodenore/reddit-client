import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
import fullPostsReducer from "../features/fullpost/fullPostSlice";
import searchReducer from "../features/search/searchSlice";
export default configureStore({
  reducer: {
    posts: postsReducer,
    fullPost: fullPostsReducer,
    search: searchReducer,
  },
});
