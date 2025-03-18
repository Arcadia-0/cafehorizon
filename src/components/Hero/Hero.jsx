import React, { useState, useEffect } from 'react';
import hero from "../../assets/hero/hero2.png";

const Hero = () => {
  // State for controlling the visibility of the content
  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility change after the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container text-black pt-30 px-4 md:px-8 flex flex-col md:flex-row items-center">
      {/* Sol Kısım */}
      <div
        className={`text-center md:text-left md:w-1/2 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Taze Kahve, Sıcak Anlar
        </h1>
        <p className="text-primary max-w-[450px] mx-auto md:mx-0">
          Gününüze eşsiz bir başlangıç yapmak için en kaliteli çekirdeklerden özenle hazırlanan kahvelerimizi keşfedin. Her yudumda, taze ve benzersiz lezzetlerin birleştiği bir deneyim sizi bekliyor. İster sabah rutininize enerji katın, ister arkadaşlarınızla keyifli bir sohbetin tadını çıkarın, kahvemiz her anınıza değer katacak. Sizin için en taze ve en lezzetli kahveleri sunmak için buradayız!
        </p>
      </div>

      {/* Sağ Kısım */}
      <div
        className={`mt-6 md:mt-0 md:w-1/2 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <img src={hero} alt="Hero Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
