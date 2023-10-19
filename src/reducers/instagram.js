import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
// export const { } =
//   todosSlice.actions;

export default todosSlice.reducer;
