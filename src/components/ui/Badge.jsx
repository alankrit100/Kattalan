import React from 'react';

const Badge = ({ children, className = '' }) => (
  <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${className}`}>
    {children}
  </span>
);
export default Badge;