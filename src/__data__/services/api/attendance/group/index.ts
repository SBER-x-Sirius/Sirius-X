import { getConfigValue } from '@ijl/cli';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetGroupsResponse } from '../../../../../@types/api/attendance/group/types';

const getAuthToken = () => {
  return localStorage.getItem('attendanceAccessToken');
};

export const attendanceGroupsApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (builder) => ({
    getGroups: builder.query<GetGroupsResponse, void>({
      query: () => ({
        url: '/groups',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        }
      })
    })
  })
});

export const { useGetGroupsQuery } = attendanceGroupsApi;
