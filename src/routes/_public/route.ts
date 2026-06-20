import { createFileRoute, redirect } from '@tanstack/react-router';

import { authQueries } from '@/features/auth/queries';

import { PublicLayout } from './-Layout';

import { ACCESS_TOKEN_STORAGE_KEY } from '@/constants/accessTokenStorageKey';

export const Route = createFileRoute('/_public')({
  component: PublicLayout,

  validateSearch: (search) => {
    return {
      redirect: (search.redirect as string) || '/dashboard',
    };
  },

  beforeLoad: async ({ context, search }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    if (!accessToken) return;

    const activeUser = await context.queryClient
      .ensureQueryData(authQueries.me())
      .catch(() => null);

    if (activeUser) {
      throw redirect({ to: search.redirect });
    }
  },
});
