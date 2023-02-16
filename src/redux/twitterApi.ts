import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../types/types';

export const  twitterApi = createApi({
  reducerPath: 'twitterApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:4000/api',
    prepareHeaders: (headers: Headers) => {
      return headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2VhMGFkN2Q5NWE2N2NlMjkwMzhjYTQiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3NjM2Nzc4NiwiZXhwIjoxNjc2NTQwNTg2fQ.Haq0S_n_-NZzDO8petZOiSPsli9xc3VREk7gVhpNwKY')
    }
  }),
  endpoints: (builder) => ({
    getMe: builder.query<IUser, void>({
      query: () => '/profile/me'
    }),

    login: builder.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      })
    }),
  })
})

export const { useGetMeQuery, useLoginMutation } = twitterApi;