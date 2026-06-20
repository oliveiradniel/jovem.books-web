import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { router } from './router';
import { queryClient } from './core/providers/queryClient';
import { TooltipProvider } from './components/Tooltip';
import { AuthProvider } from './features/auth/context/provider';

function InnerApp() {
  return <RouterProvider router={router} context={{ queryClient }} />;
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <InnerApp />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
