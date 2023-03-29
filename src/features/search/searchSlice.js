import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchResults: [],
  query: "",
  error: null,
  searchCategory: "relevance",
  searchIsLoading: true,
};

export const searchRedditPosts = createAsyncThunk(
  "posts/searchRedditPosts",
  async (searchData) => {
    const { query, category } = searchData;
    const URL = `https://www.reddit.com/search.json?q=${query}&sr_detail=1&sort=${category}`;
    const response = await axios.get(URL);
    return response.data.data.children;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRedditPosts.pending, (state) => {
        state.searchIsLoading = true;
        state.error = null;
      })
      .addCase(searchRedditPosts.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.searchIsLoading = false;
      })
      .addCase(searchRedditPosts.rejected, (state) => {
        state.searchIsLoading = false;
        state.error = true;
      });
  },
});

// Selectors
export const { setQuery, setSearchCategory } = searchSlice.actions;

export const selectAllSearchResults = (state) => state.search.searchResults;
export const selectQuery = (state) => state.search.query;
export const selectSearchIsLoading = (state) => state.search.searchIsLoading;
export const selectSearchCategory = (state) => state.search.searchCategory;

// Reducer
export default searchSlice.reducer;
