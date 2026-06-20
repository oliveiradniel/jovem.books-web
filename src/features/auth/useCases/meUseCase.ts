import type { User } from '@/features/user/types/user';

import type { HttpClient } from '@/core/infra/contracts/httpClient';

export class MeUseCase {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async execute() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return this.httpClient.get<User>({ path: '/me' });
  }
}
