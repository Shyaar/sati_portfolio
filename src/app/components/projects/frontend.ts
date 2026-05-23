import type { ComponentProps } from 'react';
import type { ProjectCard } from '../ProjectCard';

export const frontendProjects: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'Xyra — No-Loss Crypto Lottery',
    description: 'A no-loss crypto lottery where your principal is always safe — only the yield goes to the winner. Built with React and Web3 integrations.',
    tags: [
      { label: 'React', color: '#00FFA3' },
      { label: 'Web3', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
    ],
    imageUrl: '/project-pics/xyra.png',
    featured: true,
    link: 'https://xyra-lottery-1yfc.vercel.app/',
    linkLabel: 'Visit Website',
  },
  {
    title: 'Abys — Dark Pool Protocol',
    description: 'Decentralized dark pool on Starknet enabling private peer-to-peer trading. Built with React, featuring encrypted order flows and ZK-powered UI.',
    tags: [
      { label: 'React', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
      { label: 'Starknet', color: '#00FFA3' },
    ],
    imageUrl: '/project-pics/Abys.png',
    link: 'https://abys-five.vercel.app/',
    linkLabel: 'Visit Website',
  },
  {
    title: 'Aegis — Slippage Insurance',
    description: 'Frontend for the first Uniswap v4 slippage insurance protocol. Coverage tiers, swap protection dashboard, and real-time payout tracking.',
    tags: [
      { label: 'React', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
      { label: 'Web3', color: '#00FFA3' },
    ],
    imageUrl: '/project-pics/Aegis.png',
    link: 'https://aegis-v1.vercel.app/',
    linkLabel: 'Visit Website',
  },
  {
    title: 'eNno — Agency Landing Page',
    description: 'Corporate agency landing page with hero, services grid, about section, metrics strip, and contact. Built with HTML and Tailwind CSS.',
    tags: [
      { label: 'HTML', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
    ],
    imageUrl: '/project-pics/enon.png',
    link: 'https://enon-landingpage.vercel.app/',
    linkLabel: 'Visit Website',
  },
];
