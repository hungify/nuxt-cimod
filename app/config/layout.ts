import type { SidebarMenuSettings } from '~/types/layout'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  PackageIcon,
  Settings2,
  SquareTerminal,
  WorkflowIcon,
} from 'lucide-vue-next'

export const sidebarConfiguration = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  menuGroups: [
    {
      title: 'Tasks',
      url: { name: 'tasks' },
      icon: WorkflowIcon,
    },
    {
      title: 'Apps',
      url: { name: 'apps' },
      icon: PackageIcon,
    },
    {
      title: 'Playground',
      url: { name: 'index' },
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: { name: 'index' },
        },
        {
          title: 'Starred',
          url: { name: 'index' },
        },
        {
          title: 'Settings',
          url: { name: 'index' },
        },
      ],
    },
    {
      title: 'Models',
      url: { name: 'index' },
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: { name: 'index' },
        },
        {
          title: 'Explorer',
          url: { name: 'index' },
        },
        {
          title: 'Quantum',
          url: { name: 'index' },
        },
      ],
    },
    {
      title: 'Documentation',
      url: { name: 'index' },
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: { name: 'index' },
        },
        {
          title: 'Get Started',
          url: { name: 'index' },
        },
        {
          title: 'Tutorials',
          url: { name: 'index' },
        },
        {
          title: 'Changelog',
          url: { name: 'index' },
        },
      ],
    },
    {
      title: 'Settings',
      url: { name: 'index' },
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: { name: 'index' },
        },
        {
          title: 'Team',
          url: { name: 'index' },
        },
        {
          title: 'Billing',
          url: { name: 'index' },
        },
        {
          title: 'Limits',
          url: { name: 'index' },
        },
      ],
    },
  ],
} satisfies SidebarMenuSettings
