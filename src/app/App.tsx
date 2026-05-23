import { Routes, Route } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ThreePillars } from './components/ThreePillars';
import { Work } from './components/Work';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CircuitLine } from './components/CircuitLine';
import { WorksPage } from './pages/WorksPage';

function HomePage() {
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
      <Hero />
      <CircuitLine color="#00E5FF" />
      <ThreePillars />
      <CircuitLine color="#00FFA3" />
      <Work />
      <CircuitLine color="#9D7BFF" />
      <About />
      <CircuitLine color="#00E5FF" />
      <Stack />
      <Testimonials />

      {/* Teaching strip */}
      <section className="py-12 px-6 lg:px-8 border-y border-[#1E2030] bg-[#0C0D12]/50 relative">
        <CircuitLine color="#9D7BFF" />
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 py-8">
          <div className="w-10 h-10 rounded-lg bg-[#00FFA3]/20 border border-[#00FFA3]/40 flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#00FFA3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <p className="text-[#ECEEF4]" style={{ fontFamily: 'var(--font-body)' }}>
            Currently teaching HTML & CSS at{' '}
            <span className="text-[#00FFA3] font-medium">Blockfuse Labs</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
    
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
      <Analytics />
    </>
  );
}