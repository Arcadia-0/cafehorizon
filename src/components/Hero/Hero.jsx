import React, { useState, useEffect } from 'react';
import hero from "../../assets/hero/hero.png";

const Hero = () => {
  // State for controlling the visibility of the content
  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility change after the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className=" relative w-full h-screen overflow-hidden">
      <img 
        src={hero} 
        alt="Hero Image" 
        className="w-full h-full object-cover" // Sağa ve sola padding ekledik
      />
    </div>
  );
};

export default Hero;
