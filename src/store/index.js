import { configureStore } from "@reduxjs/toolkit";
import GlobalsReducer from "../features/GlobalsSlice";
import ProvincesReducer from "../features/ProvincesSlice";

const store = configureStore({
  reducer: {
    globals: GlobalsReducer,
    provinces: ProvincesReducer,
  },
});

export default store;
