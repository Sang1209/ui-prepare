import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "@/redux/features/filter-slice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;