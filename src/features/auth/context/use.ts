import { useContext } from 'react';

import { AuthContext } from './';

export function useAuth() {
  const ctxValue = useContext(AuthContext);

  if (!ctxValue) {
    throw Error('It can only be use within AuthProvider.');
  }

  return ctxValue;
}
