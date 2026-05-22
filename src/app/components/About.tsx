import { motion } from 'motion/react';

const credentials = [
  {
    category: 'UI/UX',
    color: '#00E5FF',
    skills: ['Figma', 'Design Systems', 'User Research'],
  },
  {
    category: 'Frontend',
    color: '#00FFA3',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    category: 'Blockchain',
    color: '#9D7BFF',
    skills: ['Solana', 'Solidity', 'Rust', 'Web3 UX'],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Radial gradient bloom */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar/Identity mark */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-96 h-[28rem] rounded-2xl bg-gradient-to-br from-[#00E5FF] via-[#00FFA3] to-[#9D7BFF] p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Shyaar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Floating orbs */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#00E5FF] opacity-60 blur-sm"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-[#9D7BFF] opacity-40 blur-sm"
              ></motion.div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#ECEEF4] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About
            </h2>
            <p
              className="text-lg text-[#ECEEF4] mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              I'm Shyaar — a UI/UX designer, frontend engineer, and blockchain developer. I've spent
              time at the intersection of great product design and decentralized technology, building
              interfaces that are both beautiful and functional.
            </p>
            <p
              className="text-lg text-[#525870] mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Currently at Blockfuse Labs, where I also teach HTML & CSS to the next generation of
              developers.
            </p>

            {/* Credentials grid */}
            <div className="space-y-4">
              {credentials.map((cred) => (
                <div key={cred.category} className="flex gap-4">
                  <div
                    className="px-4 py-2 rounded-lg font-bold min-w-[140px] text-center"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: `${cred.color}20`,
                      color: cred.color,
                      border: `1px solid ${cred.color}40`,
                    }}
                  >
                    {cred.category}
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    {cred.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[#ECEEF4]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
