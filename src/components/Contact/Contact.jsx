import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  
  // AOS'u initialize et
  useEffect(() => {
    AOS.init({
      duration: 1300,  // Animasyon süresi (ms cinsinden)
      easing: 'ease-in-out',  // Animasyon hızlanma
      once: false,  // Animasyon sadece bir kez çalışsın
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Başlıklar */}
      <div className="text-center mb-8">
        <p 
          data-aos="fade-up"
          className="text-secondary text-xl">
          Bize Ulaşın
        </p>
        <h1 
          data-aos="fade-up"
          className="text-primary text-2xl font-bold">
          İLETİŞİM
        </h1>
      </div>

      {/* Flex ve Grid Yapısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Maps Iframe */}
        <div 
          data-aos="fade-left" 
          className="w-full">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100167.13512417447!2d26.21447844483772!3d38.320667124960515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb79b752d35675%3A0x61287b379ef50511!2zw4dlxZ9tZSwgT3ZhY8Sxaywgw4dlxZ9tZS_EsHptaXI!5e0!3m2!1str!2str!4v1742539592245!5m2!1str!2str"
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* İletişim Formu */}
        <div 
          data-aos="fade-right" 
          className="w-full flex flex-col space-y-4 h-full">
          <input
            type="text"
            placeholder="Adınız"
            className="p-3 border bg-primary text-white border-white rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <input
            type="email"
            placeholder="E-posta Adresiniz"
            className="p-3 border bg-primary text-white border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <textarea
            placeholder="Mesajınız"
            className="p-3 border bg-primary text-white border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-secondary"
            rows="4"
          />
          <button 
            data-aos="zoom-in" 
            className="cursor-pointer bg-primary text-white p-3 rounded-md hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            GÖNDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
