import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Message } from './types'
import { configApi } from '../../../../configs/config-api';

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: fetchBaseQuery({ baseUrl: configApi.baseStatisticsAPI }),
  endpoints: (builder) => ({
    getStudentsByCourse: builder.query<Message, number>({
      query: (courseNumber) => `student/course?courseNumber=${courseNumber}`,
    })
  })
});

export const { useGetStudentsByCourseQuery } = statisticsApi;