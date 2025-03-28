import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import DetailMenu from './components/SideComponents/DetailMenu/DetailMenu';
import About from './components/SideComponents/About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Ana sayfa ("/") */}
        <Route path='/' element={
          <>
            <Hero />
            <Category />
            <Menu />
            <Gallery />
            <Contact />
          </>
        } />

        {/* /detailmenu sayfası için DetailMenu bileşeni gösterilir */}
        <Route path='/detailmenu' element={<DetailMenu />} />
        <Route path='/about' element={<About />} />
      </Routes>

      {/* Footer her sayfada görünür */}
      <Footer />
    </div>
  );
}

export default App;
