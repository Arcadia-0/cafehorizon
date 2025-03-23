import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import logolight from "../../assets/logolight.png"

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Sol Taraf: Logo ve Açılış Saatleri */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
          <img src={logolight} alt="Logo" className="w-32 mb-4" />
          <p className="text-2xl font-bold text-secondary">Seashell's Cafe</p>
          <p className="text-md text-white">Lezzetli kahveler ve sıcak atmosfer.</p>
          
          <div className="text-sm text-white mt-6">
            <p className="font-semibold text-secondary mb-3">Açılış Saatleri</p>
            <ul className="space-y-1">
              {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'].map((day, index) => (
                <li key={index} className="flex justify-between items-center py-1 border-b border-gray-600">
                  <span>{day}</span>
                  <span>{index < 6 ? "08:00 - 22:00" : "10:00 - 20:00"}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Orta Taraf: Hızlı Bağlantılar */}
        <div className="flex flex-col items-center sm:items-start space-y-6">
          <p className="text-lg font-semibold text-secondary">Hızlı Bağlantılar</p>
          <div className="text-sm text-white space-y-2">
            <a href="#home" className="hover:text-secondary transition-colors">Ana Sayfa</a>
            <a href="#menu" className="hover:text-secondary transition-colors">Menü</a>
            <a href="#about" className="hover:text-secondary transition-colors">Hakkımızda</a>
            <a href="#contact" className="hover:text-secondary transition-colors">İletişim</a>
          </div>
        </div>

        {/* Sağ Taraf: Adres, Telefon, E-posta */}
        <div className="flex flex-col items-center sm:items-start space-y-6">
          <p className="text-lg font-semibold text-secondary">İletişim</p>
          <div className="text-sm text-gray-400 space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-secondary" />
              <span className='text-white'>123 Sahil Yolu, Plaj Mahallesi, İstanbul</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-secondary" />
              <span className='text-white'>(0212) 123 45 67</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-secondary" />
              <a href="mailto:info@seashellscoffeeshop.com" className="text-white hover:text-secondary">info@seashellscoffeeshop.com</a>
            </div>
          </div>
        </div>
        
        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center sm:justify-start space-x-6 mt-8 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white rounded-full p-4 transition-transform transform hover:bg-blue-600 hover:scale-110">
            <FaFacebook size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white rounded-full p-4 transition-transform transform hover:bg-blue-400 hover:scale-110">
            <FaTwitter size={22} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white rounded-full p-4 transition-transform transform hover:bg-pink-600 hover:scale-110">
            <FaInstagram size={22} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white rounded-full p-4 transition-transform transform hover:bg-red-600 hover:scale-110">
            <FaYoutube size={22} />
          </a>
        </div>
      </div>

      {/* Alt Kısım: Copyright */}
      <div className="text-center mt-6 text-sm text-secondary">
        <p>© 2025 Seashell's Cafe. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
