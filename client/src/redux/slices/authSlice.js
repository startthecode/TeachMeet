import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "auth_slice",
  initialState:true,
  reducers: {
    updateAuthStatus(currentState, { payload }) {},
  },
});

export let authReducer = authSlice.reducer;
export let { updateAuthStatus } = authSlice.actions;
