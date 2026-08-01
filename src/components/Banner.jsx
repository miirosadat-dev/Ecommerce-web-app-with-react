import React from "react";
import { useEffect } from "react";
import deal from "../assets/deal-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-[80px]">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full lg:h-[400px] h-[300px] bg-cover bg-center flex flex-col rounded-lg justify-center items-center gap-3"
        style={{ backgroundImage: `url(${deal})` }}
      >
        <h1 className="text-white lg:text-[60px] text-[40px] font-bold uppercase">
          Deal of the Day
        </h1>
        <p className="text-white lg:text-[20px] text-[16px]">
          Get upto 70% Discount off
        </p>
      </div>
    </div>
  );
};

export default Banner;
