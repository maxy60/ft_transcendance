import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState = {
  token: null,
  user: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.status = "logged_in";
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.status = "idle";
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
