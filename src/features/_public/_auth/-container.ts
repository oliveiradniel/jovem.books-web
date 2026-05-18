import { AxiosFactory } from '@/core/infra/axios/axios-factory';

import { SignInUseCase } from './sign-in/-use-case';
import { SignUpUseCase } from './sign-up/-use-case';

const http = AxiosFactory.getInstance('/auth');

export const authContainer = {
  signIn: new SignInUseCase(http),
  signUp: new SignUpUseCase(http),
};
