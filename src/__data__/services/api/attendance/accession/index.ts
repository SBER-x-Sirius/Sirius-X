import { getConfigValue } from '@ijl/cli';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AccessionResponse } from '../../../../../@types/attendance/accession/types';
import { AccessionData } from './types';

const getAuthToken = () => {
  return localStorage.getItem('attendanceAccessToken');
};

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (builder) => ({
    accession: builder.mutation<AccessionResponse, AccessionData>({
      query: (accessionData) => ({
        url: '/attending',
        method: 'POST',
        body: {
          meetingId: accessionData.meetingId
        },
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        }
      })
    })
  })
});

export const { useAccessionMutation } = attendanceApi;
