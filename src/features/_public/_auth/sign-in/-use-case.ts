import type { HttpClient } from '@/core/infra/http-client';
import type { SignInPayload } from './-schema';

export class SignInUseCase {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  execute(params: SignInPayload) {
    return this.httpClient.post<SignInPayload, { accessToken: string }>({
      path: '/sign-in',
      body: {
        email: params.email,
        password: params.password,
      },
    });
  }
}
