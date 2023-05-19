import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  //   email: ,
  //   avatar: ,
  //   twoFactorEnabled: ,
  //   status: ,
  //   friendList: ,
  //   matchHistory: ,
  // ...
}

interface AuthState {
  token: string | null;
  user: User | null;
  status: "idle" | "logged_in";
}

const initialState: AuthState = {
  token: null,
  user: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
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
