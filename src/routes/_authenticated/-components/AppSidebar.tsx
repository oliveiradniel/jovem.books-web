import shadcn from '@/assets/images/shadcn.jpg';

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
  user: {
    name: 'Machado de Assis',
    email: 'machadodeassis@example.com',
    avatar: shadcn,
  },
  navMain: [
    {
      title: 'Minha Estante',
      url: '/estante',
      icon: <LibraryIcon />,
      isActive: true,
      items: [
        {
          title: 'Livros',
          url: '/estante/livros',
        },
        {
          title: 'Áudio-livros',
          url: '/estante/audio-livros',
        },
        {
          title: "HQ's",
          url: '/estante/historias-em-quadrinhos',
        },
        {
          title: 'Mangás',
          url: '/estante/mangas',
        },
      ],
    },
    {
      title: 'Clubes de Leitura',
      url: '/clubes',
      icon: <UsersIcon />,
      isActive: true,
    },
    {
      title: 'Minhas Metas',
      url: '/metas',
      icon: <TrendingUpIcon />,
      isActive: true,
    },
    {
      title: 'Anotações',
      url: '/anotacoes',
      icon: <NotebookPenIcon />,
      isActive: true,
    },
    {
      title: 'Descobrir',
      url: '/descobrir',
      icon: <SearchIcon />,
      items: [
        {
          title: 'Jovem Books',
          url: '/descobrir/jovem-books',
        },
        {
          title: 'Google Books',
          url: '/descobrir/google-books',
        },
      ],
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
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
