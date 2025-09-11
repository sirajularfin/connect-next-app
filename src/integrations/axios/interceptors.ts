import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { formatJson } from '@/common/util/common.util';
import logger from '@/common/util/logger.util';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  logger(
    `[ApiRequest][${config.method?.toUpperCase()}][${config.url}]\nPayload: ${formatJson(config.data)}`
  );
  return config;
};

export const responseInterceptor = (response: AxiosResponse) => {
  logger(
    `[ApiResponse][${response.statusText}_${response.status}][${response.config.url}]\nResponse: ${formatJson(response.data)}`
  );
  return response;
};

export const errorHandler = (error: AxiosError) => {
  logger(
    `[ApiError][${error.config?.method?.toUpperCase()}][${error.config?.url}]\nMessage: ${error.message}`,
    'error'
  );
  return Promise.reject(error);
};
