import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { formatJson } from '@/common/util/common.util';
import logger from '@/common/util/logger.util';

export const requestInterceptor = (
  config: InternalAxiosRequestConfig<unknown>
) => {
  const token = process.env.API_SECRET;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  logger(
    `[API Request][${config.method?.toUpperCase()}][${config.url}]\nPayload: ${formatJson(config.data)}`,
    'info'
  );

  return config;
};

export const responseInterceptor = (response: AxiosResponse) => {
  logger(
    `[API Response][${response.status}][${response.config.url}]\n${formatJson(response.data)}`,
    'info'
  );
  return response;
};

export const errorInterceptor = (error: AxiosError) => {
  const url = error.config?.url || 'unknown';
  logger(
    `[API Error][${error.config?.method?.toUpperCase()}][${url}]\nError: ${error.message}`,
    'info'
  );
  return Promise.reject(error);
};
