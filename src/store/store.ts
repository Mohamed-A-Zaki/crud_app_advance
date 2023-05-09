import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./PostsSlice";

const store = configureStore({
  reducer: {
    posts: PostsReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
