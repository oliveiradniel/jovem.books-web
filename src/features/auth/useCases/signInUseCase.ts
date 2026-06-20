import type { HttpClient } from '@/core/infra/contracts/httpClient';
import type { SignInPayload } from '../signIn/schema';

export class SignInUseCase {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  execute(params: SignInPayload) {
    console.log(params);
    return this.httpClient.post<SignInPayload, { accessToken: string }>({
      path: '/sign-in',
      body: {
        email: params.email,
        password: params.password,
      },
    });
  }
}
