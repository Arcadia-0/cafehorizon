import hero1920 from "../../assets/hero/hero1920.png";
import hero1024 from "../../assets/hero/hero1024.png";
import hero720 from "../../assets/hero/hero720.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <picture>
        {/* Masaüstü için büyük çözünürlük */}
        <source
          srcSet={`${hero1920} 1920w`}
          media="(min-width: 1200px)"
        />
        {/* Tablet için orta çözünürlük */}
        <source
          srcSet={`${hero1024} 1024w`}
          media="(min-width: 768px) and (max-width: 1199px)"
        />
        {/* Mobil için küçük çözünürlük */}
        <source
          srcSet={`${hero720} 720w`}
          media="(max-width: 767px)"
        />
        {/* Varsayılan (fallback) resim */}
        <img
          src={hero720} // Varsayılan büyük resim
          alt="Hero Image"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 80vw, 1920px"
        />
      </picture>

      
    </div>
  );
};

export default Hero;
