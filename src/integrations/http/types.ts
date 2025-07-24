export enum RootUrls {
  PROTECTED = '/v1/private',
  PUBLIC = '/v1/public',
}

export enum AuthServiceUrls {
  ROOT = RootUrls.PUBLIC,
  LOGIN = '/login',
  REGISTRATION = '/register',
}

export enum UserSessionUrls {
  ROOT = RootUrls.PROTECTED,
  LOGOUT = '/logout',
}

export enum UserServiceUrls {
  ROOT = RootUrls.PROTECTED,
  ALL_USERS = '/users',
  USER_BY_ID = '/users/:id',
  ACTIVE_USER_PROFILE = '/users/profile',
}

export enum TokenServiceUrls {
  ROOT = RootUrls.PROTECTED,
  REFRESH_TOKEN = '/token',
}
