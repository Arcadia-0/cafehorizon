import React, { useEffect, useRef, useState } from 'react';
import image_1 from "../../assets/gallery/image-1.png";
import image_2 from "../../assets/gallery/image-2.png";
import image_3 from "../../assets/gallery/image-3.png";
import image_4 from "../../assets/gallery/image-4.png";
import image_5 from "../../assets/gallery/image-5.png";
import image_6 from "../../assets/gallery/image-6.png";

const Gallery = () => {
  const [inView, setInView] = useState(false);

  // Intersection Observer API ile öğelerin görünür olup olmadığını kontrol etme
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    })
  );

  // Referansları oluştur
  const imageRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    imageRefs.forEach((imageRef) => {
      if (imageRef.current) {
        observer.current.observe(imageRef.current);
      }
    });
    return () => {
      imageRefs.forEach((imageRef) => {
        if (imageRef.current) {
          observer.current.unobserve(imageRef.current);
        }
      });
    };
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-center text-primary text-2xl font-bold mb-10">GALERİ</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div ref={imageRefs[0]} className={`flex justify-center opacity-0 transition-opacity duration-1000 ${inView ? "opacity-100" : ""}`}>
            <img src={image_1} alt="Gallery Image 1" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div ref={imageRefs[1]} className={`flex justify-center opacity-0 transition-opacity duration-1000 ${inView ? "opacity-100" : ""}`}>
            <img src={image_2} alt="Gallery Image 2" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div ref={imageRefs[2]} className={`flex justify-center opacity-0 transition-opacity duration-1000 ${inView ? "opacity-100" : ""}`}>
            <img src={image_3} alt="Gallery Image 3" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div ref={imageRefs[3]} className={`flex justify-center opacity-0 transition-opacity duration-1000 ${inView ? "opacity-100" : ""}`}>
            <img src={image_4} alt="Gallery Image 4" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div ref={imageRefs[4]} className={`flex justify-center opacity-0 transition-opacity duration-1000 ${inView ? "opacity-100" : ""}`}>
            <img src={image_5} alt="Gallery Image 5" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div ref={imageRefs[5]} className={`flex justify-center opacity-0 transition-opacity duration-1000 ${inView ? "opacity-100" : ""}`}>
            <img src={image_6} alt="Gallery Image 6" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
