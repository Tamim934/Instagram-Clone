import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
  searchModal: false,
  messageModal:false,
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
   handleChangeSearch : (state, action) => {
      state.searchModal = action.payload
    }
  },
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
// export const { } =
//   todosSlice.actions;

export const {handleChangeSearch} = todosSlice.actions

export default todosSlice.reducer;