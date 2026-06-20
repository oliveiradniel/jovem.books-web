import { createFileRoute } from '@tanstack/react-router';

import { SignUpPage } from '@/features/auth/signUp/Page';

export const Route = createFileRoute('/_public/sign-up')({
  component: SignUpPage,
});
