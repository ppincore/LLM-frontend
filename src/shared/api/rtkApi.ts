import { triggerLogoutEvent } from '../../entities/User/model/event/logout';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import type { FetchBaseQueryErrorCustom } from '../types/api';
import { API_TAGS } from './const';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../const/browserStorage';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    triggerLogoutEvent();
  }
  return result;
};


export const rtkApi = createApi({
  reducerPath: 'api',
  tagTypes: Object.values(API_TAGS),
  baseQuery: baseQueryWithReauth as BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryErrorCustom,
    object,
    FetchBaseQueryMeta
  >,
  endpoints: (builder) => ({}),
});
