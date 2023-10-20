import { createApi } from '@reduxjs/toolkit/query/react';
import { Group } from './types';
import { baseQuery } from '../../utils';

export const apiScheduleGroup = createApi({
  reducerPath: 'apiScheduleGroup',
  baseQuery,
  endpoints: (builder) => ({
    getAllGroup: builder.query<Group[], void>({
      query: () => '/group'
    })
  })
});

export const { useGetAllGroupQuery } = apiScheduleGroup;
