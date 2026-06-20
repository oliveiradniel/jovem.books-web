import { createContext } from 'react';

import type { SignInPayload } from '../signIn/schema';
import type { SignUpPayload } from '../signUp/schema';

export interface AuthContextValues {
  isSigningIn: boolean;
  isSigningUp: boolean;
  signIn(payload: SignInPayload): Promise<void>;
  signUp(payload: SignUpPayload): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextValues);
