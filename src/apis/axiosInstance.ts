import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://2097-110-35-22-213.ngrok-free.app',
  withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': 'true',
  },
});
