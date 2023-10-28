import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { attendanceApi } from './services/api/attendance/user';
import { apiSchedule } from './services/api/schedule/schedule.api';
import { apiScheduleGroup } from './services/api/schedule/group.api';

const rootReducer = combineReducers({
  [attendanceApi.reducerPath]: attendanceApi.reducer,
  [apiSchedule.reducerPath]: apiSchedule.reducer,
  [apiScheduleGroup.reducerPath]: apiScheduleGroup.reducer,
});

const apiMiddleware = [attendanceApi.middleware, apiSchedule.middleware, apiScheduleGroup.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

setupListeners(store.dispatch);