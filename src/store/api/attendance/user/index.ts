import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetUser } from '../types';

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://attendance.com/api/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<GetUser[], void>({
      query: () => `attendance/users`,
    }),
  }),
});

export const { useGetAllUsersQuery } = attendanceApi;
