import React from 'react';
import Container from '../layout/Container';
import ImageWithFallback from '../ui/ImageWithFallback';

const Philosophy = ({ onConsult }) => {
  return (
    <div className="flex-grow flex items-center relative overflow-hidden" id="about">
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E2E8E6] dark:from-[#292524] to-transparent pointer-events-none transition-colors duration-700 opacity-50 dark:opacity-100"></div>
       <Container>
         <div className="grid md:grid-cols-2 gap-16 relative z-10 items-center">
           <div className="order-2 md:order-1">
             <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">We were tired of <br/><span className="italic text-[#5C6B64] dark:text-[#78716C]">disposable</span> furniture.</h2>
             <div className="space-y-6 text-lg font-light text-[#2F4A40] dark:text-[#A8A29E] leading-relaxed">
               <p>Most desks today are made of compressed sawdust and glue, designed to fail in three years so you have to buy another one.</p>
               <p>Kattalan exists to break that cycle. We build honest furniture using solid Indian timber and architectural steel. Heavy. Permanent. Yours.</p>
               <div className="pt-8">
                 <button onClick={onConsult} className="text-[#0F2620] dark:text-[#E7E5E4] text-xs font-bold uppercase tracking-[0.2em] border-b border-[#2F4A40] dark:border-[#57534E] pb-2 hover:text-amber-500 hover:border-amber-500 transition-colors">Read our full manifesto</button>
               </div>
             </div>
           </div>
           <div className="relative aspect-[4/5] bg-stone-200 dark:bg-black order-1 md:order-2 border border-stone-300 dark:border-[#292524]">
              <ImageWithFallback src="craftsmanship.jpg" alt="Craftsmanship" className="w-full h-full object-cover grayscale-[10%] dark:opacity-60 dark:grayscale-[50%]" />
           </div>
         </div>
       </Container>
    </div>
  );
};
export default Philosophy;
