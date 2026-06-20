import { AxiosFactory } from '@/core/infra/axios/factory';

import { SignInUseCase } from './useCases/signInUseCase';
import { SignUpUseCase } from './useCases/signUpUseCase';
import { MeUseCase } from './useCases/meUseCase';

const http = AxiosFactory.getInstance('/auth');

export const authContainer = {
  signIn: new SignInUseCase(http),
  signUp: new SignUpUseCase(http),
  me: new MeUseCase(http),
};
