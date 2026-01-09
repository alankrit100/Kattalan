import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { APP_CONFIG } from '../../data/config';
import { useScrollLock } from '../../hooks/useScrollLock';
import Button from '../ui/Button';
import Container from '../layout/Container';

const Navbar = ({ onOpenConsultation, isDark, toggleTheme }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  useScrollLock(mobileMenu);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#F2F0EB]/90 dark:bg-[#0C0A09]/90 backdrop-blur-md border-b border-stone-200 dark:border-[#292524] transition-colors duration-500">
      <Container className="h-20 md:h-24 flex items-center justify-between">
        <div className="text-3xl font-serif font-bold text-[#0F2620] dark:text-[#E7E5E4] tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          {APP_CONFIG.name}<span className="text-amber-700 dark:text-amber-500">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          {['Collection', 'Materials', 'Philosophy'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-xs font-bold uppercase tracking-widest text-[#2A3F39] dark:text-[#A8A29E] hover:text-[#0F2620] dark:hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-[#1C1917] transition-colors text-[#2A3F39] dark:text-[#A8A29E]">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button onClick={onOpenConsultation} variant="primary" className="px-6 py-3">Inquire</Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 text-[#0F2620] dark:text-[#E7E5E4]">{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>
          <button className="text-[#0F2620] dark:text-[#E7E5E4]" onClick={() => setMobileMenu(true)}><Menu size={24} /></button>
        </div>
      </Container>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-[#F2F0EB] dark:bg-[#0C0A09] p-6 flex flex-col space-y-8 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-serif font-bold text-[#0F2620] dark:text-[#E7E5E4]">{APP_CONFIG.name}.</span>
            <button onClick={() => setMobileMenu(false)} className="text-[#0F2620] dark:text-[#E7E5E4]"><X size={24} /></button>
          </div>
          <div className="flex flex-col space-y-6 pt-8">
            {['Collection', 'Materials', 'Philosophy'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="text-2xl font-serif text-[#0F2620] dark:text-[#E7E5E4]">{item}</a>
            ))}
          </div>
          <Button onClick={() => { onOpenConsultation(); setMobileMenu(false); }} className="mt-auto">Book Consultation</Button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;