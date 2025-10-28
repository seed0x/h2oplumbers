'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CompactHeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  breadcrumbs?: Array<{ label: string; href?: string; }>;
}

export function CompactHeroSection({
  title,
  subtitle,
  backgroundImage = '/images/all-county-hero-bg.jpg',
  className = '',
  breadcrumbs
}: CompactHeroSectionProps) {
  return (
    <section className={cn(
      "relative py-20 lg:py-24 flex items-center justify-center overflow-hidden",
      "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900",
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30c0-16.569 13.431-30 30-30v30H30z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <ol className="flex justify-center items-center space-x-2 text-blue-200">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                  {breadcrumb.href ? (
                    <a href={breadcrumb.href} className="hover:text-white transition-colors">
                      {breadcrumb.label}
                    </a>
                  ) : (
                    <span className="text-white">{breadcrumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-blue-300">›</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-secondary-100 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

