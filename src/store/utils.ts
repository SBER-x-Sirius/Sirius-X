import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from './config';

export const baseQuery = fetchBaseQuery({
  baseUrl: config.baseScheduleAPI,
  credentials: 'include',
  mode: 'cors',
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem('token');

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
      headers.set('Content-Type', 'application/json');
    }
    return headers;
  }
});


