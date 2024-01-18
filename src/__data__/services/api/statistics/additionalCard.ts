import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configApi } from '../../../../configs/config-api';

export const additionalCard = createApi({
  reducerPath: 'additionalCard',
  baseQuery: fetchBaseQuery({ baseUrl: configApi.baseStatisticsAPI }),
  endpoints: (builder) => ({
    getDailyAttendance: builder.query<string, void>({
      query: () => 'students/dailyAttendance',
    }),
    getAttendancePerWeek: builder.query<{message:number[],success:boolean}, void>({
      query: () => 'students/attendancePerWeek',
    }),
  })
});

export const { useGetDailyAttendanceQuery, useGetAttendancePerWeekQuery } = additionalCard;
