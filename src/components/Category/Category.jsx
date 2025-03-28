import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import cup from "../../assets/category/cup.png";
import turkishcoffee from "../../assets/category/turkishcoffee.png";
import espresso from "../../assets/category/espresso.png";
import pancake from "../../assets/category/pancake.png";
import croissant from "../../assets/category/croissant.png";

const Category = () => {

  // AOS'u initialize et
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animasyon süresi (ms cinsinden)
      easing: 'ease-in-out',  // Animasyon hızlanma
      once: true,  // Bir kez çalışsın, tekrar etmesin
    });
  }, []);

  return (
    <div className="pt-12 flex flex-col justify-center items-center">
      <p
        data-aos="fade-up"
        className="text-secondary text-xl transition-all duration-700 ease-out"
      >
        Hangi Lezzetler Var?
      </p>
      
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-primary text-2xl font-bold text-center transition-all duration-700 ease-out"
      >
        KAHVENİN MÜKEMMELLİKLE BULUŞTUĞU YER.
      </h1>

      <div className='w-[350px] border-b-2 border-secondary mt-2'></div>

      {/* Flex container for images and text */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px]">
        
        {/* Left-side images with heading and paragraph */}
        <div className="flex flex-col items-center justify-start mb-8 md:mb-0">
          <div
            data-aos="fade-right"
            className="flex items-center mb-8"
          >
            <img src={turkishcoffee} alt="turkishcoffee" className="w-[120px] h-auto mr-4" />
            <div className="flex flex-col">
              <h1 className='text-primary text-lg font-semibold'>Türk Kahvesi</h1>
              <p className='text-primary max-w-[200px]'>
                Geleneksel Türk kahvesi, kalın dokusu ve güçlü tadı ile bilinir.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex items-center"
          >
            <img src={espresso} alt="espresso" className="w-[120px] h-auto mr-4" />
            <div className="flex flex-col">
              <h1 className='text-primary text-lg font-semibold'>Espresso Bazlı Kahveler</h1>
              <p className='text-primary max-w-[200px]'>
                Latte, Mocha ve Americano gibi espresso bazlı içecekler.
              </p>
            </div>
          </div>
        </div>

        {/* Center large image (cup) with heading and paragraph */}
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center justify-center mb-8 md:mb-0"
        >
          <img src={cup} alt="cup" className="w-[500px] h-auto" />
        </div>

        {/* Right-side images with heading and paragraph */}
        <div className="flex flex-col items-center justify-start">
          <div
            data-aos="fade-left"
            className="flex items-center mb-8"
          >
            <img src={pancake} alt="pancake" className="w-[120px] h-auto mr-4" />
            <div className="flex flex-col">
              <h1 className='text-primary text-lg font-semibold'>Pankek</h1>
              <p className='text-primary max-w-[200px]'>
                Yumuşak, kabarık ve tatlı pankekler, şurup ve tereyağı ile servis edilir.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="flex items-center"
          >
            <img src={croissant} alt="croissant" className="w-[120px] h-auto mr-4" />
            <div className="flex flex-col">
              <h1 className='text-primary text-lg font-semibold'>Kruvasan</h1>
              <p className='text-primary max-w-[200px]'>
                Gevrek ve tereyağlı, kahvaltı için ideal bir Fransız hamur işi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
