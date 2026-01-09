import React from 'react';

const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
  const baseStyle = "group px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative overflow-hidden flex items-center justify-center gap-3 cursor-pointer";
  const variants = {
    primary: "btn-cool-primary bg-[#0F2620] dark:bg-[#E7E5E4] text-[#F2F0EB] dark:text-[#0C0A09] shadow-xl hover:shadow-2xl",
    outline: "btn-cool-outline bg-transparent border border-[#2F4A40] dark:border-[#57534E] text-[#0F2620] dark:text-[#E7E5E4] hover:border-[#0F2620] dark:hover:border-white",
    ghost: "text-[#0F2620] dark:text-[#E7E5E4] hover:bg-black/5 dark:hover:bg-white/5 border-none shadow-none"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{Icon && <Icon size={16} />}{children}</span>
    </button>
  );
};
export default Button;