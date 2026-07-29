import React from "react";
import { useEffect } from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbuds from "../assets/earbuds.jpg";
import dslr from "../assets/dslr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Slider = SliderImport.default ?? SliderImport;

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="hero"
      className="w-full flex justify-center 
  items-center lg:h-hero-lg h-hero-sm"
    >
      <Slider className="w-full h-full" {...settings}>
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-hero-lg
           h-hero-sm flex flex-col justify-center items-start
            gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
