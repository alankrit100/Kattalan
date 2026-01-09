import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { useScrollLock } from '../../hooks/useScrollLock';
import { APP_CONFIG } from '../../data/config';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import ImageWithFallback from '../ui/ImageWithFallback';

const ProductModal = ({ product, isOpen, onClose }) => {
  useScrollLock(isOpen);
  const [size, setSize] = useState(null);
  const [finish, setFinish] = useState(null);

  useEffect(() => {
    if (product) {
      setSize(product.sizes[0]);
      setFinish(product.finishes[0]);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#0F2620]/80 dark:bg-black/90 backdrop-blur-sm transition-all" onClick={onClose} />
      <div className="relative bg-[#F2F0EB] dark:bg-[#0C0A09] border dark:border-[#292524] w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 text-[#5C6B64] dark:text-[#A8A29E] hover:text-[#0F2620] dark:hover:text-[#E7E5E4] transition-colors bg-white/50 dark:bg-black/50 p-2 rounded-full backdrop-blur"><X size={24} /></button>
        <div className="w-full md:w-1/2 bg-[#E8E6E1] dark:bg-[#1C1917] relative min-h-[40vh]">
          <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto">
           <div className="mb-10">
            <Badge className="border-amber-700 dark:border-amber-500 text-amber-700 dark:text-amber-500 mb-3">{product.category}</Badge>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0F2620] dark:text-[#E7E5E4] mb-4">{product.name}</h2>
            <p className="text-2xl font-serif text-[#5C6B64] dark:text-[#A8A29E] mb-6 italic">{product.price}</p>
            <p className="text-[#2F4A40] dark:text-[#A8A29E] leading-relaxed font-light text-lg">{product.description}</p>
          </div>
           <div className="space-y-8 border-t border-stone-300 dark:border-[#292524] pt-8">
             <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2620] dark:text-[#E7E5E4] mb-3">Dimensions</label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)} className={`px-5 py-3 text-xs font-medium border transition-all ${size === s ? 'border-[#0F2620] dark:border-[#E7E5E4] bg-[#0F2620] dark:bg-[#E7E5E4] text-[#F2F0EB] dark:text-[#0C0A09]' : 'border-stone-300 dark:border-[#292524] text-[#2F4A40] dark:text-[#A8A29E] hover:border-[#0F2620] dark:hover:border-[#E7E5E4]'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
             <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2620] dark:text-[#E7E5E4] mb-3">Wood Colour</label>
              <div className="flex flex-wrap gap-3">
                {product.finishes.map(f => (
                  <button key={f} onClick={() => setFinish(f)} className={`px-5 py-3 text-xs font-medium border transition-all ${finish === f ? 'border-[#0F2620] dark:border-[#E7E5E4] bg-[#0F2620] dark:bg-[#E7E5E4] text-[#F2F0EB] dark:text-[#0C0A09]' : 'border-stone-300 dark:border-[#292524] text-[#2F4A40] dark:text-[#A8A29E] hover:border-[#0F2620] dark:hover:border-[#E7E5E4]'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
             <div className="pt-4">
              <Button onClick={() => window.open(`https://wa.me/${APP_CONFIG.whatsapp}?text=Inquiry: ${product.name} (${size}, ${finish})`, '_blank')} variant="primary" className="w-full" icon={MessageCircle}>Request Custom Quote</Button>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;