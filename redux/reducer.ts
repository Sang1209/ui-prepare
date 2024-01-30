import {combineReducers} from "redux";
import filterSlice from "@/redux/features/filter-slice";

const rootReducer = combineReducers({
  filters: filterSlice
})

