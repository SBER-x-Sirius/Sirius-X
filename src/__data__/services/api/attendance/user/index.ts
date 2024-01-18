import { createApi } from '@reduxjs/toolkit/query/react';
import { AttendanceUser } from '../../../../../@types/attendance/user';
import { attendanceBaseQuery } from '../../../../../utils/attendance/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: attendanceBaseQuery,
  endpoints: (builder) => ({
    getAllUsers: builder.query<AttendanceUser, void>({
      query: () => '/users'
    }),
    getAllTeachers: builder.query<AttendanceUser[], void>({
      query: () => ({
        url: '/teachers'
      })
    }),
    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: 'DELETE',
      }),
    }),
  })
});

export const { useGetAllUsersQuery, useGetAllTeachersQuery, useDeleteUserMutation } = userApi;
