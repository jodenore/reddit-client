import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  fullPostInfo: null,
  error: null,
  postIsLoading: true,
  comments: null,
  commentsIsLoading: true,
};

export const fetchFullPost = createAsyncThunk(
  "fullPost/fetchFullPost",
  async ({ subreddit, id, title }) => {
    const URL = `https:/www.reddit.com/r/${subreddit}/comments/${id}/${title}.json?raw_json=1`;
    const response = await axios.get(URL);
    const data = response.data[0].data.children[0].data;
    return data;
  }
);

export const fetchCurrentComments = createAsyncThunk(
  "fullPost/fetchCurrentComments",
  async ({ subreddit, id, title }) => {
    const URL = `https:/www.reddit.com/r/${subreddit}/comments/${id}/${title}.json?raw_json=1`;
    const response = await axios.get(URL);
    const data = response.data[1].data.children;
    return data;
  }
);

const fullPostSlice = createSlice({
  name: "fullPost",
  initialState,
  reducers: {
    setPostIsLoading: (state, action) => {
      state.postIsLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullPost.pending, (state) => {
        state.postIsLoading = true;
        state.error = null;
      })
      .addCase(fetchFullPost.fulfilled, (state, action) => {
        state.fullPostInfo = action.payload;
        state.postIsLoading = false;
      })
      .addCase(fetchCurrentComments.pending, (state) => {
        state.commentsIsLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsIsLoading = false;
      });
  },
});
export const { setPostIsLoading } = fullPostSlice.actions;
export const selectFullPost = (state) => state.fullPost.fullPostInfo;
export const selectPostIsLoading = (state) => state.fullPost.postIsLoading;
export const selectCommentsIsLoading = (state) =>
  state.fullPost.commentsIsLoading;

//Reducer
export default fullPostSlice.reducer;
