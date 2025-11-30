import React from 'react';
import SectionTitle from './SectionTitle';

interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
  orientation: 'vertical' | 'horizontal' | 'square';
}

const artworks: Artwork[] = [
  {
    id: '1',
    title: '宁静致远',
    category: '行书横幅',
    image: '/images/gallery/artwork-1.jpg',
    orientation: 'horizontal'
  },
  {
    id: '2',
    title: '溪山清韵',
    category: '山水写意',
    image: '/images/gallery/artwork-2.jpg',
    orientation: 'vertical'
  },
  {
    id: '3',
    title: '兰亭序（局部临摹）',
    category: '行书',
    image: '/images/gallery/artwork-3.jpg',
    orientation: 'square'
  },
  {
    id: '4',
    title: '墨竹图',
    category: '国画花鸟',
    image: '/images/gallery/artwork-4.jpg', // Placeholder using abstract nature
    orientation: 'vertical'
  },
  {
    id: '5',
    title: '心经',
    category: '小楷',
    image: '/images/gallery/artwork-5.jpg',
    orientation: 'square'
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-paper-bg" id="gallery">
      <SectionTitle title="作品赏析" subtitle="ARTISTIC WORKS" />

      {/* Masonry-like Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">

        {/* Item 1 - Horizontal spanning 2 columns on desktop */}
        <div className="group relative overflow-hidden rounded-sm shadow-md md:col-span-2 row-span-2">
          <img
            src={artworks[0].image}
            alt={artworks[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]"
          />
        </div>

        {/* Item 2 - Vertical */}
        <div className="group relative overflow-hidden rounded-sm shadow-md row-span-2">
          <img
            src={artworks[1].image}
            alt={artworks[1].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.2]"
          />
        </div>

        {/* Item 3 - Square */}
        <div className="group relative overflow-hidden rounded-sm shadow-md row-span-1">
          <img
            src={artworks[2].image}
            alt={artworks[2].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Item 4 - Vertical (taking 2 rows height effectively in masonry, here simplified to row-span-2) */}
        <div className="group relative overflow-hidden rounded-sm shadow-md row-span-2">
          <img
            src={artworks[3].image}
            alt={artworks[3].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-125"
          />
        </div>

        {/* Item 5 - Square */}
        <div className="group relative overflow-hidden rounded-sm shadow-md row-span-1">
          <img
            src={artworks[4].image}
            alt={artworks[4].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 border border-ink-black text-ink-black hover:bg-ink-black hover:text-white transition-colors font-serif tracking-widest text-sm">
          查看更多作品
        </button>
      </div>
    </section>
  );
};

export default Gallery;
