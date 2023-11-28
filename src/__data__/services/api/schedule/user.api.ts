import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './types';
import { configApi } from '../../../../configs/config-api';

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({ baseUrl: configApi.baseScheduleAPI }),
  endpoints: (builder) => ({
    getTeacherOrGroup: builder.query<User[], string>({
      query: (tab) => `/user/getTeacherOrGroup?tab=${tab}`
    })
  })
});

export const { useGetTeacherOrGroupQuery } = apiUser;
