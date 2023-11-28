import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersState = {
  classTypeFilter: string[];
};

const initialState: FiltersState = {
  classTypeFilter: []
};

const filtersSlice = createSlice({
  name: 'scheduleFilters',
  initialState,
  reducers: {
    setClassTypeFilter: (state, action: PayloadAction<string[]>) => {
      state.classTypeFilter = action.payload;
    }
  }
});

export const { setClassTypeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
