import { AxiosService } from './axios-service';

import type { HttpClient } from '../http-client';

export class AxiosFactory {
  private static instances = new Map<string, HttpClient>();

  static getInstance(baseURL = ''): HttpClient {
    if (!this.instances.has(baseURL)) {
      this.instances.set(baseURL, new AxiosService(baseURL));
    }

    return this.instances.get(baseURL)!;
  }
}
