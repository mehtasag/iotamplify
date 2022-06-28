import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const postSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    getSearchTerm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getSearchTerm } = postSlice.actions;
export const getSearchTermValue = (state) => state.searchTerm.value;

export default postSlice.reducer;
