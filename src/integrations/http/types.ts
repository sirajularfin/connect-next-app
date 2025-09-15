export enum RootUrls {
  PUBLIC = '/api',
}

export enum AuthServiceUrls {
  ROOT = RootUrls.PUBLIC,
  LOGIN = '/login',
  REGISTRATION = '/register',
}

export enum UserSessionUrls {
  ROOT = RootUrls.PUBLIC,
  LOGOUT = '/logout',
}

export enum TokenServiceUrls {
  ROOT = RootUrls.PUBLIC,
  REFRESH_TOKEN = '/token',
}

export enum ProfileServiceUrls {
  ROOT = RootUrls.PUBLIC,
  PROFILE = '/profile',
  UPDATE_PROFILE = '/profile/update',
}

export enum ChatServiceUrls {
  ROOT = RootUrls.PUBLIC,
  CONVERSATIONS_LIST = '/conversations',
  CHAT_MESSAGES = '/conversations/:conversationId/messages',
}
