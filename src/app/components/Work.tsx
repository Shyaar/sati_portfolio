import { useState } from 'react';
import type { ComponentProps } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { uiuxProjects } from './projects/uiux';
import { frontendProjects } from './projects/frontend';
import { blockchainProjects } from './projects/blockchain';

type Tab = 'UI/UX' | 'Frontend' | 'Blockchain';

const tabs: { id: Tab; color: string }[] = [
  { id: 'UI/UX', color: '#00E5FF' },
  { id: 'Frontend', color: '#00FFA3' },
  { id: 'Blockchain', color: '#9D7BFF' },
];

const projects: Record<Tab, ComponentProps<typeof ProjectCard>[]> = {
  'UI/UX': uiuxProjects,
  Frontend: frontendProjects,
  Blockchain: blockchainProjects,
};

export function Work() {
  const [activeTab, setActiveTab] = useState<Tab>('UI/UX');

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

        {/* Tabs row */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-2">
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

          <Link
            to="/works"
            className="flex items-center gap-2 text-sm font-semibold text-[#525870] hover:text-[#ECEEF4] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            View All Works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Project grid — 1 featured + first 2 non-featured */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              ...projects[activeTab].filter((p) => p.featured).slice(0, 1),
              ...projects[activeTab].filter((p) => !p.featured).slice(0, 2),
            ].map((project, index) => (
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
