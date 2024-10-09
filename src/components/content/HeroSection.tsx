import Card from "./Card";
import Slider from "./Slider";

const HeroSection = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-black rounded-md shadow-xl xl:mx-24">
      <Slider/> 
      <Card/>
    </div>
  );
};

export default HeroSection;
