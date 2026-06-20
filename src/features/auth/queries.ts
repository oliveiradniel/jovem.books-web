import { mutationOptions, queryOptions } from '@tanstack/react-query';

import { authContainer } from './container';

import type { SignInPayload } from './signIn/schema';
import type { SignUpPayload } from './signUp/schema';

export const authQueries = {
  signIn: () =>
    mutationOptions({
      mutationFn: (payload: SignInPayload) =>
        authContainer.signIn.execute(payload),
    }),
  signUp: () =>
    mutationOptions({
      mutationFn: (payload: SignUpPayload) =>
        authContainer.signUp.execute(payload),
    }),
  me: () =>
    queryOptions({
      queryKey: ['user', 'me'],
      queryFn: () => authContainer.me.execute(),
      retry: false,
    }),
};
