import { createSlice } from "@reduxjs/toolkit";
import { foodListData } from "../action";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(foodListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(foodListData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(foodListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
