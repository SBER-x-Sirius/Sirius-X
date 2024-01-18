import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configApi } from '../../../../configs/config-api';

export const chartAPI = createApi({
  reducerPath: 'chartAPI',
  baseQuery: fetchBaseQuery({ baseUrl: configApi.baseStatisticsAPI }),
  endpoints: (builder) => ({
    getEChart: builder.query<{message:number[],success:boolean}, void>({
      query: () => 'students/quantityStudentCourse',
    }),
    getLinneChart: builder.query<{message:{course1:number[], course2:number[], course3:number[]},success:boolean}, void>({
      query: () => 'students/attendanceСhart',
    }),
  })
});

export const { useGetEChartQuery, useGetLinneChartQuery } = chartAPI;
