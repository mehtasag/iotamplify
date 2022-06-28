import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice/postSlice";
const store = configureStore({
  reducer: {
    searchTerm: postReducer,
  },
});

export default store;
