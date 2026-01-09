import React from 'react';
import { Layers, ShieldCheck, Maximize2 } from 'lucide-react';
import Container from '../layout/Container';
import Badge from '../ui/Badge';
import ImageWithFallback from '../ui/ImageWithFallback';

const Features = () => {
  return (
    <section
      className="w-full flex flex-col justify-center py-16 md:py-28 bg-[#EAE8E4] dark:bg-[#1C1917] transition-colors duration-700"
      id="materials"
    >
      <Container>

        {/* HEADER */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <Badge className="border-amber-700 dark:border-amber-500 text-amber-700 dark:text-amber-500 mb-6">
            The Blueprint
          </Badge>

          <h2 className="text-4xl md:text-6xl font-serif text-[#0F2620] dark:text-[#E7E5E4] mb-6">
            Where your <span className="italic text-[#5C6B64] dark:text-[#A8A29E]">money</span> actually goes.
          </h2>

          <p className="text-lg text-[#2F4A40] dark:text-[#A8A29E] leading-relaxed">
            No hidden materials. No vague claims.  
            This is the exact construction behind every desk we build.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[620px]">

          {/* SOLID WOOD */}
          <div className="group relative overflow-hidden rounded-3xl bg-stone-200 dark:bg-black md:row-span-2 shadow-lg">
            <ImageWithFallback
              src="table corner.png"
              alt="Solid Wood Desk Surface"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <Layers className="text-amber-500 mb-4" size={28} />

              <h3 className="text-2xl font-serif text-white mb-3">
                1.5″ Solid Wood Top
              </h3>

              <p className="text-stone-300 text-base leading-relaxed max-w-sm">
                Most desks rely on thin engineered boards that flex over time.  
                We use full-thickness solid wood for stiffness, durability, and zero long-term sag.
              </p>
            </div>
          </div>

          {/* STEEL FRAME */}
          <div className="group relative overflow-hidden rounded-3xl bg-stone-200 dark:bg-black md:col-span-2 shadow-lg min-h-[300px]">
            <ImageWithFallback
              src="corner_welde.png"
              alt="Industrial Steel Desk Frame"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:max-w-lg">
              <ShieldCheck className="text-amber-500 mb-4" size={28} />

              <h3 className="text-2xl font-serif text-white mb-3">
                Industrial-Grade Steel Frame
              </h3>

              <p className="text-stone-300 text-base leading-relaxed">
                Cold-rolled steel chassis with 3mm wall thickness.  
                Engineered to eliminate wobble — even with dual or triple-monitor setups.
              </p>
            </div>
          </div>

          {/* LOAD CAPACITY */}
          <div className="relative overflow-hidden rounded-3xl bg-[#0F2620] dark:bg-[#292524] shadow-lg p-8 flex flex-col justify-between min-h-[250px]">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Maximize2 size={100} className="text-white" />
            </div>

            <div>
              <h3 className="text-5xl font-serif text-white mb-2">
                Up to 80<span className="text-xl">kg</span>
              </h3>
              <p className="text-amber-500 font-bold text-s tracking-widest uppercase">
                Load Capacity
              </p>
            </div>

            <p className="text-[#8FA39D] text-s leading-relaxed">
              Handles full desktop setups — monitors, CPU, books, accessories — without flexing or instability.
            </p>
          </div>

          {/* CUSTOM SIZING */}
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-black border border-stone-200 dark:border-[#292524] shadow-lg p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-serif text-[#0F2620] dark:text-[#E7E5E4] mb-4">
              Sized for Your Room
            </h3>

            <p className="text-[#5C6B64] dark:text-[#A8A29E] text-sm leading-relaxed mb-6 max-w-xs">
              Choose your width, depth, and cut-outs.  
              We build it to fit your space — not the other way around.
            </p>

            <div className="w-12 h-12 rounded-full border border-dashed border-[#0F2620] dark:border-[#E7E5E4] flex items-center justify-center">
              <Maximize2 size={20} className="text-[#0F2620] dark:text-[#E7E5E4]" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Features;
