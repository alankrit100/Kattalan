import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { APP_CONFIG } from '../../data/config';

const Footer = ({ onConsult }) => (
  <div className="w-full flex flex-col px-6 md:px-12 pt-16 pb-8">
    <div className="flex flex-col lg:flex-row justify-between gap-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-serif text-[#F2F0EB] dark:text-[#E7E5E4]">Let's Build.</h2>
          <p className="text-[#8FA39D] dark:text-[#A8A29E] max-w-xs text-sm leading-relaxed">
            Crafting the foundation for India's next generation of builders, thinkers, and creators.
          </p>
        </div>
        <div className="flex gap-4">
          {[Instagram, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#2F4A40] flex items-center justify-center text-[#F2F0EB] hover:bg-[#F2F0EB] hover:text-[#0F2620] transition-colors"><Icon size={18} /></a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-[#5C6B64] dark:text-[#78716C] text-[10px]">Collection</h4>
          <ul className="space-y-4 text-[#8FA39D] dark:text-[#A8A29E] text-sm font-medium">
            {['Flagship', 'Executive', 'Creative', 'Custom'].map(l => (
              <li key={l}><a href="#" className="hover:text-amber-500 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-[#5C6B64] dark:text-[#78716C] text-[10px]">Contact</h4>
          <p className="text-[#E2E8E6] dark:text-[#E7E5E4] text-2xl font-serif">{APP_CONFIG.phone}</p>
          <button onClick={onConsult} className="text-[#F2F0EB] dark:text-[#E7E5E4] border-b border-[#F2F0EB] dark:border-[#E7E5E4] pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:text-amber-500 hover:border-amber-500 transition-colors">Book Consultation</button>
        </div>
      </div>
    </div>
    <div className="mt-16 flex flex-col md:flex-row justify-between items-end md:items-center text-[10px] uppercase tracking-widest text-[#5C6B64] dark:text-[#57534E] border-t border-[#1F3A30] dark:border-[#292524] pt-8">
      <span>© {APP_CONFIG.copyrightYear} {APP_CONFIG.name}</span>
      <span>Made in India</span>
    </div>
  </div>
);
export default Footer;