import type { ComponentProps } from 'react';
import type { ProjectCard } from '../ProjectCard';

export const frontendProjects: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'ShwanDmall — E-Commerce',
    description: 'Full-featured e-commerce store with product browsing, wishlist, cart, flash sales, and countdown deals. Built with React, Tailwind, and React Router.',
    tags: [
      { label: 'React', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
      { label: 'React Router', color: '#00FFA3' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1080',
    featured: true,
    link: 'https://shwandmall.vercel.app',
    linkLabel: 'Visit Website',
  },
  {
    title: 'BFL Messenger',
    description: 'Real-time messaging UI with contact list, chat bubbles, and mobile-first responsive layout. Built with HTML and Tailwind CSS.',
    tags: [
      { label: 'HTML', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1080',
    link: 'https://bfl-messenger.vercel.app',
    linkLabel: 'Visit Website',
  },
  {
    title: 'eNno — Agency Landing Page',
    description: 'Corporate agency landing page with hero, services grid, about section, metrics strip, and contact. Built with HTML and Tailwind CSS.',
    tags: [
      { label: 'HTML', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080',
    link: 'https://enon-landingpage.vercel.app',
    linkLabel: 'Visit Website',
  },
  {
    title: 'Woodmart — Building Materials',
    description: 'Building materials e-commerce with popular category grid, featured products via Fake Store API, and a cart sidebar. Built with React and Tailwind.',
    tags: [
      { label: 'React', color: '#00FFA3' },
      { label: 'Tailwind', color: '#00FFA3' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1080',
    link: 'https://woodmart-bfl.vercel.app',
    linkLabel: 'Visit Website',
  },
];
