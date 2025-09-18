import axios, { AxiosInstance } from 'axios';

import {
  errorInterceptor,
  requestInterceptor,
  responseInterceptor,
} from './interceptors';

const setupInterceptors = (client: AxiosInstance): void => {
  client.interceptors.request.use(requestInterceptor, errorInterceptor);
  client.interceptors.response.use(responseInterceptor, errorInterceptor);
};

const createHttpClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: process.env.API_BASE_URL ?? 'http://localhost:3000',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  setupInterceptors(client);
  return client;
};

export const httpClient = createHttpClient();
