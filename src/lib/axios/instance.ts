import axios from 'axios';
import generateHttpHeaders from './helpers/axiosHeaders';

const TIMEOUT_IN_MS = 10000;

const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: TIMEOUT_IN_MS,
  headers: {
    // Configure from Axios Base Query
    ...generateHttpHeaders(),
  },
});

export default axiosInstance;
