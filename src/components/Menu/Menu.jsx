import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {

  // AOS'u initialize et
  useEffect(() => {
    AOS.init({
      duration: 1300,  // Animasyon süresi (ms cinsinden)
      easing: 'ease-in-out',  // Animasyon hızlanma
      once: false,  // Animasyon sadece bir kez çalışsın
    });
  }, []);

  return (
    <div className='bg-primary py-10'>
      {/* Başlık */}
      <h1 
        data-aos="fade-up" 
        className='text-white text-2xl text-center font-bold mb-10'>
        MENÜMÜZÜ KEŞFET
      </h1>

      {/* Menü Liste */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Sol Kolon (Türk Kahveleri) */}
        <div className="text-white">
          <h2 
            data-aos="fade-up" 
            className="text-secondary text-xl font-semibold mb-4">
            TÜRK KAHVELERİ
          </h2>
          <ul className="space-y-4">
            <li data-aos="fade-up" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>TÜRK KAHVESİ</span>
                <p className="text-sm">Klasik Türk kahvesi, yoğun lezzet.</p>
              </div>
              <span>2.99$</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="100" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>DİBEK KAHVESİ</span>
                <p className="text-sm">Ağır, geleneksel kahve.</p>
              </div>
              <span>1.99$</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="200" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>MENENGİÇ KAHVESİ</span>
                <p className="text-sm">Kavak ve menengiç ağaçlarından yapılır.</p>
              </div>
              <span>3.49$</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                
                <span>EKSPRES TÜRK KAHVESİ</span>
                <p className="text-sm">Hızlı Türk kahvesi, modern dokunuş.</p>
              </div>
              <span>2.49$</span>
            </li>
          </ul>
        </div>

        {/* Sağ Kolon (Espresso Bazlı Kahveler) */}
        <div className="text-white">
          <h2 
            data-aos="fade-up" 
            className="text-secondary text-xl font-semibold mb-4">
            ESPRESSO BAZLI KAHVELER
          </h2>
          <ul className="space-y-4">
            <li data-aos="fade-up" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>LATTE</span>
                <p className="text-sm">İyi bir kahve çeşidi, sütle harmanlanmış.</p>
              </div>
              <span>3.99$</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="100" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>CAPPUCINO</span>
                <p className="text-sm">Köpüklü sütle zenginleştirilmiş espresso.</p>
              </div>
              <span>3.79$</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="200" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>ESPRESSO</span>
                <p className="text-sm">Daha yoğun sütlü bir espresso içeceği.</p>
              </div>
              <span>4.19$</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>AMERICANO</span>
                <p className="text-sm">Espresso üzerine sıcak su eklenmiş.</p>
              </div>
              <span>2.69$</span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
