import { configureStore } from '@reduxjs/toolkit';

import baseApi from '@/api/baseApi';
import { appSessionSlice } from './slices/appSession.slice';
import { authSlice } from './slices/auth.slice';
import { profileSlice } from './slices/profile.slice';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSessionSlice.name]: appSessionSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
