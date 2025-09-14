import { http, HttpResponse } from 'msw';

import chatMessages from './data/chat-messages.json';
import conversationList from './data/conversation-list.json';
import userProfile from './data/user-profile.json';

export const handlers = [
  http.get('*/v1/api/conversations', () => {
    return HttpResponse.json(conversationList);
  }),

  http.get('*/v1/api/conversations/:conversationId/messages', ({ params }) => {
    const { conversationId } = params;
    const senderProfile = conversationList.conversations.find(
      convo => convo.id === Number(conversationId)
    )?.participant;
    return HttpResponse.json({
      sender: senderProfile,
      messages: chatMessages.messages.filter(
        message => message.conversationId === Number(conversationId)
      ),
    });
  }),

  http.get('*/v1/api/profile', () => {
    return HttpResponse.json(userProfile);
  }),
];
