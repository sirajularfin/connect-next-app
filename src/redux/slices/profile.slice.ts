import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProfileState {
  data:
    | {
        email: string;
        firstName: string;
        lastName: string;
        username: string;
      }
    | undefined;
}

const initialState: IProfileState = {
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfileState['data']>) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('PURGE', () => initialState);
  },
  selectors: {
    selectEmail: state => state.data?.email,
    selectFirstName: state => state.data?.firstName,
    selectLastName: state => state.data?.lastName,
    selectUsername: state => state.data?.username,
  },
});

export const { selectEmail, selectFirstName, selectLastName, selectUsername } =
  profileSlice.selectors;
