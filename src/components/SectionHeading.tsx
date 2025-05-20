
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className 
}) => {
  return (
    <div className={cn(
      'mb-12', 
      centered ? 'text-center' : '', 
      className
    )}>
      <h2 className={cn(
        'text-3xl md:text-4xl font-serif font-medium section-heading',
        centered ? 'mx-auto after:left-1/2 after:-translate-x-1/2' : ''
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
