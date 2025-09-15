import { UserProfile } from '@/common/types/profile.type';
import { chatApi } from '@/integrations/http/endpoints/chat.api';
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

interface IConversationState {
  conversations: Array<{
    id: number;
    participant: UserProfile;
    lastMessage: string;
  }>;
}

const initialState: IConversationState = {
  conversations: [],
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    clearConversations: state => {
      state.conversations = [];
    },
  },
  extraReducers: builder => {
    const { getConversationList } = chatApi.endpoints;
    builder.addCase(PURGE, () => initialState);
    builder
      .addMatcher(
        getConversationList.matchPending || getConversationList.matchRejected,
        state => {
          state.conversations = [];
        }
      )
      .addMatcher(getConversationList.matchFulfilled, (state, action) => {
        state.conversations = action.payload.conversations ?? [];
      });
  },
  selectors: {
    selectConversations: state => state.conversations,
  },
});
