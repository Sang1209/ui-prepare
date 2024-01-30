import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "@/lib/features/filters/FilterSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer
  }
})

export default store;