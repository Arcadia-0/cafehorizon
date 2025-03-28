import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS stil dosyasını import edin

import store from "../../../assets/about/store.png";
import store2 from "../../../assets/about/store2.png";

const About = () => {
  // AOS'u initialize et
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animasyon süresi (ms cinsinden)
      easing: 'ease-in-out',  // Animasyon hızlanma
      once: false,  // Bir kez çalışsın, tekrar etmesin
    });
  }, []);

  window.scrollTo(0,0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Hero Section - Başlık ve Açıklama */}
        <div className="relative mb-20" data-aos="fade-up">
          <div className="absolute inset-0"></div>
          <div className="relative z-10 text-center">
            {/* Başlık veya açıklama içeriği */}
          </div>
        </div>

        {/* İki Sütunlu Düzen - Görsel ve Metin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Sol Taraf: Görsel */}
          <div className="relative flex items-center justify-center order-2 lg:order-1" data-aos="fade-right">
            <img
              src={store}
              alt="Kahve Dükkanımız"
              className="w-full h-full object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Sağ Taraf: Başlık ve Açıklama */}
          <div className="flex flex-col justify-center order-1 lg:order-2" data-aos="fade-left">
            <h3 className="text-3xl font-semibold text-primary mb-4">Biz Kimiz?</h3>
            <p className="text-lg text-primary">
              Biz, kahvenin her yönüne tutkuyla bağlı bir ekipten oluşuyoruz. Küçük bir kafenin sıcak atmosferinde, taze kahve çekirdeklerini en iyi şekilde hazırlamak için çalışıyoruz. Kahve sadece bir içecek değil, bizim için bir yaşam tarzı. 
              Her fincanda, size sunduğumuz deneyimi samimi bir şekilde paylaşmak istiyoruz.
            </p>
          </div>
        </div>

        {/* Diğer Sekme: Kahve Hazırlığı ve Deneyim */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24">
          {/* Sol Taraf: Başlık ve Açıklama */}
          <div className="flex flex-col justify-center order-1 lg:order-1" data-aos="fade-up">
            <h3 className="text-3xl font-semibold text-primary mb-4">Neden Bizimle Kahve İçmelisiniz?</h3>
            <p className="text-lg text-primary">
              Kahvemizi seviyoruz çünkü her aşamada kaliteli ve taze olmasına özen gösteriyoruz. Çekirdeklerimiz özenle seçilir, kavrulur ve her fincanınıza taze bir şekilde sunulur. Kahveye olan tutkumuz, her siparişinize yansır.
            </p>
          </div>

          {/* Sağ Taraf: Görsel */}
          <div className="relative flex items-center justify-center order-2 lg:order-2" data-aos="fade-up">
            <img
              src={store2}
              alt="Kahve Hazırlığı"
              className="w-full h-full object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Misyonumuz */}
        <div className="mt-24 text-center" data-aos="fade-up">
          <h3 className="text-4xl font-bold text-primary mb-6">Misyonumuz</h3>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Kahveye olan tutkumuz, her bir fincanda kaliteyi, tazeliği ve samimiyeti sunmak üzerine kuruludur. Bizim amacımız, her bir müşterimize kahveyle sadece bir içecek değil, unutulmaz bir deneyim sunmaktır. 
            Sizinle her yudumda keyifli anlar paylaşmayı hedefliyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
