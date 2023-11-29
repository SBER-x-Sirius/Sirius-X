import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { attendanceApi } from './services/api/attendance/user';
import { apiSchedule } from './services/api/schedule/schedule.api';
import { apiScheduleGroup } from './services/api/schedule/group.api';
import { filterReducer } from './slices/schedule/filters';
import { apiUser } from './services/api/schedule/user.api';

const rootReducer = combineReducers({
  [attendanceApi.reducerPath]: attendanceApi.reducer,
  [apiSchedule.reducerPath]: apiSchedule.reducer,
  [apiUser.reducerPath]: apiUser.reducer,
  [apiScheduleGroup.reducerPath]: apiScheduleGroup.reducer,
  filters: filterReducer
});

const apiMiddleware = [
  attendanceApi.middleware,
  apiSchedule.middleware,
  apiScheduleGroup.middleware,
  apiUser.middleware
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

setupListeners(store.dispatch);
