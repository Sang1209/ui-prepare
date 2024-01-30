import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FilterState {
  categories: string[];
  sort: string;
}

const initialState: FilterState = {
  categories: [],
  sort: 'New'
}

export default createSlice({
  name: 'filters',
  initialState,
  reducers: {
    categoryFilterChange: (state, action: PayloadAction<string>) => {
      const categoryIndex = state.categories.findIndex((category) => category === action.payload);

      if (categoryIndex) {
        state.categories.splice(categoryIndex, 1);
      } else {
        state.categories.push(action.payload);
      }
    }
  }
})