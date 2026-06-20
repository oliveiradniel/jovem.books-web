import {
  LibraryIcon,
  UsersIcon,
  TrendingUpIcon,
  NotebookPenIcon,
  SearchIcon,
} from 'lucide-react';

import { NavMain } from './NavMain';
import { NavUser } from './NavUser';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  // SidebarRail,
} from '@/components/Sidebar';

const data = {
  navMain: [
    {
      title: 'Minha Estante',
      url: '/bookcase',
      icon: <LibraryIcon />,
      isActive: true,
      items: [
        {
          title: 'Livros',
          url: '/bookcase/books',
        },
        {
          title: 'Áudio-livros',
          url: '/bookcase/audio-books',
        },
        {
          title: "HQ's",
          url: '/bookcase/comic-books',
        },
        {
          title: 'Mangás',
          url: '/bookcase/mangas',
        },
      ],
    },
    {
      title: 'Clubes de Leitura',
      url: '/clubs',
      icon: <UsersIcon />,
      isActive: true,
    },
    {
      title: 'Minhas Metas',
      url: '/goals',
      icon: <TrendingUpIcon />,
      isActive: true,
    },
    {
      title: 'Anotações',
      url: '/notes',
      icon: <NotebookPenIcon />,
      isActive: true,
    },
    {
      title: 'Descobrir',
      url: '/discover',
      icon: <SearchIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
