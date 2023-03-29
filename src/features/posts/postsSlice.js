import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/// Current State for the APP before loading
const initialState = {
  posts: [],
  searchResults: [],
  query: "",
  isLoading: true,
  error: null,
  selectedCategory: "best",
  searchCategory: "relevance",
};

// Functions for Fetching Reddit API

export const searchRedditPosts = createAsyncThunk(
  "posts/searchRedditPosts",
  async (searchData) => {
    const { query, category } = searchData;
    const URL = `https://www.reddit.com/search.json?q=${query}&sr_detail=1&sort=${category}`;
    const response = await axios.get(URL);
    return response.data.data.children;
  }
);

export const fetchAllReddit = createAsyncThunk(
  "posts/fetchAllReddit",
  async (category) => {
    const URL = `https://www.reddit.com/r/all/${
      category || "best"
    }.json?sr_detail=1`;
    const response = await axios.get(URL);
    return response.data.data.children;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
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
      });
  },
});
/// Selectors
export const { setQuery, setCategory, setSearchCategory } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const selectAllSearchResults = (state) => state.posts.searchResults;
export const selectQuery = (state) => state.posts.query;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectCategory = (state) => state.posts.selectedCategory;
export const selectSearchCategory = (state) => state.posts.searchCategory;

// Reducer
export default postsSlice.reducer;
