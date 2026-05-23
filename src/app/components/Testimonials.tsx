import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    quote:
      "Shyaar designed our website and honestly just got the vibe immediately. We didn't have to explain Web3 aesthetics to him — he already lived it. The result was clean, fast, and looked exactly like what a serious blockchain company should look like. Would work with him again without thinking twice.",
    name: 'Peter',
    role: 'CEO, Blockfuse Labs',
    color: '#00E5FF',
  },
  {
    quote:
      "We needed something that felt high-stakes but still easy to use, that's a harder balance than it sounds. Shyaar nailed it. The UI felt polished from day one and our users actually commented on how smooth the experience was. Dude knows Web3 UX in a way most designers don't.",
    name: 'Victor',
    role: 'Founder, SPL Betting dApp',
    color: '#9D7BFF',
  },
  {
    quote:
      "From the first wireframe, Shyaar understood exactly what Pyde needed to feel; minimal, intentional, and trustworthy. He brought a design sensibility that matched our product vision without needing constant back-and-forth. The final product speaks for itself.",
    name: 'Tali',
    role: 'Founder, Pyde',
    color: '#00FFA3',
  },
  {
    quote:
      "The BSEMA platform required something that conveyed authority and clarity, for citizens and government officials alike. Shyaar delivered a clean, accessible, and professional interface that reflected the seriousness of emergency management work. Exactly what we needed.",
    name: 'Sir James Aondoakaa Iorpuu',
    role: 'Executive Secretary, Benue State Emergency Management Agency (BSEMA)',
    color: '#00E5FF',
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const perPage = 2;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  function go(dir: number) {
    setDirection(dir);
    setPage((p) => (p + dir + totalPages) % totalPages);
  }

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-[#0C0D12]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9D7BFF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading + controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p
              className="text-sm text-[#525870] uppercase tracking-widest mb-3"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Client Feedback
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#ECEEF4]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What clients say.
            </h2>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center text-[#525870] hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="text-[#525870] text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-lg bg-[#13141C] border border-[#1E2030] flex items-center justify-center text-[#525870] hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 gap-6"
            >
              {visible.map((t, i) => (
                <div
                  key={i}
                  className="group relative bg-[#13141C] rounded-xl p-8 border border-[#1E2030] transition-all duration-300 hover:border-[#1E2030]"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${t.color}40`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 32px ${t.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#1E2030';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
                  />

                  <StarRow />

                  <p
                    className="text-[#ECEEF4] leading-relaxed mb-8 text-[15px]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    "{t.quote}"
                  </p>

                  <div className="pt-6 border-t border-[#1E2030]">
                    <p
                      className="text-[#ECEEF4] font-medium text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[#525870] text-xs mt-0.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ background: i === page ? '#00E5FF' : '#1E2030' }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
