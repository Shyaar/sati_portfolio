import { motion } from 'motion/react';
import { Figma, Code, Boxes } from 'lucide-react';

const pillars = [
  {
    title: 'UI/UX Design',
    color: '#00E5FF',
    glowColor: 'rgba(0, 229, 255, 0.3)',
    icon: Figma,
    skills: ['Research', 'Wireframes', 'Figma', 'Design Systems', 'Prototyping'],
    cta: 'Hire for Design',
  },
  {
    title: 'Frontend Engineering',
    color: '#00FFA3',
    glowColor: 'rgba(0, 255, 163, 0.3)',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Performance'],
    cta: 'Hire for Frontend',
  },
  {
    title: 'Blockchain Dev',
    color: '#9D7BFF',
    glowColor: 'rgba(157, 123, 255, 0.3)',
    icon: Boxes,
    skills: ['Solidity', 'Rust', 'Solana', 'dApp UX', 'Wallet Integration'],
    cta: 'Hire for Web3',
  },
];

export function ThreePillars() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Radial gradient bloom */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #00FFA3 0%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glass card */}
              <div
                className="relative bg-[#13141C]/70 backdrop-blur-xl rounded-xl p-8 border-t-2 transition-all duration-300"
                style={{
                  borderTopColor: pillar.color,
                  boxShadow: `0 0 40px ${pillar.glowColor}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: `${pillar.color}20`,
                    border: `1px solid ${pillar.color}40`,
                  }}
                >
                  <pillar.icon size={28} style={{ color: pillar.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: pillar.color,
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Skills */}
                <div className="space-y-2 mb-6">
                  {pillar.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-[#ECEEF4] text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-4"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: pillar.color,
                  }}
                >
                  {pillar.cta}
                  <span>→</span>
                </a>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 60px ${pillar.glowColor}`,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
