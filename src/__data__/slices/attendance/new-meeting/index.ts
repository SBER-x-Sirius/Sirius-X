import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type newMeetingState = {
  groups: string[];
  teachers: string[];
};

const initialState: newMeetingState = {
  groups: [],
  teachers: []
};

const newMeetingSlice = createSlice({
  name: 'newMeetingSlice',
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<string[]>) => {
      state.groups = action.payload;
    },
    setTeachers: (state, action: PayloadAction<string[]>) => {
      state.teachers = action.payload;
    },
    clearAuth: () => {
      return { ...initialState };
    }
  }
});

export const { setGroups, setTeachers, clearAuth } = newMeetingSlice.actions;
export const newMeetingReducer = newMeetingSlice.reducer;
