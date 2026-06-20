import { createFileRoute, redirect } from '@tanstack/react-router';

import { authQueries } from '@/features/auth/queries';

import { LoaderCircleIcon } from 'lucide-react';
import { AuthLayout } from './-components/Layout';

import { ACCESS_TOKEN_STORAGE_KEY } from '@/constants/accessTokenStorageKey';

export const Route = createFileRoute('/_authenticated')({
  component: AuthLayout,

  pendingComponent: () => (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <LoaderCircleIcon className="text-primary size-8 animate-spin" />

      <span>Carregando...</span>
    </div>
  ),

  beforeLoad: async ({ context, location }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    if (!accessToken) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
      });
    }

    const activeUser = await context.queryClient
      .ensureQueryData(authQueries.me())
      .catch(() => null);

    if (!activeUser) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
      });
    }

    return { activeUser };
  },
});
