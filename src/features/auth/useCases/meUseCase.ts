import type { User } from '@/features/user/types/user';

import type { HttpClient } from '@/core/infra/contracts/httpClient';

export class MeUseCase {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  execute() {
    return this.httpClient.get<User>({ path: '/me' });
  }
}
