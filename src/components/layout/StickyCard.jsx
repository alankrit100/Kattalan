import React from 'react';

export const StickyCard = ({ children, index, bgColorClass = 'bg-white', className = '' }) => (
  <div 
    className={`sticky top-0 w-full min-h-screen flex flex-col pt-24 md:pt-32 pb-12 shadow-[0_-20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_60px_rgba(0,0,0,0.5)] rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-white/10 ${bgColorClass} ${className}`}
    style={{ zIndex: index }}
  >
    {children}
  </div>
);

export const FooterStickyCard = ({ children, index, bgColorClass, className = '' }) => (
  <div 
    className={`sticky top-0 w-full h-auto flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_60px_rgba(0,0,0,0.5)] rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-white/10 ${bgColorClass} ${className}`}
    style={{ zIndex: index }}
  >
    {children}
  </div>
);