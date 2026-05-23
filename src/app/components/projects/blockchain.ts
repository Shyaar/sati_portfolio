import type { ComponentProps } from 'react';
import type { ProjectCard } from '../ProjectCard';

export const blockchainProjects: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'Xyra — No-Loss Crypto Lottery',
    description: 'A no-loss crypto lottery where your principal is always safe — only the yield goes to the winner. Built on-chain with smart contracts.',
    tags: [
      { label: 'DeFi', color: '#9D7BFF' },
      { label: 'Smart Contracts', color: '#9D7BFF' },
      { label: 'Web3', color: '#9D7BFF' },
    ],
    imageUrl: '/project-pics/xyra.png',
    featured: true,
    link: 'https://xyra-lottery-1yfc.vercel.app/',
    linkLabel: 'Visit dApp',
  },
  {
    title: 'Abys — Dark Pool Protocol',
    description: 'Decentralized dark pool on Starknet enabling private peer-to-peer trading with ZK-STARKs, encrypted mempools, and MEV protection.',
    tags: [
      { label: 'Starknet', color: '#9D7BFF' },
      { label: 'ZK Proofs', color: '#9D7BFF' },
      { label: 'DeFi', color: '#9D7BFF' },
    ],
    imageUrl: '/project-pics/Abys.png',
    link: 'https://abys-five.vercel.app/',
    linkLabel: 'Visit dApp',
  },
  {
    title: 'Aegis — Slippage Insurance',
    description: 'The first Uniswap v4 hook with native slippage insurance. Protects traders from price deviation with automatic same-block payouts.',
    tags: [
      { label: 'Uniswap v4', color: '#9D7BFF' },
      { label: 'Solidity', color: '#9D7BFF' },
      { label: 'DeFi', color: '#9D7BFF' },
    ],
    imageUrl: '/project-pics/Aegis.png',
    link: 'https://aegis-v1.vercel.app/',
    linkLabel: 'Visit dApp',
  },
];
