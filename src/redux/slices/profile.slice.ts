import { createSlice } from '@reduxjs/toolkit';

import { UserProfile } from '@/common/types/profile.type';
import { profileApiEndpoints } from '@/integrations/http/endpoints/profile.api';

interface IProfileState {
  data?: UserProfile;
}

const initialState: IProfileState = {
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    const { matchFulfilled, matchPending, matchRejected } =
      profileApiEndpoints.getProfile;
    builder.addCase('PURGE', () => initialState);
    builder.addMatcher(matchPending || matchRejected, state => {
      state.data = undefined;
    });
    builder.addMatcher(matchFulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
  selectors: {
    selectLoggedInUserProfile: (state: IProfileState) => state.data,
  },
});

export const { selectLoggedInUserProfile } = profileSlice.selectors;
