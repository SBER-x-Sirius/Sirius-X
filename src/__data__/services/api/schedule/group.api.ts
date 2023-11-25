import { createApi } from '@reduxjs/toolkit/query/react';
import { Group } from './types';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { configApi } from '../../../../configs/config-api';

export const apiScheduleGroup = createApi({
  reducerPath: 'apiScheduleGroup',
  baseQuery: fetchBaseQuery({ baseUrl: configApi.baseScheduleAPI }),
  endpoints: (builder) => ({
    getAllGroup: builder.query<Group[], never>({
      query: () => '/group'
    }),
    getGroupById: builder.query<Group, string>({
      query: groupName => `/group/${groupName}`
    }),
  })
});

export const { useGetAllGroupQuery, useGetGroupByIdQuery } = apiScheduleGroup;
