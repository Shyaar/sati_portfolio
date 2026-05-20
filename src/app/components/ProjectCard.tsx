import { motion } from 'motion/react';

import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Array<{ label: string; color: string }>;
  imageUrl: string;
  featured?: boolean;
}

export function ProjectCard({ title, description, tags, imageUrl, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`group relative ${featured ? 'md:col-span-2' : ''}`}
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
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}
