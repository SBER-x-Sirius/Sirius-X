import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@ijl/cli';

export const workflowApi = createApi({
  reducerPath: 'workflowApi',
  baseQuery: fetchBaseQuery({ baseUrl: getConfigValue('sirius-x.attendance') }),
  endpoints: (build) => ({
    workflowApiGateway: build.mutation<any, any>({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ cmd, name, ...patch }) => ({
        url: `/workflow?cmd=${cmd}&name=${name}`,
        method: 'POST',
        body: {},
      }),
    })
  })
});

export const { useWorkflowApiGatewayMutation } = workflowApi;
