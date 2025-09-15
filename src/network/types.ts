export enum NetworkRoot {
  PUBLIC = '/api',
}

export enum UserAuthUrls {
  ROOT = NetworkRoot.PUBLIC,
  LOGIN = '/login',
  REGISTRATION = '/register',
  REFRESH_TOKEN = '/token',
  LOGOUT = '/logout',
}

export enum UserProfileUrls {
  ROOT = NetworkRoot.PUBLIC,
  PROFILE = '/profile',
  UPDATE_PROFILE = '/profile/update',
}

export enum MessagingUrls {
  ROOT = NetworkRoot.PUBLIC,
  CONVERSATIONS_LIST = '/conversations',
  CHAT_MESSAGES = '/conversations/:conversationId/messages',
}
