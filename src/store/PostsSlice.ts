import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type PostType = {
  id: number;
  title: string;
  description: string;
};

type InitialState = {
  posts: PostType[];
  loading: boolean;
  error: null | string;
};

const initialState: InitialState = {
  posts: [],
  loading: false,
  error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await axios.get("http://localhost:3000/posts");
  return data;
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: number) => {
    const { data } = await axios.delete(`http://localhost:3000/posts/${id}`);
    return data;
  }
);

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get posts
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })

      // delete post
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter((post) => post.id !== action.meta.arg);
      })
      .addCase(deletePost.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      });
  },
});

export default PostsSlice.reducer;
