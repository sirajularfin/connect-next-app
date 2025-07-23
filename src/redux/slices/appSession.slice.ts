import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

interface IAppSessionState {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

const initialState: IAppSessionState = {
  accessToken: '',
  refreshToken: '',
  tokenType: '',
};

export const appSessionSlice = createSlice({
  name: 'appSession',
  initialState,
  reducers: {
    setAuthTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.tokenType = action.payload.tokenType;
    },
    clearAuthTokens: state => {
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
  selectors: {
    selectAccessToken: state => state.accessToken,
    selectRefreshToken: state => state.refreshToken,
  },
});

export const { setAuthTokens, clearAuthTokens } = appSessionSlice.actions;
export const { selectAccessToken, selectRefreshToken } = appSessionSlice.selectors;