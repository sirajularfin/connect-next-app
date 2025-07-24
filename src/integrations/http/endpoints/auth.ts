import { AuthTokenSchemaType } from '@/lib/validations/auth-token.schema';
import { LoginUserSchemaType } from '@/lib/validations/login-user.schema';
import { RegisterUserSchemaType } from '@/lib/validations/register-user.schema';
import { UserAuthResponseSchemaType } from '@/lib/validations/user-auth-response.schema';
import baseApi from '../baseApi';
import { AuthServiceUrls, UserSessionUrls } from '../types';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    postLogin: builder.mutation<AuthTokenSchemaType, LoginUserSchemaType>({
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
      UserAuthResponseSchemaType,
      RegisterUserSchemaType
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
