import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const attendanceApi = createApi({
  reducerPath: 'attendanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getattendanceByName: builder.query<any, string>({
      query: (name) => `attendance/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetattendanceByNameQuery } = attendanceApi;
