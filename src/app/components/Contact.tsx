import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-8 relative overflow-hidden bg-[#0C0D12]"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#ECEEF4] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Hire me. For any of it.
          </h2>
          <p
            className="text-lg text-[#525870] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            UI/UX contracts · Frontend builds · Web3 projects · Full-stack product work
          </p>

          <a
            href="mailto:hello@shyaar.com"
            className="inline-flex items-center gap-3 text-2xl lg:text-3xl font-mono text-[#00E5FF] hover:text-[#00FFA3] transition-colors mb-12"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <Mail size={32} />
            hello@shyaar.com
          </a>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/shyaar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00E5FF] transition-colors"
            >
              <Github size={24} className="text-[#ECEEF4]" />
            </a>
            <a
              href="https://twitter.com/shyaar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00FFA3] transition-colors"
            >
              <Twitter size={24} className="text-[#ECEEF4]" />
            </a>
            <a
              href="https://linkedin.com/in/shyaar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#9D7BFF] transition-colors"
            >
              <Linkedin size={24} className="text-[#ECEEF4]" />
            </a>
          </div>

          {/* Three glowing dots */}
          <div className="flex justify-center gap-3">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-[#00E5FF]"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.66 }}
              className="w-3 h-3 rounded-full bg-[#00FFA3]"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.33 }}
              className="w-3 h-3 rounded-full bg-[#9D7BFF]"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
