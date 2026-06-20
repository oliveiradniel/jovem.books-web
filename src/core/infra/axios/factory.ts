import { AxiosService } from './service';

import type { HttpClient } from '../contracts/httpClient';

export class AxiosFactory {
  private static instances = new Map<string, HttpClient>();

  static getInstance(baseURL = ''): HttpClient {
    if (!this.instances.has(baseURL)) {
      this.instances.set(baseURL, new AxiosService(baseURL));
    }

    return this.instances.get(baseURL)!;
  }
}
