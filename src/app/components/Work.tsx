import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Beam Wallet',
    description: 'Full-stack Web3 wallet with seamless UX and on-chain integration',
    tags: [
      { label: 'Frontend', color: '#00FFA3' },
      { label: 'Web3', color: '#9D7BFF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?w=1080',
    featured: true,
  },
  {
    title: 'Protocol Dashboard',
    description: 'Real-time DeFi analytics and portfolio management interface',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Frontend', color: '#00FFA3' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?w=1080',
  },
  {
    title: 'NFT Marketplace',
    description: 'Modern marketplace design with advanced filtering and discovery',
    tags: [
      { label: 'UI/UX', color: '#00E5FF' },
      { label: 'Web3', color: '#9D7BFF' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1777503810475-54815aae2cb4?w=1080',
  },
  {
    title: 'Design System',
    description: 'Comprehensive component library for Web3 applications',
    tags: [{ label: 'UI/UX', color: '#00E5FF' }],
    imageUrl: 'https://images.unsplash.com/photo-1772272935464-2e90d8218987?w=1080',
  },
];

export function Work() {
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
          className="mb-12"
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
