import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";

const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});

export default store;
