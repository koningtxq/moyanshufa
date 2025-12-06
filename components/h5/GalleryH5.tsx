import React from 'react';
import './h5-components.css';

const artworks = [
  { id: '1', image: '/images/gallery/artwork-1.jpg' },
  { id: '2', image: '/images/gallery/artwork-2.jpg' },
  { id: '3', image: '/images/gallery/artwork-3.jpg' },
  { id: '4', image: '/images/gallery/artwork-4.jpg' },
  { id: '5', image: '/images/gallery/artwork-5.jpg' },
];

const GalleryH5: React.FC = () => {
  return (
    <div className="h5-gallery">
      <h2 className="page-title">作品赏析</h2>
      <p className="page-subtitle">ARTISTIC WORKS</p>

      <div className="gallery-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <img
              src={artwork.image}
              alt={`作品 ${artwork.id}`}
              className="artwork-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryH5;
