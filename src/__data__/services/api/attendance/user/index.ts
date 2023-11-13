import { getConfigValue } from '@ijl/cli';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AttendanceUser } from '../../../../../@types/attendance/user';

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<AttendanceUser[], void>({
      query: () => 'attendance/users'
    })
  })
});

export const { useGetAllUsersQuery } = attendanceApi;
