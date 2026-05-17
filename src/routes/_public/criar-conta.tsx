import { createFileRoute } from '@tanstack/react-router';

import { Signup } from '@/view/pages/sign-up';

export const Route = createFileRoute('/_public/criar-conta')({
  component: Signup,
});
