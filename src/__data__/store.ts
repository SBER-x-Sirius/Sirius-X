import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { attendanceGroupsApi } from './services/api/attendance/group';
import { attendanceTeachersApi } from './services/api/attendance/teacher';
import { apiSchedule } from './services/api/schedule/schedule.api';
import { apiScheduleGroup } from './services/api/schedule/group.api';
import { filterReducer } from './slices/schedule/filters';

const rootReducer = combineReducers({
  [attendanceGroupsApi.reducerPath]: attendanceGroupsApi.reducer,
  [attendanceTeachersApi.reducerPath]: attendanceTeachersApi.reducer,
  [apiSchedule.reducerPath]: apiSchedule.reducer,
  [apiScheduleGroup.reducerPath]: apiScheduleGroup.reducer,
  filters: filterReducer
});

const apiMiddleware = [attendanceGroupsApi.middleware, attendanceTeachersApi.middleware, apiSchedule.middleware, apiScheduleGroup.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

setupListeners(store.dispatch);
