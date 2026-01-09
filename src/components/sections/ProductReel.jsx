import React from 'react';
import { MoveRight } from 'lucide-react';
import Container from '../layout/Container';
import Badge from '../ui/Badge';
import ProductCard from '../products/ProductCard';
import { PRODUCTS } from '../../data/config';

const ProductReel = ({ onProductSelect }) => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div id="products-anchor" className="absolute -top-32" /> 
      
      {/* HEADER */}
      <Container className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <Badge className="border-amber-700 dark:border-amber-500 text-amber-700 dark:text-amber-500 mb-4">The Catalog</Badge>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F2620] dark:text-[#E7E5E4] max-w-2xl transition-colors">Choose your foundation.</h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[#5C6B64] dark:text-[#A8A29E] text-xs font-bold uppercase tracking-widest animate-pulse">
          Drag to Explore <MoveRight size={16} />
        </div>
      </Container>

      {/* REEL */}
      <div className="
        flex overflow-x-auto snap-x snap-mandatory 
        gap-8 md:gap-12 pb-12 
        px-6 md:px-[calc((100vw-80rem)/2)] 
        hide-scrollbar
      ">
        {PRODUCTS.map(product => (
          <div key={product.id} className="min-w-[85vw] md:min-w-[400px] snap-center">
            <ProductCard product={product} onClick={onProductSelect} />
          </div>
        ))}
        {/* REMOVED THE EMPTY SPACER DIV HERE */}
      </div>
    </div>
  );
};

export default ProductReel;