export const API_URLS = {
  AUTH: {
    postLogin: '/api/login',
    postRegister: '/api/register',
    postRefreshToken: '/api/token',
    postLogout: '/api/logout',
  },
  USER_PROFILE: {
    getProfile: '/api/profile',
    putUpdateProfile: '/api/profile/update',
  },
  MESSAGING: {
    getConversations: '/api/conversations',
    getChatMessages: (conversationId: string) =>
      `/api/conversations/${conversationId}/messages`,
  },
};
