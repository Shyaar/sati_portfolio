import type { ComponentProps } from 'react';
import type { ProjectCard } from '../ProjectCard';

export const uiuxProjects: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'Pyde — Layer 1 Blockchain Identity',
    description: 'Brand identity design for a post-quantum Layer 1 blockchain. Covers logo mark, symbol rationale, and visual language for a protocol built on four uncompromising commitments.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: '/project-pics/pyde.png',
    featured: true,
    link: 'https://www.behance.net/gallery/249867091/Pyde',  // replace with your Behance project URL
    linkLabel: 'View on Behance',
  },
  {
     title: 'BSEMA — Emergency Management',
    description: 'Full UI/UX design for the Benue State Emergency Management Agency — live alert system, AI chatbot interface, incident map, and citizen communication portal built for Nigeria\'s frontline disaster response authority.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: '/project-pics/bsema.png',
    link: 'https://www.behance.net/gallery/249865573/BSema',
    linkLabel: 'View on Behance',
  },
  {
    title: 'Luxury Hotels',
    description: 'High-end hotel website design featuring a landing page and admin dashboard. Built around elegant visual hierarchy, refined typography, and a premium user experience.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: '/project-pics/luxury.png',
    link: 'https://www.behance.net/gallery/243656949/Luxury-Hotels',  // replace with your Behance project URL
    linkLabel: 'View on Behance',
  },
    {
    title: 'Agrisphere',
    description: 'Mobile app design for an agriculture platform. Covers end-to-end product design including user flows, interaction design, and a clean UI system built for farmers and agri-businesses.',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Figma', color: '#00E5FF' },
    ],
    imageUrl: '/project-pics/agrisphere.png',
    link: 'https://www.behance.net/gallery/192047635/Agrisphere',  // replace with your Behance project URL
    linkLabel: 'View on Behance',
  },
];
