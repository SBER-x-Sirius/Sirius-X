import { createApi } from '@reduxjs/toolkit/query/react';
import { Schedule } from './types';
import { baseQuery } from '../../utils';

export const apiSchedule = createApi({
  reducerPath: 'apiSchedule',
  baseQuery,
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://212.193.62.200:3007/api/' }),
  endpoints: (builder) => ({
    getAllSchedule: builder.query<Schedule[], void>({
      query: () => '/schedule',
    })
  })
});

export const { useGetAllScheduleQuery } = apiSchedule;
