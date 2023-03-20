import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/// Current State for the APP before loading
const initialState = {
  posts: [],
  searchResults: [],
  query: "",
  isLoading: true,
  postIsLoading: true,
  error: null,
  fullPostInfo: null,
};

// Functions for Fetching Reddit API

export const searchRedditPosts = createAsyncThunk(
  "posts/searchRedditPosts",
  async (term) => {
    const URL = `https://www.reddit.com/search.json?q=${term}`;
    const response = await axios.get(URL);
    return response.data.data.children;
  }
);

export const fetchAllReddit = createAsyncThunk(
  "posts/fetchAllReddit",
  async () => {
    const URL = `https://www.reddit.com/r/all.json?sr_detail=1`;
    const response = await axios.get(URL);
    return response.data.data.children;
  }
);

export const fetchFullPost = createAsyncThunk(
  "posts/fetchFullPost",
  async ({ subreddit, id, title }) => {
    const URL = `https:/www.reddit.com/r/${subreddit}/comments/${id}/${title}.json`;
    const response = await axios.get(URL);
    const data = response.data[0].data.children[0].data;
    return data;
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPostIsLoading: (state, action) => {
      state.postIsLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRedditPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchRedditPosts.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading = false;
      })
      .addCase(searchRedditPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchAllReddit.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllReddit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchAllReddit.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchFullPost.pending, (state) => {
        state.postIsLoading = true;
        state.error = null;
      })
      .addCase(fetchFullPost.fulfilled, (state, action) => {
        state.fullPostInfo = action.payload;
        state.postIsLoading = false;
      });
  },
});
/// Selectors
export const { setQuery, setPostIsLoading } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const selectAllSearchResults = (state) => state.posts.searchResults;
export const selectQuery = (state) => state.posts.query;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectFullPost = (state) => state.posts.fullPostInfo;
export const selectPostIsLoading = (state) => state.posts.postIsLoading;
// Reducer
export default postsSlice.reducer;
