import { configureStore } from '@reduxjs/toolkit';

import baseApi from '@/integrations/http/baseApi';
import { appSessionSlice } from '@/redux/slices/appSession.slice';
import { authSlice } from '@/redux/slices/auth.slice';
import { conversationSlice } from '@/redux/slices/conversation.slice';
import { profileSlice } from '@/redux/slices/profile.slice';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSessionSlice.name]: appSessionSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
    [conversationSlice.name]: conversationSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
