// services/api/modules/authApi.ts
import { mainApi } from "../api/mainApi";

const injectedAuthApi = mainApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body: body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body: body,
      }),
    }),

    getUser: builder.query({
      query: () => '/auth/user',
    }),
  }),
});

export const { useLoginMutation,useRegisterMutation, useGetUserQuery } = injectedAuthApi;
