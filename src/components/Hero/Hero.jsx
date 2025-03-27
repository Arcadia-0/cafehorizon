import hero1920 from "../../assets/hero/hero1920.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[50%] md:h-screen overflow-hidden">
      <img
        src={hero1920} 
        alt="Hero Image"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
    </div>
  );
};

export default Hero;
