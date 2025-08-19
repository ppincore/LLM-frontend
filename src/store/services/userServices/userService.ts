import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TLoginData } from './types';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (loginData: TLoginData) => ({
        url: 'login',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
});

const useLoginUser = userApi.useLoginUserMutation;

export { useLoginUser };
