import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-black text-stone-400 py-10 px-6 text-center border-t border-stone-800">
      <h2 className="font-calligraphy text-2xl text-stone-200 mb-4">墨颜书画院</h2>
      <p className="text-xs font-serif mb-6 tracking-wider opacity-60">传承东方美学 · 弘扬传统文化</p>
      
      <div className="flex justify-center gap-6 mb-8 text-xs">
        <a href="#courses" className="hover:text-white transition-colors">课程</a>
        <a href="#master" className="hover:text-white transition-colors">名师</a>
        <a href="#contact" className="hover:text-white transition-colors">联系</a>
      </div>
      
      <div className="text-[10px] text-stone-600">
        &copy; {new Date().getFullYear()} Mo Yan Calligraphy Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;