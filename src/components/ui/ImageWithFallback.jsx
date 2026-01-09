import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  // Assumes images are in the /public folder
  const imagePath = src.startsWith('http') ? src : `/${src}`;

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#E8E6E1] dark:bg-[#1C1917] border border-transparent dark:border-[#292524] transition-colors overflow-hidden relative ${className}`}>
        <span className="font-serif italic text-stone-500 dark:text-[#78716C] text-xs px-4 text-center relative z-10">{alt}</span>
      </div>
    );
  }
  return <img src={imagePath} alt={alt} className={className} onError={() => setError(true)} loading="lazy" />;
};
export default ImageWithFallback;