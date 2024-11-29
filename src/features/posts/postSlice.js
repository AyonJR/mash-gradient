import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPi";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

// ? ( This is the actual fetch request by the async thunk , we can do it here but for the convention we we'll make all the api calls in a separate file ) (==> here the first parameter is the name , for the convenient we name it as like as the folder name "posts" then the actual name fetchposts ,  ==> second parameter goes for the api request which is on a different file)

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = getPosts();
  return posts;
});

// postSlice


// builder is the build in function for the asynchronous operation. action payload is the original action that will come after the dispatch .

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
