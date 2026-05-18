import { axiosCreate } from './axios-create';

import type { AxiosInstance } from 'axios';
import type {
  GetRequest,
  HttpClient,
  PatchRequest,
  PostRequest,
} from '../http-client';

export class AxiosService implements HttpClient {
  private readonly client: AxiosInstance;

  constructor(baseURL: string = '') {
    this.client = axiosCreate(baseURL);
  }

  async get<TResponse>({ path, config }: GetRequest): Promise<TResponse> {
    const response = await this.client.get<TResponse>(path, config);

    return response.data;
  }

  async post<TBody, TResponse>({
    path,
    body,
    config,
  }: PostRequest<TBody>): Promise<TResponse> {
    const response = await this.client.post<TResponse>(path, body, config);

    return response.data;
  }

  async patch<TBody, TResponse>({
    path,
    body,
    config,
  }: PatchRequest<TBody>): Promise<TResponse> {
    const response = await this.client.patch<TResponse>(path, body, config);

    return response.data;
  }
}
