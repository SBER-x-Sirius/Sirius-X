import { getConfigValue } from '@ijl/cli';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateMeetingResponse } from '../../../../../@types/api/attendance/meeting/types';
import { CreateMeetingData } from './types';

const getAuthToken = () => {
  return localStorage.getItem('attendanceAccessToken');
};

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (builder) => ({
    createMeeting: builder.mutation<CreateMeetingResponse, CreateMeetingData>({
      query: (createMeetingData) => ({
        url: '/meeting',
        method: 'POST',
        body: {
          title: createMeetingData.title,
          groupIds: createMeetingData.groupIds,
          teacherIds: createMeetingData.teacherIds
        },
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        }
      })
    })
  })
});

export const { useCreateMeetingMutation } = attendanceApi;
