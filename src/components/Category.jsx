import React from "react";
import { useEffect } from "react";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
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
      id="category"
      className="w-full bg-gray-100 lg:px-20
       px-5 pt-[130px] pb-[80px] flex lg:flex-row
        flex-col justify-center items-center
         gap-20"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col
         justify-center lg:items-start items-center
          gap-[20px]"
      >
        <h1 className="text-xl font-semibold text-center text-themepurple">
          Favorite Items
        </h1>
        <h1 className="whitespace-nowrap text-[40px] leading-50px font-semibold text-center text-black">
          Popular Category
        </h1>
        <button className="bg-themepurple text-white font-semibold hover:text-black py-3 mt-[60px] px-8 rounded-lg hover:bg-themeyellow transition-colors duration-300">
          VIEW ALL
        </button>
      </div>
      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10"></div>
    </div>
  );
};

export default Category;
