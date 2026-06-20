import { useAuth } from '@/features/auth/context/use';
import { useSidebar } from '@/components/Sidebar/context/use';
import { useNavigate, useRouter } from '@tanstack/react-router';

import { Route } from '../route';

import { ChevronsUpDownIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/Sidebar';

export function NavUser() {
  const { activeUser } = Route.useRouteContext();

  const router = useRouter();
  const navigate = useNavigate();

  const { signOut } = useAuth();

  const { isMobile } = useSidebar();

  const avatarFallback = `${activeUser.firstName.charAt(0).toUpperCase()}${activeUser.lastName.charAt(0).toUpperCase()}`;

  async function handleSignOut() {
    signOut();

    await router.invalidate();

    await navigate({ to: '/sign-in', search: { redirect: '' } });
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={activeUser.avatarUrl ?? undefined}
                  alt={activeUser.firstName}
                />

                <AvatarFallback>{avatarFallback}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeUser.firstName}
                </span>

                <span className="truncate text-xs">{activeUser.email}</span>
              </div>

              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={activeUser.avatarUrl ?? undefined}
                    alt={activeUser.firstName}
                  />

                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {activeUser.firstName} {activeUser.lastName}
                  </span>

                  <span className="truncate text-xs">{activeUser.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <UserIcon />
              Ver perfil
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleSignOut}>
              <LogOutIcon />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
