import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetUser } from '../types';
import { getConfigValue } from '@ijl/cli';

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<GetUser[], void>({
      query: () => 'attendance/users'
    })
  })
});

export const { useGetAllUsersQuery } = attendanceApi;
