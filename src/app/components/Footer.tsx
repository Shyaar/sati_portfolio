import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-[#1E2030] relative overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="w-full h-full animate-gradient-x bg-gradient-to-r from-[#00E5FF] via-[#00FFA3] via-[#9D7BFF] to-[#00E5FF] bg-[length:200%_100%]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-lg font-bold text-[#ECEEF4]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SHYAAR
          </Link>
          <span className="text-[#525870]" style={{ fontFamily: 'var(--font-body)' }}>
            © 2025
          </span>
        </div>

        <span className="text-[#525870]" style={{ fontFamily: 'var(--font-body)' }}>
          Designed & Built in Web3 Era
        </span>
      </div>
    </footer>
  );
}
