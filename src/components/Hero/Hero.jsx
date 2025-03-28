import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS stil dosyasını import edin

import hero1920 from "../../assets/hero/hero1920.png";

const Hero = () => {
  // AOS'u initialize et
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animasyon süresi (ms cinsinden)
      easing: 'ease-in-out',  // Animasyon hızlanma
      once: true,  // Bir kez çalışsın, tekrar etmesin
    });
  }, []);

  window.scrollTo(0,0);
  

  return (
    <div className="relative w-full h-[50%] md:h-screen overflow-hidden" data-aos="fade-left">
      <img
        src={hero1920}
        alt="Hero Image"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
    </div>
  );
};

export default Hero;
