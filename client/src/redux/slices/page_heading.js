import { createSlice } from "@reduxjs/toolkit";
import { headings } from "../../constant/headings";

let initialState = {
  heading: headings.default,
};
let pageHeading = createSlice({
  name: "headings",
  initialState,
  reducers: {
    changeHeading(initialState, { payload }) {
      return { ...initialState, heading: payload };
    },
  },
});

export let pageHeadingReducer = pageHeading.reducer;
export let { changeHeading } = pageHeading.actions;
