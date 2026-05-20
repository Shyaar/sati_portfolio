import { motion } from 'motion/react';
import {
  Figma,
  Palette,
  Users,
  Code,
  FileCode,
  Zap,
  Blocks,
  Lock,
  Wallet,
} from 'lucide-react';

const stack = [
  {
    category: 'UI/UX Design',
    color: '#00E5FF',
    tools: [
      { name: 'Figma', icon: Figma },
      { name: 'Design Systems', icon: Palette },
      { name: 'User Research', icon: Users },
    ],
  },
  {
    category: 'Frontend',
    color: '#00FFA3',
    tools: [
      { name: 'React', icon: Code },
      { name: 'Next.js', icon: FileCode },
      { name: 'TypeScript', icon: Code },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Motion', icon: Zap },
    ],
  },
  {
    category: 'Blockchain',
    color: '#9D7BFF',
    tools: [
      { name: 'Solana', icon: Blocks },
      { name: 'Solidity', icon: Lock },
      { name: 'Rust', icon: Code },
      { name: 'Web3 Wallets', icon: Wallet },
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Radial gradient bloom */}
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #00FFA3 0%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#ECEEF4]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            My Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: category.color,
                }}
              >
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: '#ECEEF4',
                      }}
                    >
                      <tool.icon
                        size={20}
                        className="text-[#060608] transition-all duration-300"
                        style={{
                          color: category.color,
                        }}
                      />
                    </div>
                    <span
                      className="text-[#ECEEF4] group-hover:text-white transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
