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
