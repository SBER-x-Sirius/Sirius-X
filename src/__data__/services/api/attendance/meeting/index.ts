import { createApi } from '@reduxjs/toolkit/query/react';
import { attendanceBaseQuery } from '../../../../../utils/attendance/api';
import { newMeetingState } from '../../../../slices/attendance/new-meeting';
import { AttendanceMeeting } from '../../../../../@types/attendance/meeting';

export const meetingApi = createApi({
  reducerPath: 'meetingApi',
  baseQuery: attendanceBaseQuery,
  endpoints: (builder) => ({
    createMeeting: builder.mutation<{ meetingId: string }, newMeetingState>({
      query: (meeting) => ({
        url: '/meeting',
        method: 'POST',
        body: {
          groupIds: meeting.groups,
          teacherIds: meeting.teachers
        }
      })
    }),
    getMeeting: builder.query<AttendanceMeeting, string>({
      query: (meetingId) => ({
        url: `/meeting/${meetingId}`,
        method: 'GET'
      })
    })
  })
});

export const { useCreateMeetingMutation, useGetMeetingQuery } = meetingApi;
