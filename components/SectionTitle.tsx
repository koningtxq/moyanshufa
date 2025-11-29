import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'items-start text-left' : align === 'right' ? 'items-end text-right' : 'items-center text-center';
  
  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      <h2 className="text-3xl font-serif text-ink-black font-bold tracking-widest mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-seal-red rounded-full opacity-80"></span>
      </h2>
      <p className="text-ink-grey text-sm font-serif italic mt-3 tracking-widest uppercase opacity-70">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;