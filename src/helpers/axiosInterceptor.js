import axios from 'axios';
import envs from '../config/env';
import { getCookie } from './cookies';

const headers = {};

const Instance = axios.create({
  baseURL: envs.url,
  headers,
   
});

Instance.interceptors.request.use(
  config => {
    const token = getCookie('us_eccid');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      
    }
    return config;
  },
  errors => Promise.reject,
);

export default Instance;