import { SignIn } from '@/view/pages/sign-in';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/entrar')({
  component: SignIn,
});
