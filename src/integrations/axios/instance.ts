import axios from 'axios';
import generateHttpHeaders from './helpers/axiosHeaders';

const TIMEOUT_IN_MS = 10000;

const axiosInstance = axios.create({
  baseURL: '/v1',
  timeout: TIMEOUT_IN_MS,
  headers: {
    ...generateHttpHeaders(),
  },
});

export default axiosInstance;
