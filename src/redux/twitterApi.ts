import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITweet } from '../components/Tweet/Tweet.types';
import { IUser } from '../types/types';
import getHeaders from '../utils/tokenUtils';

export const  twitterApi = createApi({
  reducerPath: 'twitterApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:4000/api',
    prepareHeaders: (headers: Headers) => getHeaders(headers),
  }),
  tagTypes: ['Tweets'],

  endpoints: (builder) => ({
    getMe: builder.query<IUser, void>({
      query: () => '/profile/me'
    }),

    getAllTweets: builder.query<{tweets: ITweet[]}, void>({
      query: () => '/tweet/all',
      providesTags: ['Tweets'],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('app_token', data.token);
          localStorage.setItem('user_id', data.userId)
        } catch (err) {
          console.log(err)
        }
      },
    }),

    createTweet: builder.mutation({
      query: (data: FormData) => ({
        url: 'tweet',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (err) {
          console.log(err)
        }
      },
      invalidatesTags: ['Tweets'],
    }),
  })
})

export const { useGetMeQuery, useGetAllTweetsQuery, useLoginMutation, useCreateTweetMutation } = twitterApi;