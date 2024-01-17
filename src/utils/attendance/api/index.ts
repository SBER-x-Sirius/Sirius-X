import { getConfigValue } from '@ijl/cli';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const attendanceBaseQuery = fetchBaseQuery({
  baseUrl: getConfigValue('sirius-x.attendance'),
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('attendanceAccessToken');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }
});
