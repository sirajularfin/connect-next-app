import { http, HttpResponse } from 'msw';

export const conversationApiHandlers = [
  http.get('*/v1/api/conversations', () => {
    return HttpResponse.json([
      {
        id: 1,
        lastMessage: 'Hello!',
        lastActivity: '2023-12-01T00:00:00.000Z',
        participant: {
          id: 1,
          name: 'Test User',
          avatar: 'https://via.placeholder.com/150',
        },
      },
      {
        id: 2,
        lastMessage: 'Hi there!',
        lastActivity: '2023-12-01T00:00:00.000Z',
        participant: {
          id: 2,
          name: 'Another User',
          avatar: 'https://via.placeholder.com/150',
        },
      },
    ]);
  }),

  http.get('*/v1/api/conversations/:conversationId/messages', ({ params }) => {
    const { conversationId } = params;
    return HttpResponse.json([
      {
        id: 1,
        conversationId: conversationId,
        sender: {
          id: 1,
          name: 'Test User',
          avatar: 'https://via.placeholder.com/150',
        },
        content: 'Hello!',
        createdAt: '2023-12-01T00:00:00.000Z',
        isEdited: false,
        isDeleted: false,
        isRead: true,
      },
      {
        id: 2,
        conversationId: conversationId,
        sender: {
          id: 2,
          name: 'Another User',
          avatar: 'https://via.placeholder.com/150',
        },
        content: 'Hi there!',
        createdAt: '2023-12-01T00:00:00.000Z',
        isEdited: false,
        isDeleted: false,
        isRead: true,
      },
    ]);
  }),
];
