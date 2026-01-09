import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import ImageWithFallback from '../ui/ImageWithFallback';

const Hero = () => {
  return (
    <div className="relative z-0 min-h-screen">
      <style>{`
        @keyframes subtle-reveal {
          0% {
            opacity: 0;
            transform: translateY(15px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-reveal {
          animation: subtle-reveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <Container>
          <div className="grid md:grid-cols-12 gap-12 items-center w-full">
            <div className="md:col-span-7 space-y-8 relative z-10">
              
              <div className="inline-flex items-center gap-2 border-b border-stone-300 dark:border-[#292524] pb-1">
                <Star size={12} className="text-amber-700 dark:text-amber-500 fill-amber-700 dark:fill-amber-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#5C6B64] dark:text-[#A8A29E]">Premium Workstations</span>
              </div>

              {/* UPDATED HEADLINE ANIMATION:
                 1. We removed the <br/> and used 'block' on spans instead.
                 2. "Solid Wood" appears instantly (Delay 0s).
                 3. "Steady Work" appears slightly later (Delay 0.15s).
              */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0F2620] dark:text-[#E7E5E4] leading-[0.95] transition-colors duration-500">
                <span className="block animate-reveal" style={{ animationDelay: '0s' }}>
                  Built to Work,
                </span>
                <span className="block italic text-[#2F4A40] dark:text-[#78716C] animate-reveal" style={{ animationDelay: '0.15s' }}>
                  Not to wobble..
                </span>
              </h1>

              <p 
                className="text-lg md:text-xl text-[#2F4A40] dark:text-[#A8A29E] leading-relaxed max-w-lg  transition-colors duration-500 animate-reveal font-normal"
                style={{ animationDelay: '0.3s' }}
              >
                Solid wood workstations engineered for 8–10 hour workdays.
                Custom-sized for small rooms. Delivered ready to work.
              </p>

              {/* Buttons also get a slight delay so they anchor the bottom */}
              <div 
                className="flex flex-col sm:flex-row gap-6 pt-4 animate-reveal"
                style={{ animationDelay: '0.5s' }}
              >
                <Button onClick={() => document.getElementById('products-anchor').scrollIntoView()} variant="primary" icon={ArrowRight}>See desks and pricing</Button>
                <Button onClick={() => document.getElementById('about').scrollIntoView()} variant="outline">Why Kattalan?</Button>
              </div>
            </div>
            
            <div className="md:col-span-5 relative mt-8 md:mt-0">
                {/* Image gets a very slow reveal to act as a backdrop */}
                <div className="aspect-[4/5] bg-stone-200 dark:bg-[#1C1917] relative overflow-hidden shadow-2xl transition-all duration-700 group rounded-t-full animate-reveal" style={{ animationDelay: '0.2s' }}>
                  <ImageWithFallback src="b11f8f3f-5286-46c6-a93c-25093804b1a7.jpg" alt="Modern Home Office" className="w-full h-full object-cover grayscale-[10%] dark:grayscale-[30%] sepia-[10%] contrast-105 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Hero;