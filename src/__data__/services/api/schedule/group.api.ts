import { createApi } from '@reduxjs/toolkit/query/react';
import { Group } from './types';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { config } from '../../config';

export const apiScheduleGroup = createApi({
  reducerPath: 'apiScheduleGroup',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseScheduleAPI }),
  endpoints: (builder) => ({
    getAllGroup: builder.query<Group[], void>({
      query: () => '/group'
    }),
    getGroupById: builder.query<Group, string>({
      query: groupName => `/group/${groupName}`
    }),
  })
});

export const { useGetAllGroupQuery, useGetGroupByIdQuery } = apiScheduleGroup;
