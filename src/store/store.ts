import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { attendanceApi } from './api/attendance/user';

const rootReducer = combineReducers({
  [attendanceApi.reducerPath]: attendanceApi.reducer
});

const apiMiddleware = [attendanceApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

setupListeners(store.dispatch);
