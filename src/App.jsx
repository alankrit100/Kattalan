import React, { useState, useEffect } from 'react';

// Sections
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import ProductReel from './components/sections/ProductReel';
import Philosophy from './components/sections/Philosophy';
import Footer from './components/sections/Footer';

// Layout & UI
import BackgroundNoise from './components/layout/BackgroundNoise';
import { StickyCard, FooterStickyCard } from './components/layout/StickyCard';

// Modals
import ProductModal from './components/modals/ProductModal';
import ConsultationModal from './components/modals/ConsultationModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`font-sans transition-colors duration-700 ${isDark ? 'bg-[#0C0A09] text-[#E7E5E4]' : 'bg-[#F2F0EB] text-[#0F2620]'} min-h-screen relative overflow-x-hidden selection:bg-amber-500 selection:text-white`}>
      <BackgroundNoise isDark={isDark} />
      
      <Navbar 
        onOpenConsultation={() => setIsConsultationOpen(true)} 
        isDark={isDark} 
        toggleTheme={() => setIsDark(!isDark)} 
      />
      
      <main className="relative z-10">
        <div className="relative w-full">
          <Hero />
          
          <StickyCard index={10} bgColorClass="bg-[#EAE8E4] dark:bg-[#1C1917]" className="!p-0 overflow-hidden">
             <Features />
          </StickyCard>

          <StickyCard index={20} bgColorClass="bg-[#F2F0EB] dark:bg-[#0C0A09]">
             <ProductReel onProductSelect={setSelectedProduct} />
          </StickyCard>

          {/* <StickyCard index={30} bgColorClass="bg-[#EAE8E4] dark:bg-[#1C1917]" className="text-[#0F2620] dark:text-[#F2F0EB]">
              <Philosophy onConsult={() => setIsConsultationOpen(true)} />
          </StickyCard> */}

          <FooterStickyCard index={40} bgColorClass="bg-[#071410] dark:bg-[#000000]">
             <Footer onConsult={() => setIsConsultationOpen(true)} />
          </FooterStickyCard>
        </div>
      </main>

      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}