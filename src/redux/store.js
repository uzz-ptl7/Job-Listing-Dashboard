// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsReducer"; // Make sure this is the correct path

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
