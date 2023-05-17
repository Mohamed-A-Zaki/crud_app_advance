import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./PostsSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    posts: PostsReducer,
    auth: authReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
