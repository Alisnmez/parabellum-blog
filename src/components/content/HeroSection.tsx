import Announcement from "./Announcement";
import Card from "./Card";
import Slider from "./Slider";

const HeroSection = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-black rounded-md shadow-xl xl:mx-56">
      <div className="flex flex-row">
      <Announcement/>
      <Slider/> 
      </div>
      <Card/>
    </div>
  );
};

export default HeroSection;
