import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ClientProject, PortfolioCategory, siteConfig } from '../config/siteConfig';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { ResponsiveImage } from './MotionPrimitives';
import { usePointerCapabilities } from '../hooks/usePointerCapabilities';

interface PortfolioSectionProps {
  activeCategory: PortfolioCategory;
  onCategoryChange: (category: PortfolioCategory) => void;
  onOpenProject: (project: ClientProject) => void;
}

interface ProjectCardProps {
  project: ClientProject;
  onOpen: (project: ClientProject) => void;
  enableHoverTilt: boolean;
  prefersReducedMotion: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpen,
  enableHoverTilt,
  prefersReducedMotion,
}) => {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const { language } = usePreferences();
  const t = translations[language];
  const localized = t.portfolioSection.projects[project.id];
  const localizedCategory = t.portfolioSection.categories[project.category];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!enableHoverTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 3, ry: px * 3 });
  };

  const handleMouseLeave = () => {
    if (!enableHoverTilt) return;
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <motion.article
      layout={!prefersReducedMotion}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      style={
        enableHoverTilt
          ? {
              transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: 'transform 160ms cubic-bezier(0.16, 1, 0.3, 1)',
            }
          : undefined
      }
      className="group rounded-[var(--radius-lg)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] overflow-hidden hover:border-[var(--color-outline)] transition-colors"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="flex h-full w-full flex-col text-left cursor-pointer"
        aria-label={`${t.portfolioSection.viewCaseStudy}: ${localized.title}`}
      >
        <div className="aspect-[4/3] w-full overflow-hidden border-b border-[var(--color-outline-variant)] bg-[var(--color-surface-container)]">
          <ResponsiveImage
            src={project.image}
            alt={project.imageAlt}
            title={localized.title}
            className="h-full w-full"
            imgClassName={
              enableHoverTilt
                ? 'transition-transform duration-300 group-hover:scale-[1.03]'
                : ''
            }
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--color-on-surface-variant)]">
              <span className="font-semibold text-[var(--color-primary)]">
                {localizedCategory}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.client}</span>
            </div>

            <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.02em] text-[var(--color-on-surface)]">
              {localized.title}
            </h3>

            <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
              {localized.summary}
            </p>
          </div>

          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">
            <span>{t.portfolioSection.viewCaseStudy}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
        </div>
      </button>
    </motion.article>
  );
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  activeCategory,
  onCategoryChange,
  onOpenProject,
}) => {
  const { hasFinePointer, prefersReducedMotion } = usePointerCapabilities();
  const { language } = usePreferences();
  const t = translations[language];
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? siteConfig.projects
      : siteConfig.projects.filter((project) => project.category === activeCategory);

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      id="work"
      className="py-16 md:py-22 bg-[var(--color-background)] border-b border-[var(--color-outline-variant)]"
    >
      <div className="container-hyde">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.04em] text-[var(--color-primary)]">
              {t.portfolioSection.eyebrow}
            </p>
            <h2 className="section-heading-type mt-2 text-[var(--color-on-surface)]">
              {t.portfolioSection.heading}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label={t.portfolioSection.filterAriaLabel}
            className="flex flex-wrap items-center gap-1 rounded-[var(--radius-md)] bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] p-1"
          >
            {siteConfig.portfolioCategories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onCategoryChange(category)}
                  className={`relative min-h-[42px] px-3 py-1.5 text-xs md:text-sm font-medium rounded-[var(--radius-sm)] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'text-[var(--hyde-ink)]'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="portfolioFilterIndicator"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0.01 }
                          : { type: 'spring', stiffness: 420, damping: 32 }
                      }
                      className="absolute inset-0 rounded-[var(--radius-sm)] bg-[var(--hyde-volt)] border border-[var(--hyde-ink)]/15"
                    />
                  )}
                  <span className="relative z-10">
                    {t.portfolioSection.categories[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Swipe Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar"
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="w-[calc(100vw-2.5rem)] max-w-[360px] shrink-0 snap-start">
                <ProjectCard
                  project={project}
                  onOpen={onOpenProject}
                  enableHoverTilt={false}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length > 1 && (
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-[var(--color-on-surface-variant)]">
                {t.portfolioSection.swipeHint}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel('prev')}
                  aria-label="Previous project"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] text-[var(--color-on-surface)]"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('next')}
                  aria-label="Next project"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] text-[var(--color-on-surface)]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tablet & Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
              enableHoverTilt={hasFinePointer && !prefersReducedMotion}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
