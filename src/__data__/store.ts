import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { attendanceApi } from './services/api/attendance/user';
import { apiSchedule } from './services/api/schedule/schedule.api';
import { apiScheduleGroup } from './services/api/schedule/group.api';
import { statisticsApi } from './services/api/statistics';
import { filterReducer } from './slices/schedule/filters';

const rootReducer = combineReducers({
  [attendanceApi.reducerPath]: attendanceApi.reducer,
  [apiSchedule.reducerPath]: apiSchedule.reducer,
  [apiScheduleGroup.reducerPath]: apiScheduleGroup.reducer,
  [statisticsApi.reducerPath]: statisticsApi.reducer,
  filters: filterReducer
});

const apiMiddleware = [attendanceApi.middleware, apiSchedule.middleware, apiScheduleGroup.middleware, statisticsApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

setupListeners(store.dispatch);
