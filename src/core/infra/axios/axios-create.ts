import axios from 'axios';

import { env } from '@/config/env';

export function axiosCreate(basePath: string = '') {
  return axios.create({
    baseURL: `${env.API_URL}${basePath}`,
  });
}
