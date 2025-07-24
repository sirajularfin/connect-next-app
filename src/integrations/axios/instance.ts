import axios from 'axios';
import generateHttpHeaders from './helpers/axiosHeaders';

const TIMEOUT_IN_MS = 10000;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PORT,
  timeout: TIMEOUT_IN_MS,
  headers: {
    // Configure from Axios Base Query
    ...generateHttpHeaders(),
  },
});

export default axiosInstance;
