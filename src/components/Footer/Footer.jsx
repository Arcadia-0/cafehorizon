import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logolight from "../../assets/logolight.png";

const Footer = () => {
  return (
    <footer id='footer' className="bg-primary text-white py-16">
      <div className="container mx-auto px-8">

        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start">
            <img src={logolight} alt="Logo" className="w-32 mb-4" />
            <p className="text-xl font-semibold text-white">Seashell's Cafe</p>
            <p className="text-sm text-gray-400 mt-2">Kahve keyfi, deniz esintisi.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-secondary mb-4">Hızlı Bağlantılar</p>
            <a href="/" className="text-white hover:text-secondary mb-2">Anasayfa</a>
            <a href="/about" className="text-white hover:text-secondary mb-2">Hakkımızda</a>
            <a href="/menu" className="text-white hover:text-secondary mb-2">Menü</a>
            <a href="/contact" className="text-white hover:text-secondary mb-2">İletişim</a>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-secondary mb-4">İletişim</p>
            <div className="flex items-center text-white mb-3">
              <FaMapMarkerAlt size={20} className="mr-3" />
              <span>Alsancak, İzmir</span>
            </div>
            <div className="flex items-center text-white mb-3">
              <FaPhoneAlt size={20} className="mr-3" />
              <span>(0212) 123 45 67</span>
            </div>
            <div className="flex items-center text-white">
              <FaEnvelope size={20} className="mr-3" />
              <a href="mailto:info@seashellscoffeeshop.com" className="hover:text-white">info@seashellscoffeeshop.com</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-secondary mb-4">Bizi Takip Edin</p>
            <div className="flex space-x-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-secondary pt-6 text-center">
  <p className="text-sm text-white mb-2">© 2025 Seashell's Cafe. Tüm Hakları Saklıdır.</p>
  <p className="text-sm text-white font-semibold">
    Bu site{' '}
    <a
      href="https://www.arcadiadigital.com.tr/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-secondary font-bold">
      ArcadiaDigital
    </a>{' '}
    tarafından geliştirilmiştir.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
