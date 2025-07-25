import axios from 'axios';
import generateHttpHeaders from './helpers/axiosHeaders';

const TIMEOUT_IN_MS = 10000;

const axiosInstance = axios.create({
  baseURL: window.location.origin ?? process.env.NEXT_PUBLIC_SITE_URL,
  timeout: TIMEOUT_IN_MS,
  headers: {
    ...generateHttpHeaders(),
  },
});

export default axiosInstance;
