import { getConfigValue } from '@ijl/cli';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse } from '../../../../../@types/attendance/api/auth/types';
import { useAuth } from '../../../../../hooks/attendance/auth';
import { LoginData, RegistrationData } from './types';

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (builder) => ({
    registration: builder.mutation<AuthResponse, RegistrationData>({
      query: (registrationData) => ({
        url: '/auth/register',
        method: 'POST',
        body: {
          email: registrationData.email,
          lastname: registrationData.lastName,
          firstname: registrationData.firstName,
          middlename: registrationData.middleName,
          password: registrationData.password
        }
      }),
      transformResponse: (response: AuthResponse): AuthResponse => {
        const { initSetup } = useAuth();
        initSetup(response.newAccessToken, response.newRefreshToken);
        return response;
      }
    }),
    login: builder.mutation<AuthResponse, LoginData>({
      query: (loginData) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email: loginData.email,
          password: loginData.password
        }
      }),
      transformResponse: (response: AuthResponse): AuthResponse => {
        const { initSetup } = useAuth();
        initSetup(response.newAccessToken, response.newRefreshToken);
        return response;
      }
    })
  })
});

export const { useRegistrationMutation, useLoginMutation } = attendanceApi;
