import axios from 'axios';

import { env } from '@/config/env';

import { ACCESS_TOKEN_STORAGE_KEY } from '@/constants/accessTokenStorageKey';

export function createAxiosClient(basePath: string = '') {
  const client = axios.create({
    baseURL: `${env.API_URL}${basePath}`,
  });

  client.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
      }

      return Promise.reject(error);
    },
  );

  return client;
}
