import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersState = {
  classTypeFilter: string[];
  inputFilterGroup: string;
  inputFilterTeacher: string;
};

const initialState: FiltersState = {
  classTypeFilter: [],
  inputFilterGroup: '',
  inputFilterTeacher: ''
};

const filtersSlice = createSlice({
  name: 'scheduleFilters',
  initialState,
  reducers: {
    setClassTypeFilter: (state, action: PayloadAction<string[]>) => {
      state.classTypeFilter = action.payload;
    },
    setInputFilter: (state, action: PayloadAction<any>) => {
      if (action.payload.isTeacher) {
        state.inputFilterTeacher = action.payload.inputValue;
      } else {
        state.inputFilterGroup = action.payload.inputValue;
      }
    },
    setClearInput: (state) => {
      state.inputFilterTeacher = '';
      state.inputFilterGroup = '';
    }
  }
});

export const { setClassTypeFilter, setInputFilter, setClearInput } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
