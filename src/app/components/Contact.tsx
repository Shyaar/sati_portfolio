import { motion } from 'motion/react';
import { Github, Mail } from 'lucide-react';

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

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* GitHub */}
            <a
              href="https://github.com/Shyaar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00E5FF] transition-colors"
              title="GitHub"
            >
              <Github size={22} className="text-[#ECEEF4]" />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/shyaar_xati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00FFA3] transition-colors"
              title="X"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#ECEEF4]">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.213 5.658 5.95-5.658zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Behance */}
            <a
              href="https://www.behance.net/satifwatsha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#9D7BFF] transition-colors"
              title="Behance"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#ECEEF4]">
                <path d="M7.5 11.25c.69 0 1.25-.56 1.25-1.25S8.19 8.75 7.5 8.75H5v2.5h2.5zm.5 1.5H5v2.75h3c.76 0 1.375-.616 1.375-1.375S8.76 12.75 8 12.75zM22 9.5h-5.5v-1H22v1zM19.25 14c-.138.69-.69 1.25-1.5 1.25-.9 0-1.5-.55-1.5-1.5H21c.03-.25.03-.5.03-.75C21 11 19.5 9.5 17.75 9.5 16 9.5 14.5 11 14.5 12.75S16 16 17.75 16c1.38 0 2.5-.75 2.94-1.875L19.25 14zm-1.5-3.25c.75 0 1.25.5 1.25 1.25h-2.5c0-.75.5-1.25 1.25-1.25zM2 6v12h9.25C13 18 14.5 16.5 14.5 14.75c0-1.25-.75-2.25-1.875-2.75.875-.5 1.375-1.375 1.375-2.375C14 7.75 12.5 6 10.75 6H2z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/shyaar_sati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00E5FF] transition-colors"
              title="Telegram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#ECEEF4]">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349137682828"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#00FFA3] transition-colors"
              title="WhatsApp"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#ECEEF4]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center hover:border-[#9D7BFF] transition-colors"
              title="Discord: _xharles"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#ECEEF4]">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.12 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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
