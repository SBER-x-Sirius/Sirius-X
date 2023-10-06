import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { attendanceApi } from './services/api/attendance/user';
import { workflowApi } from './services/api/workflow';

const rootReducer = combineReducers({
  [attendanceApi.reducerPath]: attendanceApi.reducer,
  [workflowApi.reducerPath]: workflowApi.reducer
});

const apiMiddleware = [attendanceApi.middleware, workflowApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

setupListeners(store.dispatch);
