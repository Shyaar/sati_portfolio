import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 relative overflow-hidden bg-[#060608]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #ECEEF4 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      ></div>

      {/* Vertical Pillars Visualization */}
      <div className="hidden lg:flex absolute right-[10%] top-0 h-[120%] z-0 pointer-events-none gap-6 lg:gap-10">
        {/* Cyan Pillar */}
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-16 lg:w-24 xl:w-32 h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 229, 255, 0.45) 0%, rgba(0, 229, 255, 0) 70%)',
          }}
        />
        {/* Green Pillar */}
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
          className="w-16 lg:w-24 xl:w-32 h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 255, 163, 0.45) 0%, rgba(0, 255, 163, 0) 70%)',
          }}
        />
        {/* Purple Pillar */}
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="w-16 lg:w-24 xl:w-32 h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(157, 123, 255, 0.45) 0%, rgba(157, 123, 255, 0) 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 mt-20 lg:mt-0">
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)', color: '#00E5FF' }}
            >
              UI/UX Designer.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)', color: '#00FFA3' }}
            >
              Frontend<br />Engineer.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)', color: '#9D7BFF' }}
            >
              Blockchain<br />Developer.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-[#525870] max-w-xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I design, build, and ship — from pixel-perfect interfaces to on-chain applications. One
            person. Full stack. All three.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4"
          >
            <a
              href="#work"
              className="px-6 py-3 bg-gradient-to-r from-[#00E5FF] via-[#00FFA3] to-[#9D7BFF] text-[#060608] font-medium rounded-lg hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#1E2030] bg-transparent text-[#ECEEF4] font-medium rounded-lg hover:border-[#525870] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
