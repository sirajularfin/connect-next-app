import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  isLoggedIn?: boolean;
  activeUserId?: string;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  activeUserId: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setActiveUserId: (state, action) => {
      state.activeUserId = action.payload;
    },
    resetState: state => {
      state.activeUserId = '';
      state.isLoggedIn = false;
    },
  },
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectActiveUserId: state => state.activeUserId,
  },
});

export const { setActiveUserId, setIsLoggedIn } = authSlice.actions;
export const { selectActiveUserId, selectIsLoggedIn } = authSlice.selectors;
