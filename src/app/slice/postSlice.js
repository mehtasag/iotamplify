import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const postSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getPostId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getPostId } = postSlice.actions;
export const getPostId1 = (state) => state.post.value;

export default postSlice.reducer;
