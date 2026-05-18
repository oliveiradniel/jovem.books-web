import { createFileRoute } from '@tanstack/react-router';

import { AuthLayout } from './-layout';

export const Route = createFileRoute('/_public/_auth')({
  component: AuthLayout,
});
