// components/Gallery.jsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Placeholder gallery images
  const galleryImages = Array(6).fill().map((_, i) => ({ id: i + 1 }));

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image.id)}>
            <div className="gallery-image"></div>
            <div className="image-overlay">
              <div className="image-zoom">+</div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image"></div>
            <button className="close-lightbox" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
