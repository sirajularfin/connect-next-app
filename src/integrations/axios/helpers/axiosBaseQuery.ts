import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosError, AxiosRequestConfig } from 'axios';

import axiosInstance from '../instance';

interface IApiRequestOptions {
  url?: AxiosRequestConfig['url'];
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
}

const axiosBaseQuery =
  (): BaseQueryFn<Partial<IApiRequestOptions>> =>
  async ({ url, method, data }) => {
    try {
      const response = await axiosInstance({
        url,
        method,
        data: method === 'POST' ? data : undefined,
        params: method === 'GET' ? data : undefined,
      });
      return { data: response?.data };
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export default axiosBaseQuery;
