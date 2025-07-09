import { createSlice } from '@reduxjs/toolkit';

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
    resetTokens: state => {
      state.accessToken = '';
      state.refreshToken = '';
      state.tokenType = '';
    },
  },
  selectors: {
    selectAccessToken: state => state.accessToken,
    selectRefreshToken: state => state.refreshToken,
  },
});

export const { setAuthTokens, resetTokens } = appSessionSlice.actions;
export const { selectAccessToken, selectRefreshToken } =
  appSessionSlice.selectors;
