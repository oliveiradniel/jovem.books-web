import { createFileRoute, Outlet } from '@tanstack/react-router';

import placeholder from '@/assets/images/placeholder.svg';

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>

      <div className="bg-muted relative hidden lg:block">
        <img
          src={placeholder}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
