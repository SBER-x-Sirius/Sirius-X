import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { attendanceApi } from './api/attendance';

export const store = configureStore({
  reducer: {
    [attendanceApi.reducerPath]: attendanceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(attendanceApi.middleware),
});


setupListeners(store.dispatch);
