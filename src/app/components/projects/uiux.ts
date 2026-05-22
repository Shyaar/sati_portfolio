import type { ComponentProps } from 'react';
import type { ProjectCard } from '../ProjectCard';

export const uiuxProjects: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'NFT Marketplace',
    description: 'Modern marketplace design with advanced filtering, discovery flows, and full design system.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1777503810475-54815aae2cb4?w=1080',
    featured: true,
    link: 'https://www.behance.net/',  // replace with your Behance project URL
    linkLabel: 'View on Behance',
  },
  {
    title: 'Design System',
    description: 'Comprehensive component library for Web3 applications — tokens, patterns, and documentation.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1772272935464-2e90d8218987?w=1080',
    link: 'https://www.behance.net/',  // replace with your Behance project URL
    linkLabel: 'View on Behance',
  },
  {
    title: 'Protocol Dashboard',
    description: 'Real-time DeFi analytics interface — designed from wireframes to high-fidelity prototype.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?w=1080',
    link: 'https://www.behance.net/',  // replace with your Behance project URL
    linkLabel: 'View on Behance',
  },
    {
    title: 'Protocol Dashboard',
    description: 'Real-time DeFi analytics interface — designed from wireframes to high-fidelity prototype.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?w=1080',
    link: 'https://www.behance.net/',  // replace with your Behance project URL
    linkLabel: 'View on Behance',
  },
];
