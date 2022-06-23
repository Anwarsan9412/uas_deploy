import { createSlice } from "@reduxjs/toolkit";
// import data from "../../utils/constants/provinces";

const globalsSlice = createSlice({
  name: "globals Slice",
  initialState: {
    globals: [],
  },
  reducers: {
    addGlobal(state, action) {
      state.globals = action.payload;
    },
    updateGlobal(state, action) {
      state.globals = action.payload;
    },
  },
});

const GlobalsReducer = globalsSlice.reducer;
const { addGlobal, updateGlobal } = globalsSlice.actions;

export default GlobalsReducer;
export { addGlobal, updateGlobal };
