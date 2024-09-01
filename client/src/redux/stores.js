import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { pageHeadingReducer } from "./slices/page_heading";

export let reduxStore = configureStore({
  reducer: {
    authReducer,
    pageHeadingReducer,
  },
});

// get state of all redux states
export let getAuthState = (val) => val.authReducer;
export let getHeadingState = (val) => val.pageHeadingReducer;
