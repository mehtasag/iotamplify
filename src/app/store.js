import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice/postSlice";
const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
