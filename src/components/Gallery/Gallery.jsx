import React, { useEffect } from 'react';
import image_1 from "../../assets/gallery/image-1.png";
import image_2 from "../../assets/gallery/image-2.png";
import image_3 from "../../assets/gallery/image-3.png";
import image_4 from "../../assets/gallery/image-4.png";
import image_5 from "../../assets/gallery/image-5.png";
import image_6 from "../../assets/gallery/image-6.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  
  // AOS'u initialize et
  useEffect(() => {
    AOS.init({
      duration: 1300,  // Animasyon süresi (ms cinsinden)
      easing: 'ease-in-out',  // Animasyon hızlanma
      once: false,  // Animasyon sadece bir kez çalışsın
    });
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-center text-primary text-2xl font-bold mb-10">GALERİ</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Resim 1 */}
          <div
            data-aos="fade-down-right"
            className="gallery-image flex justify-center opacity-0 transition-opacity duration-1000"
          >
            <img
              src={image_1}
              alt="Gallery Image 1"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Resim 2 */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="gallery-image flex justify-center opacity-0 transition-opacity duration-1000"
          >
            <img
              src={image_2}
              alt="Gallery Image 2"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Resim 3 */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="gallery-image flex justify-center opacity-0 transition-opacity duration-1000"
          >
            <img
              src={image_3}
              alt="Gallery Image 3"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Resim 4 */}
          <div
            data-aos="fade-up-right"
            data-aos-delay="300"
            className="gallery-image flex justify-center opacity-0 transition-opacity duration-1000"
          >
            <img
              src={image_4}
              alt="Gallery Image 4"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Resim 5 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="gallery-image flex justify-center opacity-0 transition-opacity duration-1000"
          >
            <img
              src={image_5}
              alt="Gallery Image 5"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Resim 6 */}
          <div
            data-aos="fade-up-left"
            data-aos-delay="500"
            className="gallery-image flex justify-center opacity-0 transition-opacity duration-1000"
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
