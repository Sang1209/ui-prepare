import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";

interface FilterState {
  categories: string[];
  sort: string;
  search: string;
}

const initialState: FilterState = {
  categories: [],
  sort: 'New',
  search: ''
}

export default createSlice({
  name: 'filters',
  initialState,
  reducers: {
    categoryFilterChange: (state, action: PayloadAction<string>) => {
      const categoryIndex = state.categories.findIndex((category) => category === action.payload);

      if (categoryIndex < 0) {
        state.categories.push(action.payload);
      } else {
        state.categories.splice(categoryIndex, 1);
      }
    },
    categoryFilterRemove: (state, action: PayloadAction<string>) => {
      const categoryIndex = state.categories.findIndex((category) => category === action.payload);
      state.categories.splice(categoryIndex, 1);
    },
    navFilterHandle: (state, action: PayloadAction<string>) => {
      state.categories.length = 0;
      state.categories.push(action.payload);
      state.sort = initialState.sort;
    },
    sortFilterChange: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    searchFilterChange: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  }
})