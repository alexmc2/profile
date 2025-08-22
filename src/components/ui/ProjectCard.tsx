'use client';
import { ProjectType } from '@/lib/types';
import { useTheme } from '@/lib/hooks/use-theme';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  description,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // Determine which image to use
  const imageUrl =
    typeof img === 'string' ? img : isDarkMode ? img.dark : img.light;

  const imageVariants = {
    hidden: { opacity: 0, x: -150, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        type: 'spring' as const,
        damping: 20,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 150, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        delay: 0.1,
        type: 'spring' as const,
        damping: 20,
      },
    },
  };

  return domLoaded ? (
    <motion.div
      {...rest}
      className="max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:flex flex-row lg:items-stretch bg-bg-secondary dark:bg-gray-800/80 rounded-2xl overflow-hidden group transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_8px_20px_rgba(0,0,0,0.3)] border border-slate-200/50 dark:border-0">
        {/* Image Section - Left Box */}
        <motion.div
          variants={imageVariants}
          className="lg:flex-shrink-0 relative"
        >
          <div className="lg:rounded-r-none relative">
            <Image
              src={imageUrl}
              alt={name}
              width={500}
              height={400}
              className="w-auto h-64 lg:h-80 object-contain transition-all duration-500 group-hover:scale-105 rounded-xl shadow-[0_16px_50px_rgba(0,0,0,0.25),0_6px_15px_rgba(0,0,0,0.15)] dark:shadow-none dark:border dark:border-slate-800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none dark:block hidden rounded-xl"></div>
          </div>
        </motion.div>

        {/* Content Section - Right Box */}
        <motion.div variants={contentVariants} className="lg:flex-1">
          <div className="p-6 lg:p-8 h-64 lg:h-80 flex flex-col justify-center">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg lg:text-xl font-bold text-text-primary dark:text-white hover:text-accent transition-colors duration-300 leading-tight">
                  {name}
                </h3>
                <span className="text-xs text-text-secondary bg-accent/10 px-2 py-1 rounded-full shrink-0">
                  {year}
                </span>
              </div>

              {description && (
                <p className="text-text-secondary dark:text-slate-300 leading-relaxed text-sm">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full font-medium hover:bg-accent/30 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/80 text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-accent/25"
                >
                  <span className="font-medium">View Project</span>
                  <Icon icon="ci:external-link" width={14} height={14} />
                </a>
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border border-text-secondary hover:border-accent hover:text-accent px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="font-medium">Code</span>
                  <Icon icon="tabler:brand-github" width={14} height={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout - New Vertical Stack */}
      <div className="lg:hidden flex flex-col bg-bg-secondary dark:bg-gray-800/90 transition-all duration-500 shadow-lg dark:shadow-2xl">
        {/* Mobile Image Section */}
        <motion.div
          variants={imageVariants}
          className="relative w-full overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={name}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Mobile Content Section */}
        <motion.div variants={contentVariants} className="px-8 py-6">
          <div className="space-y-4">
            {/* Title and Year */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-text-primary dark:text-white leading-tight">
                {name}
              </h3>
              <span className="text-xs text-text-secondary dark:text-gray-400 shrink-0 mt-1">
                {year}
              </span>
            </div>

            {/* Description */}
            {description && (
              <p className="text-text-secondary dark:text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2.5 py-1 bg-accent/10 text-accent font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2.5 text-sm font-medium transition-all duration-300"
              >
                <span>View Project</span>
                <Icon icon="ci:external-link" width={16} height={16} />
              </a>
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-text-primary dark:text-white hover:border-accent hover:text-accent dark:hover:text-accent px-4 py-2.5 text-sm font-medium transition-all duration-300"
              >
                <span>Code</span>
                <Icon icon="tabler:brand-github" width={18} height={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
