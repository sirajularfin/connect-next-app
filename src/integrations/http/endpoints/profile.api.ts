import { UserProfile } from '@/common/types/profile.type';
import baseApi from '../baseApi';
import { ProfileServiceUrls } from '../types';

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: ProfileServiceUrls.ROOT + ProfileServiceUrls.PROFILE,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetProfileQuery, endpoints: profileApiEndpoints } =
  profileApi;
