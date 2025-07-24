import baseApi from '../baseApi';
import { UserServiceUrls } from '../types';

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<void, void>({
      query: body => ({
        url: UserServiceUrls.ROOT + UserServiceUrls.ALL_USERS,
        method: 'GET',
        data: body,
      }),
    }),

    getUserById: builder.query<void, void>({
      query: body => ({
        url: UserServiceUrls.ROOT + UserServiceUrls.USER_BY_ID,
        method: 'GET',
        data: body,
      }),
    }),

    getActiveUserProfile: builder.query<void, void>({
      query: body => ({
        url: UserServiceUrls.ROOT + UserServiceUrls.USER_BY_ID,
        method: 'GET',
        data: body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyGetActiveUserProfileQuery,
  useLazyGetUserByIdQuery,
  useLazyGetUsersQuery,
  endpoints: userApiEndpoints,
} = userApi;
