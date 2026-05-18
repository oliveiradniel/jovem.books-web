import { createFileRoute } from '@tanstack/react-router';

import { Page } from './-page';

export const Route = createFileRoute('/_public/_auth/sign-in')({
  component: Page,
});
