import { createFileRoute, redirect } from '@tanstack/react-router';
import { AuthLayout } from './-components/Layout';
import { authQueries } from '@/features/auth/queries';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/constants/accessTokenStorageKey';
import { LoaderCircleIcon } from 'lucide-react';

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
    if (!accessToken) return;

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
  },
});
