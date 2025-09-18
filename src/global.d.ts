declare namespace NodeJS {
  interface ProcessEnv {
    API_BASE_URL: string;
    API_SECRET: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
  }
}
