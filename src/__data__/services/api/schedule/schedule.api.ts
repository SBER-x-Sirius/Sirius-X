import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Schedule } from './types';
import { config } from '../../config';

export const apiSchedule = createApi({
  reducerPath: 'apiSchedule',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseScheduleAPI }),
  endpoints: (builder) => ({
    getAllSchedule: builder.query<Schedule[], void>({
      query: () => '/schedule',
    }),
    getScheduleById: builder.query<Schedule, string>({
      query: scheduleId => `/schedule/${scheduleId}`
    })
  })
});

export const { useGetAllScheduleQuery, useGetScheduleByIdQuery } = apiSchedule;
