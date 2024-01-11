import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiScheduleGroup } from './services/api/schedule/group.api';
import { apiSchedule } from './services/api/schedule/schedule.api';
import { apiUser } from './services/api/schedule/user.api';
import { filterReducer } from './slices/schedule/filters';

import { authApi } from './services/api/attendance/auth';
import { groupsAPI } from './services/api/attendance/group';
import { meetingApi } from './services/api/attendance/meeting';
import { userApi } from './services/api/attendance/user';
import { newMeetingReducer } from './slices/attendance/new-meeting';
import { attendanceApi } from './services/api/attendance/accession';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [attendanceApi.reducerPath]: attendanceApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [meetingApi.reducerPath]: meetingApi.reducer,
  [groupsAPI.reducerPath]: groupsAPI.reducer,

  [apiSchedule.reducerPath]: apiSchedule.reducer,
  [apiUser.reducerPath]: apiUser.reducer,
  [apiScheduleGroup.reducerPath]: apiScheduleGroup.reducer,

  filters: filterReducer,
  newMeetingSlice: newMeetingReducer
});

const apiMiddleware = [
  userApi.middleware,
  authApi.middleware,
  attendanceApi.middleware,
  meetingApi.middleware,
  groupsAPI.middleware,

  apiSchedule.middleware,
  apiScheduleGroup.middleware,
  apiUser.middleware
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

setupListeners(store.dispatch);
