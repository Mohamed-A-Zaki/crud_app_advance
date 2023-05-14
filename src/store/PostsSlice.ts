import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type PostType = {
  id: number;
  title: string;
  description: string;
};

type InitialState = {
  posts: PostType[];
  post: PostType | null;
  loading: boolean;
  error: null | string;
};

const initialState: InitialState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await axios.get("http://localhost:3000/posts");
  return data;
});

export const getPost = createAsyncThunk("posts/getPost", async (id: number) => {
  const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
  return data;
});

export const insretPost = createAsyncThunk(
  "posts/insretPost",
  async (post: Omit<PostType, "id">) => {
    const { data } = await axios.post("http://localhost:3000/posts", post);
    return data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: number) => {
    const { data } = await axios.delete(`http://localhost:3000/posts/${id}`);
    return data;
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (post: PostType) => {
    const { data } = await axios.patch(
      `http://localhost:3000/posts/${post.id}`,
      post
    );
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
      // get one post
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.post = payload;
      })
      .addCase(getPost.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      })
      // insert post
      .addCase(insretPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(insretPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts.push(payload);
      })
      .addCase(insretPost.rejected, (state, { error }) => {
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
      })
      // edit post
      .addCase(editPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(editPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.post = payload;
      })
      .addCase(editPost.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      });
  },
});

export default PostsSlice.reducer;
