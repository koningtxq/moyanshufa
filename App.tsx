import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import MasterProfile from './components/MasterProfile';
import Gallery from './components/Gallery';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-ink-black antialiased bg-paper-bg min-h-screen selection:bg-seal-red selection:text-white">
      {/* Sticky Navigation for Mobile/Desktop */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <div className={`font-calligraphy text-xl transition-colors ${scrolled ? 'text-ink-black' : 'text-ink-black md:text-ink-black'}`}>
                墨颜
            </div>
            <div className="flex gap-4 text-sm font-serif font-bold">
                 <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})} className="px-4 py-2 bg-seal-red text-white rounded-sm text-xs tracking-wider hover:bg-red-900 transition-colors">
                    预约
                 </button>
            </div>
        </div>
      </nav>

      <main>
        <Hero />
        <MasterProfile />
        <Gallery />
        <Courses />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
          className="w-14 h-14 bg-seal-red rounded-full shadow-lg flex items-center justify-center text-white border-2 border-white/20"
        >
           <span className="font-serif font-bold text-xs writing-vertical">咨询</span>
        </button>
      </div>
    </div>
  );
};

export default App;