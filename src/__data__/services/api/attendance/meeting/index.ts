import { createApi } from '@reduxjs/toolkit/query/react';
import { attendanceBaseQuery } from '../../../../../utils/attendance/api';
import { newMeetingState } from '../../../../slices/attendance/new-meeting';

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
    })
  })
});

export const { useCreateMeetingMutation } = meetingApi;
