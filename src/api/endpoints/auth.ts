import {
  ILoginRequest,
  ILoginResponse,
} from 'src/models/interfaces/login.interface';
import {
  IUserRegistrationRequest,
  IUserRegistrationResponse,
} from 'src/models/interfaces/userRegistration.interface';

import baseApi from '../baseApi';
import { AuthServiceUrls, UserSessionUrls } from '../types';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    postLogin: builder.mutation<ILoginResponse, ILoginRequest>({
      query: body => ({
        url: AuthServiceUrls.ROOT + AuthServiceUrls.LOGIN,
        method: 'POST',
        data: body,
      }),
    }),

    getLogout: builder.query<void, void>({
      query: body => ({
        url: UserSessionUrls.ROOT + UserSessionUrls.LOGOUT,
        method: 'GET',
        data: body,
      }),
    }),

    postRegistration: builder.mutation<
      IUserRegistrationResponse,
      IUserRegistrationRequest
    >({
      query: body => ({
        url: AuthServiceUrls.ROOT + AuthServiceUrls.REGISTRATION,
        method: 'POST',
        data: body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  usePostLoginMutation,
  useLazyGetLogoutQuery,
  usePostRegistrationMutation,
  endpoints: authApiEndpoints,
} = authApi;
