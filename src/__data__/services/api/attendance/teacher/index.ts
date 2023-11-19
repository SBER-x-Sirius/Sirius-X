import { getConfigValue } from '@ijl/cli';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetTeachersResponse } from '../../../../../@types/api/attendance/teacher/types';

const getAuthToken = () => {
  return localStorage.getItem('attendanceAccessToken');
};

export const attendanceTeachersApi = createApi({
  reducerPath: 'attendanceTeachersApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (builder) => ({
    getTeachers: builder.query<GetTeachersResponse, void>({
      query: () => ({
        url: '/teachers',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        }
      })
    })
  })
});

export const { useGetTeachersQuery } = attendanceTeachersApi;
