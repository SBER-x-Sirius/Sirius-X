import { createApi } from '@reduxjs/toolkit/query/react';
import { AttendanceGroup } from '../../../../../@types/attendance/group';
import { attendanceBaseQuery } from '../../../../../utils/attendance/api';

export const groupsAPI = createApi({
  reducerPath: 'groupsAPI',
  baseQuery: attendanceBaseQuery,
  endpoints: (builder) => ({
    getAllGroups: builder.query<AttendanceGroup[], void>({
      query: () => ({
        url: '/groups'
      })
    })
  })
});

export const { useGetAllGroupsQuery } = groupsAPI;
