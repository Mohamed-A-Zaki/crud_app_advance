import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isLogin: boolean;
  error: string;
};

const initialState: InitialState = {
  isLogin: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state) => {
      state.isLogin = true;
      state.error = "";
    },
    Logout: (state) => {
      state.isLogin = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { Login, Logout, setError } = authSlice.actions;

export default authSlice.reducer;
