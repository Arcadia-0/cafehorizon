import React, { useState, useEffect } from 'react';
import image_1 from "../../assets/gallery/image-1.png";
import image_2 from "../../assets/gallery/image-2.png";
import image_3 from "../../assets/gallery/image-3.png";
import image_4 from "../../assets/gallery/image-4.png";
import image_5 from "../../assets/gallery/image-5.png";
import image_6 from "../../assets/gallery/image-6.png";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(new Set());

  // Sayfa scroll edildikçe kontrol etme
  const handleScroll = () => {
    const newVisibleImages = new Set();

    // Her resmin görünür olup olmadığını kontrol et
    const imageElements = document.querySelectorAll('.gallery-image');
    imageElements.forEach((image, index) => {
      const rect = image.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        newVisibleImages.add(index);
      }
    });

    setVisibleImages(newVisibleImages);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // İlk yüklemede bir kez kontrol et
    handleScroll();

    // Temizleme işlemi
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-center text-primary text-2xl font-bold mb-10">GALERİ</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            className={`gallery-image flex justify-center opacity-0 transition-opacity duration-1000 ${visibleImages.has(0) ? "opacity-100" : ""}`}
          >
            <img
              src={image_1}
              alt="Gallery Image 1"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div
            className={`gallery-image flex justify-center opacity-0 transition-opacity duration-1000 ${visibleImages.has(1) ? "opacity-100" : ""}`}
          >
            <img
              src={image_2}
              alt="Gallery Image 2"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div
            className={`gallery-image flex justify-center opacity-0 transition-opacity duration-1000 ${visibleImages.has(2) ? "opacity-100" : ""}`}
          >
            <img
              src={image_3}
              alt="Gallery Image 3"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div
            className={`gallery-image flex justify-center opacity-0 transition-opacity duration-1000 ${visibleImages.has(3) ? "opacity-100" : ""}`}
          >
            <img
              src={image_4}
              alt="Gallery Image 4"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div
            className={`gallery-image flex justify-center opacity-0 transition-opacity duration-1000 ${visibleImages.has(4) ? "opacity-100" : ""}`}
          >
            <img
              src={image_5}
              alt="Gallery Image 5"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div
            className={`gallery-image flex justify-center opacity-0 transition-opacity duration-1000 ${visibleImages.has(5) ? "opacity-100" : ""}`}
          >
            <img
              src={image_6}
              alt="Gallery Image 6"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
