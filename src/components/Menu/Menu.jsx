import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className='bg-primary py-10'>
      <h1 data-aos="fade-up" className='text-white text-2xl text-center font-bold mb-10'>
        MENÜMÜZÜ KEŞFET
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Sol Kolon (İçecekler) */}
        <div className="text-white flex flex-col justify-between h-full">
          <h2 data-aos="fade-up" className="text-secondary text-xl font-semibold mb-4">
            İÇECEKLER
          </h2>
          <ul className="space-y-4 flex-grow">
            <li data-aos="fade-up" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>SICAK İÇECEKLER</span>
                <p className="text-sm">Kahve severler için özenle hazırlanmış, zengin aromalı sıcak içecekler. Güne başlarken vazgeçilmez.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="100" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>SOĞUK İÇECEKLER</span>
                <p className="text-sm">Serinletici ve ferahlatıcı soğuk kahve çeşitleri. Kahve ile buzun mükemmel uyumunu keşfedin, yazın tadı.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>KOKTEYLLER</span>
                <p className="text-sm">Taze meyveler, nane ve diğer doğal malzemelerle hazırlanan kokteyller. Alkolsüz fakat doyurucu ve lezzetli.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>BİTKİ ÇAYLARI</span>
                <p className="text-sm">Doğal bitkilerden yapılan, sağlıklı ve sakinleştirici içecekler. Gündüz veya gece rahatlıkla tüketebilirsiniz.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Sağ Kolon (Yiyecekler) */}
        <div className="text-white flex flex-col justify-between h-full">
          <h2 data-aos="fade-up" className="text-secondary text-xl font-semibold mb-4">
            YİYECEKLER
          </h2>
          <ul className="space-y-4 flex-grow">
            <li data-aos="fade-up" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>KRUVASANLAR</span>
                <p className="text-sm">Taze tereyağıyla yapılmış, altın rengi çıtırlığıyla eşsiz bir deneyim sunan kruvasanlar. Kahvaltı için ideal.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="100" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>PANKEKLER</span>
                <p className="text-sm">Yumuşacık, ince ve hafif pancake'ler. Üzerine taze meyve, çikolata veya bal eklenebilir. Tatlı bir kaçamak.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>BOWLLAR</span>
                <p className="text-sm">Sağlıklı ve doyurucu bir seçenek. Farklı meyve, granola ve yoğurt karışımlarıyla zenginleştirilmiş bowl'lar. Enerji verici.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-start border-b border-white pb-2">
              <div>
                <span>SANDVİÇLER</span>
                <p className="text-sm">Taze ekmek arasında, lezzetli iç malzemelerle hazırlanmış sandviçler. Kahvaltı veya atıştırmalık olarak mükemmel bir seçenek.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
