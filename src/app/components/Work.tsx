import { useState } from 'react';
import type { ComponentProps } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCard } from './ProjectCard';

type Tab = 'Figma' | 'Frontend' | 'Blockchain';

const tabs: { id: Tab; color: string }[] = [
  { id: 'Figma', color: '#00E5FF' },
  { id: 'Frontend', color: '#00FFA3' },
  { id: 'Blockchain', color: '#9D7BFF' },
];

const projects: Record<Tab, ComponentProps<typeof ProjectCard>[]> = {
  Figma: [
    {
      title: 'NFT Marketplace',
      description: 'Modern marketplace design with advanced filtering, discovery flows, and full design system.',
      tags: [
        { label: 'UI/UX', color: '#00E5FF' },
        { label: 'Figma', color: '#00E5FF' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1777503810475-54815aae2cb4?w=1080',
    },
    {
      title: 'Design System',
      description: 'Comprehensive component library for Web3 applications — tokens, patterns, and documentation.',
      tags: [
        { label: 'UI/UX', color: '#00E5FF' },
        { label: 'Figma', color: '#00E5FF' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1772272935464-2e90d8218987?w=1080',
    },
    {
      title: 'Protocol Dashboard',
      description: 'Real-time DeFi analytics interface — designed from wireframes to high-fidelity prototype.',
      tags: [
        { label: 'UI/UX', color: '#00E5FF' },
        { label: 'Figma', color: '#00E5FF' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?w=1080',
    },
  ],
  Frontend: [
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
    },
    {
      title: 'Protocol Dashboard',
      description: 'Real-time DeFi analytics and portfolio management built with React and live on-chain data.',
      tags: [
        { label: 'React', color: '#00FFA3' },
        { label: 'Tailwind', color: '#00FFA3' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?w=1080',
    },
  ],
  Blockchain: [
    {
      title: 'Beam Wallet',
      description: 'On-chain wallet integration with Solana — transaction signing, token management, and Web3 UX.',
      tags: [
        { label: 'Solana', color: '#9D7BFF' },
        { label: 'Web3 UX', color: '#9D7BFF' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?w=1080',
      featured: true,
    },
    {
      title: 'NFT Marketplace',
      description: 'Smart contract-backed NFT marketplace with on-chain minting and royalty enforcement.',
      tags: [
        { label: 'Solana', color: '#9D7BFF' },
        { label: 'Rust', color: '#9D7BFF' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1777503810475-54815aae2cb4?w=1080',
    },
  ],
};

export function Work() {
  const [activeTab, setActiveTab] = useState<Tab>('Figma');

  return (
    <section id="work" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Radial gradient bloom */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #9D7BFF 0%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#ECEEF4] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Selected Work
          </h2>
          <p className="text-[#525870] text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Projects spanning design, development, and blockchain
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: isActive ? tab.color : '#525870',
                  backgroundColor: isActive ? `${tab.color}15` : 'transparent',
                  border: `1px solid ${isActive ? `${tab.color}50` : '#1E2030'}`,
                }}
              >
                {tab.id}
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ border: `1px solid ${tab.color}50` }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects[activeTab].map((project, index) => (
              <motion.div
                key={project.title + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={project.featured ? 'md:col-span-2' : ''}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
