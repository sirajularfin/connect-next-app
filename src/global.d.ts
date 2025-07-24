declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_PORT: string;
    NEXT_PUBLIC_MONGODB_URI: string;
    NEXT_PUBLIC_MONGODB_DB_NAME: string;
    NEXT_PUBLIC_API_SECRET: string;
    NEXT_PUBLIC_ACCESS_TOKEN_SECRET: string;
    NEXT_PUBLIC_REFRESH_TOKEN_SECRET: string;
  }
}
