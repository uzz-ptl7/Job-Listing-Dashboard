// src/redux/jobsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    setJobs: (state, action) => {
      return action.payload;
    },
  },
});

export const { setJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
