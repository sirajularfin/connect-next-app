import baseApi from '../baseApi';
import { TokenServiceUrls } from '../types';

export const tokenApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    postRefreshToken: builder.mutation<void, void>({
      query: body => ({
        url: TokenServiceUrls.ROOT + TokenServiceUrls.REFRESH_TOKEN,
        method: 'POST',
        data: body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { usePostRefreshTokenMutation, endpoints: tokenApiEndpoints } =
  tokenApi;
