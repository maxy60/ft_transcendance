import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
// import { type } from "os";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
