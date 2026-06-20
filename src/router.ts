import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

import { queryClient } from './core/providers/queryClient';

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});
