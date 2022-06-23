import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provincesSlice = createSlice({
  name: "provinces Slice",
  initialState: {
    provinces: data,
  },
  reducers: {
    addProvinces(state, action) {
      state.provinces = action.payload;
    },
    updateProvinces(state, action) {
      state.provinces.provinces.map((data) => {
        if (
          data.kota === action.payload.kota &&
          action.payload.status === "kasus"
        ) {
          data.kasus = action.payload.total;
        } else if (
          data.kota === action.payload.kota &&
          action.payload.status === "sembuh"
        ) {
          data.sembuh = action.payload.total;
        } else if (
          data.kota === action.payload.kota &&
          action.payload.status === "dirawat"
        ) {
          data.dirawat = action.payload.total;
        } else if (
          data.kota === action.payload.kota &&
          action.payload.status === "meninggal"
        ) {
          data.meninggal = action.payload.total;
        }
      });
    },
  },
});

const ProvincesReducer = provincesSlice.reducer;
const { addProvinces, updateProvinces } = provincesSlice.actions;

export default ProvincesReducer;
export { addProvinces, updateProvinces };
