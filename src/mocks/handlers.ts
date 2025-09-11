import { http, HttpResponse } from 'msw';

import logger from '@/common/util/logger.util';
import chatMessages from './data/chat-messages.json';
import conversationList from './data/conversation-list.json';
import userProfile from './data/user-profile.json';

export const handlers = [
  http.get('*/v1/api/conversations', () => {
    return HttpResponse.json(conversationList);
  }),

  http.get('*/v1/api/conversations/:conversationId/messages', ({ params }) => {
    const { conversationId } = params;
    logger(`Conversation ID: ${conversationId}`);
    return HttpResponse.json(chatMessages);
  }),

  http.get('*/v1/api/profile', () => {
    return HttpResponse.json(userProfile);
  }),
];
