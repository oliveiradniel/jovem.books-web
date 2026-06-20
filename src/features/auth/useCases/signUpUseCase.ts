import type { HttpClient } from '@/core/infra/contracts/httpClient';
import type { SignUpPayload } from '../signUp/schema';

export class SignUpUseCase {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  execute(params: SignUpPayload) {
    return this.httpClient.post<SignUpPayload, { accessToken: string }>({
      path: '/sign-up',
      body: {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        password: params.password,
        confirmPassword: params.confirmPassword,
      },
    });
  }
}
