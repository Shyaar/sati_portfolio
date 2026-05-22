import type { ComponentProps } from 'react';
import type { ProjectCard } from '../ProjectCard';

export const blockchainProjects: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'Beam Wallet',
    description: 'On-chain wallet integration with Solana — transaction signing, token management, and Web3 UX.',
    tags: [
      { label: 'Solana', color: '#9D7BFF' },
      { label: 'Web3 UX', color: '#9D7BFF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?w=1080',
    featured: true,
    link: 'https://',  // replace with your dApp URL
    linkLabel: 'Visit dApp',
  },
  {
    title: 'NFT Marketplace',
    description: 'Smart contract-backed NFT marketplace with on-chain minting and royalty enforcement.',
    tags: [
      { label: 'Solana', color: '#9D7BFF' },
      { label: 'Rust', color: '#9D7BFF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1777503810475-54815aae2cb4?w=1080',
    link: 'https://',  // replace with your dApp URL
    linkLabel: 'Visit dApp',
  },
];
