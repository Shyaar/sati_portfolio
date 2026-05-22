import { motion } from 'motion/react';
import { Github, Twitter, Mail } from 'lucide-react';

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
            Let's work together.
          </h2>
          <p
            className="text-lg text-[#525870] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            UI/UX contracts · Frontend builds · Web3 projects · Full-stack product work
          </p>

          <a
            href="mailto:shyaarsati@gmail.com"
            className="inline-flex items-center gap-3 text-2xl lg:text-3xl font-mono text-[#00E5FF] hover:text-[#00FFA3] transition-colors mb-12"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <Mail size={32} />
            shyaarsati@gmail.com
          </a>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Shyaar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00E5FF] transition-colors"
            >
              <Github size={24} className="text-[#ECEEF4]" />
            </a>
            <a
              href="https://x.com/shyaar_xati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00FFA3] transition-colors"
            >
              <Twitter size={24} className="text-[#ECEEF4]" />
            </a>
            <a
              href="https://www.behance.net/satifwatsha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#9D7BFF] transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#ECEEF4]"
              >
                <path d="M7.5 11.25c.69 0 1.25-.56 1.25-1.25S8.19 8.75 7.5 8.75H5v2.5h2.5zm.5 1.5H5v2.75h3c.76 0 1.375-.616 1.375-1.375S8.76 12.75 8 12.75zM22 9.5h-5.5v-1H22v1zM19.25 14c-.138.69-.69 1.25-1.5 1.25-.9 0-1.5-.55-1.5-1.5H21c.03-.25.03-.5.03-.75C21 11 19.5 9.5 17.75 9.5 16 9.5 14.5 11 14.5 12.75S16 16 17.75 16c1.38 0 2.5-.75 2.94-1.875L19.25 14zm-1.5-3.25c.75 0 1.25.5 1.25 1.25h-2.5c0-.75.5-1.25 1.25-1.25zM2 6v12h9.25C13 18 14.5 16.5 14.5 14.75c0-1.25-.75-2.25-1.875-2.75.875-.5 1.375-1.375 1.375-2.375C14 7.75 12.5 6 10.75 6H2z"/>
              </svg>
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
