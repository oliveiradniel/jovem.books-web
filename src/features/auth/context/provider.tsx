import { useCallback, type ReactNode } from 'react';
import { useMutation } from '@tanstack/react-query';

import { AuthContext } from './';

import { authQueries } from '../queries';

import { ACCESS_TOKEN_STORAGE_KEY } from '@/constants/accessTokenStorageKey';

import type { SignInPayload } from '../signIn/schema';
import type { SignUpPayload } from '../signUp/schema';

export function AuthProvider({ children }: { children: ReactNode }) {
  const { mutateAsync: signInMutate, isPending: isSigningIn } = useMutation(
    authQueries.signIn(),
  );
  const { mutateAsync: signUpMutate, isPending: isSigningUp } = useMutation(
    authQueries.signUp(),
  );

  function setSession(accessToken: string | null) {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
    } else {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    }
  }

  const signIn = useCallback(
    async (payload: SignInPayload) => {
      const response = await signInMutate(payload);

      setSession(response.accessToken);
    },
    [signInMutate],
  );

  const signUp = useCallback(
    async (payload: SignUpPayload) => {
      const response = await signUpMutate(payload);

      setSession(response.accessToken);
    },
    [signUpMutate],
  );

  const signOut = useCallback(async () => {
    setSession(null);
  }, []);

  // const value = useMemo(
  //   () => ({
  //     accessToken,
  //     isSigningIn,
  //     isSigningUp,
  //     signIn,
  //     signUp,
  //     signOut,
  //   }),
  //   [
  //     accessToken,
  //     isSigningIn,
  //     isSigningUp,
  //     signIn,
  //     signUp,
  //     signOut,
  //   ],
  // );

  return (
    <AuthContext.Provider
      value={{
        isSigningIn,
        isSigningUp,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
