import {
  ChatMessagesResponse,
  ConversationListResponse,
} from '@/common/types/chat.type';
import baseApi from '../baseApi';
import { ChatServiceUrls } from '../types';

export const chatApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getConversationList: builder.query<ConversationListResponse, void>({
      query: () => ({
        url: `${ChatServiceUrls.ROOT}${ChatServiceUrls.CONVERSATIONS_LIST}`,
        method: 'GET',
      }),
    }),
    getChatMessages: builder.query<
      ChatMessagesResponse,
      { conversationId: string }
    >({
      query: ({ conversationId }) => ({
        url: `${ChatServiceUrls.ROOT}${ChatServiceUrls.CHAT_MESSAGES.replace(':conversationId', conversationId)}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetConversationListQuery,
  useGetChatMessagesQuery,
  endpoints: chatApiEndpoints,
} = chatApi;
