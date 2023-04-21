import { useCookies } from 'vue3-cookies';
import axios, { InternalAxiosRequestConfig } from 'axios';

const appAPI = axios.create({
  baseURL: 'http://localhost:3000/api/app',
  headers: {
    'Content-Type': 'application/json'
  }
});

appAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Authorization = useCookies().cookies.get('Authorization');
    return config;
  }
);

export default appAPI;
