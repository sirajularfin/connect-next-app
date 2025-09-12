import axios from 'axios';

import generateHttpHeaders from './helpers/axiosHeaders';
import {
  errorHandler,
  requestInterceptor,
  responseInterceptor,
} from './interceptors';

const TIMEOUT_IN_MS = 10000;

const axiosInstance = axios.create({
  baseURL: '/v1',
  timeout: TIMEOUT_IN_MS,
  headers: {
    ...generateHttpHeaders(),
  },
});

axiosInstance.interceptors.request.use(requestInterceptor, errorHandler);
axiosInstance.interceptors.response.use(responseInterceptor, errorHandler);

export default axiosInstance;
