import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Schedule } from './types';
import { configApi } from '../../../../configs/config-api';

export const apiSchedule = createApi({
  reducerPath: 'apiSchedule',
  baseQuery: fetchBaseQuery({ baseUrl: configApi.baseScheduleAPI }),
  endpoints: (builder) => ({
    getAllSchedule: builder.query<Schedule[], never>({
      query: () => '/schedule',
    }),
    getScheduleById: builder.query<Schedule, string>({
      query: scheduleId => `/schedule/${scheduleId}`
    })
  })
});

export const { useGetAllScheduleQuery, useGetScheduleByIdQuery } = apiSchedule;