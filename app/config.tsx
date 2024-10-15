// ! Imports for config

import { Inbox } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';

// * Config

// ! Connect links

export const CONNECT_LINKS: Array<{
  name: string;
  href: string;
  icon: React.ReactNode;
}> = [
  {
    name: 'Email',
    href: 'mailto:noahpittman00@gmail.com',
    icon: <Inbox className="size-6 " />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/junkmasterjim',
    icon: <SiX className="size-6 fill-foreground" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/junkmasterjim',
    icon: <SiGithub className="size-6 fill-foreground" />,
  },
];

// ! All projects

export const WORK: Array<{
  name: string;
  desc: string;
  href: string;
  src: string;
  tags: string[];
}> = [
  {
    name: 'Wendr.de',
    desc: 'Client project. UberEats/AirBnB style app for finding local vendors.',
    href: 'https://wendr.de',
    src: '/projects/wendr.png',
    tags: ['react', 'typescript', 'postgresql', 'ui/ux design'],
  },
];

export const SIDE_PROJECTS: Array<{
  name: string;
  desc: string;
  href: string;
  src: string;
  tags: string[];
}> = [
  {
    name: 'hushh',
    desc: 'Minimalist white noise generator for MacOS',
    href: 'https://hushh.npitt.dev',
    src: '/projects/hushh.png',
    tags: ['tauri', 'react', 'typescript', 'rust'],
  },
  {
    name: 'Bordly',
    desc: 'Style guide generator for quick design systems',
    href: 'https://bordly.app',
    src: '/projects/bordly.png',
    tags: ['react', 'typescript'],
  },
  {
    name: 'PomoLogs',
    desc: 'Pomodoro timer with log tracking',
    href: 'https://pomologs.org',
    src: '/projects/pomologs.png',
    tags: ['tauri', 'react', 'typescript', 'rust'],
  },
  {
    name: 'DevPillar',
    desc: 'Open source design & development resource library',
    href: 'https://devpillar.org',
    src: '/projects/devpillar.png',
    tags: ['react', 'typescript', 'postgresql', 'ui/ux design'],
  },
  {
    name: 'QR Gen',
    desc: 'A simple QR code generator',
    href: 'https://qr.npitt.dev',
    src: '/projects/qr.png',
    tags: ['react', 'typescript', 'postgresql', 'ui/ux design'],
  },
  {
    name: 'Pokédex',
    desc: 'Simple pokédex made with Tanstack Query',
    href: 'https://pokedex.npitt.dev',
    src: '/projects/pokedex.png',
    tags: ['react', 'typescript'],
  },
  {
    name: 'Shade Shuffle',
    desc: 'Color palette generator',
    href: 'https://shadeshuffle.org',
    src: '/projects/shadeshuffle.png',
    tags: ['react', 'ui/ux design'],
  },
];
