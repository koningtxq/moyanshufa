import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-paper-bg">
      {/* Abstract Ink Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <img 
            src="/images/hero-bg.jpg" 
            alt="Ink Background" 
            className="w-full h-full object-cover filter grayscale contrast-125"
         />
      </div>
      
      {/* Content */}
      <div className="z-10 flex flex-col items-center px-6">
        <div className="border-4 border-double border-ink-black p-6 mb-8 relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-seal-red text-white flex items-center justify-center text-xs font-bold rounded-sm shadow-md">
                墨
            </div>
            <h1 className="text-5xl md:text-7xl font-calligraphy text-ink-black text-center leading-tight">
              墨颜<br/>书画
            </h1>
        </div>
        
        <p className="text-ink-grey font-serif text-lg tracking-[0.3em] mb-2 text-center">
            修身 · 养性 · 传承
        </p>
        <div className="w-px h-16 bg-gradient-to-b from-ink-black to-transparent my-4"></div>
        <p className="text-ink-black font-serif font-bold text-xl">
            袁凯工作室
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce z-10 text-ink-grey opacity-60">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;