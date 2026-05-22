import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { ProjectCard } from '../components/ProjectCard';
import { uiuxProjects } from '../components/projects/uiux';
import { frontendProjects } from '../components/projects/frontend';
import { blockchainProjects } from '../components/projects/blockchain';

type Category = 'UI/UX' | 'Frontend' | 'Blockchain';

const categories: { id: Category; color: string; count: number }[] = [
  { id: 'UI/UX', color: '#00E5FF', count: uiuxProjects.length },
  { id: 'Frontend', color: '#00FFA3', count: frontendProjects.length },
  { id: 'Blockchain', color: '#9D7BFF', count: blockchainProjects.length },
];

const allProjects: Record<Category, typeof uiuxProjects> = {
  'UI/UX': uiuxProjects,
  Frontend: frontendProjects,
  Blockchain: blockchainProjects,
};

export function WorksPage() {
  const [active, setActive] = useState<Category>('UI/UX');
  const projects = allProjects[active];

  return (
    <div className="min-h-screen bg-[#060608] relative overflow-x-hidden">
      {/* Noise grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      <Navigation />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h1
            className="text-5xl lg:text-6xl font-bold text-[#ECEEF4] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            All Works
          </h1>
          <p className="text-[#525870] text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Every project across design, development, and blockchain
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left sidebar nav */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-28 flex flex-row lg:flex-col gap-3">
              {categories.map((cat) => {
                const isActive = active === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer w-full text-left"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: isActive ? cat.color : '#525870',
                      backgroundColor: isActive ? `${cat.color}12` : 'transparent',
                      border: `1px solid ${isActive ? `${cat.color}40` : '#1E2030'}`,
                    }}
                  >
                    <span>{cat.id}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: isActive ? `${cat.color}20` : '#1E2030',
                        color: isActive ? cat.color : '#525870',
                      }}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Project grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                    className={project.featured ? 'md:col-span-2' : ''}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
