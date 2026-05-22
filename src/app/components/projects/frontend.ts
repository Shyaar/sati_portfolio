import type { ComponentProps } from 'react';
import type { ProjectCard } from '../ProjectCard';

export const frontendProjects: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'Beam Wallet',
    description: 'Full-stack Web3 wallet with seamless UX, on-chain integration, and responsive layout.',
    tags: [
      { label: 'React', color: '#00FFA3' },
      { label: 'TypeScript', color: '#00FFA3' },
      { label: 'Web3', color: '#9D7BFF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?w=1080',
    featured: true,
    link: 'https://',  // replace with your live site URL
    linkLabel: 'Visit Website',
  },
  {
    title: 'Protocol Dashboard',
    description: 'Real-time DeFi analytics and portfolio management built with React and live on-chain data.',
    tags: [
      { label: 'React', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?w=1080',
    link: 'https://',  // replace with your live site URL
    linkLabel: 'Visit Website',
  },
];
