import { motion } from 'motion/react';

import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Array<{ label: string; color: string }>;
  imageUrl: string;
  featured?: boolean;
  link?: string;
  linkLabel?: string;
}

export function ProjectCard({ title, description, tags, imageUrl, featured = false, link, linkLabel }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="relative bg-[#13141C]/70 backdrop-blur-xl rounded-xl overflow-hidden border border-[#1E2030] hover:border-[#00E5FF]/50 transition-all duration-300">
        {/* Image */}
        <div className="w-full aspect-video relative overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] to-transparent opacity-80"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-2xl font-bold mb-2 text-[#ECEEF4]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h3>
          <p className="text-[#525870] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: `${tag.color}20`,
                  color: tag.color,
                  border: `1px solid ${tag.color}40`,
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* CTA link */}
          {link && linkLabel && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{
                fontFamily: 'var(--font-mono)',
                backgroundColor: `${tags[0]?.color}15`,
                color: tags[0]?.color,
                border: `1px solid ${tags[0]?.color}40`,
              }}
            >
              {linkLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}
