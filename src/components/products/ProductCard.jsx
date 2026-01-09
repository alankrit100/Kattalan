import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ImageWithFallback from '../ui/ImageWithFallback';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="group cursor-pointer flex flex-col gap-5 w-full"
    >
      {/* IMAGE */}
      <div className="relative aspect-square bg-[#E8E6E1] dark:bg-[#1C1917] overflow-hidden border border-transparent transition-all duration-500 hover:shadow-2xl dark:hover:border-[#44403C]">
        {product.isNew && (
          <div className="absolute top-0 right-0 z-20 p-3">
            <div className="bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 flex items-center gap-1 shadow-lg">
              <Sparkles size={10} fill="currentColor" /> New
            </div>
          </div>
        )}

        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* HOVER CTA (desktop only, simplified) */}
        <div className="hidden md:flex absolute bottom-0 left-0 w-full p-4 bg-white/95 dark:bg-[#292524]/95 backdrop-blur border-t border-stone-100 dark:border-[#44403C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <span className="text-[#0F2620] dark:text-[#E7E5E4] text-[11px] font-semibold uppercase tracking-widest flex items-center gap-2">
            See details <ArrowRight size={12} />
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-2 text-center md:text-left">
        {/* USE-CASE (replace meaningless category) */}
        <p className="text-[11px] font-semibold text-[#5C6B64] dark:text-[#A8A29E] mb-1">
          {product.useCase || 'Ideal for daily work setups'}
        </p>

        <h3 className="text-2xl font-serif text-[#0F2620] dark:text-[#E7E5E4] mb-2">
          {product.name}
        </h3>

        {/* SIZE HINT */}
        {product.sizeHint && (
          <p className="text-xs text-[#2F4A40] dark:text-[#A8A29E] mb-2">
            {product.sizeHint}
          </p>
        )}

        {/* PRICE (anchored, not loud) */}
        <p className="text-sm font-semibold text-[#5C6B64] dark:text-[#A8A29E]">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
