import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logolight from "../../assets/logolight.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Sol Taraf: Logo */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img 
            src={logolight} 
            alt="Logo" 
            className="w-40 mb-4" 
          />
          <p className="text-3xl font-bold text-secondary">Seashell's Cafe</p>
          <p className="text-md text-white opacity-80">Lezzetli kahveler ve sıcak atmosfer.</p>
        </div>

        {/* Orta Taraf: Hızlı Bağlantılar */}
        <div className="flex flex-col items-center sm:items-start space-y-6">
          <p className="text-lg font-semibold text-secondary uppercase tracking-wider">Hızlı Bağlantılar</p>
          <div className="text-sm text-white space-y-2">
            <a href="#home" className="hover:text-secondary transition-colors">Ana Sayfa</a>
            <a href="#menu" className="hover:text-secondary transition-colors">Menü</a>
            <a href="#about" className="hover:text-secondary transition-colors">Hakkımızda</a>
            <a href="#contact" className="hover:text-secondary transition-colors">İletişim</a>
          </div>
        </div>

        {/* Sağ Taraf: İletişim Bilgileri ve Sosyal Medya */}
        <div className="flex flex-col items-center sm:items-start space-y-6">
          <p className="text-lg font-semibold text-secondary uppercase tracking-wider">İletişim</p>
          <div className="text-sm text-white space-y-4">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-secondary" size={20} />
              <span className='text-white'>Çeşme,İzmir</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-secondary" size={20} />
              <span className='text-white'>(0212) 123 45 67</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-secondary" size={20} />
              <a href="mailto:info@seashellscoffeeshop.com" className="text-white hover:text-secondary">info@seashellscoffeeshop.com</a>
            </div>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex space-x-6 mt-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:bg-blue-600 p-4 rounded-full transition-colors"
            >
              <FaFacebook size={28} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:bg-blue-400 p-4 rounded-full transition-colors"
            >
              <FaTwitter size={28} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:bg-pink-600 p-4 rounded-full transition-colors"
            >
              <FaInstagram size={28} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:bg-red-600 p-4 rounded-full transition-colors"
            >
              <FaYoutube size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Kısım: Copyright */}
      <div className="text-center mt-8 text-sm text-secondary opacity-70">
        <p>© 2025 Seashell's Cafe. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
