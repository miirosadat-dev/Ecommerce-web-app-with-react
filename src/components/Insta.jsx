import React from "react";
import { useEffect } from "react";
import insta1 from "../assets/insta-1.jpg";
import insta2 from "../assets/insta-2.jpg";
import insta3 from "../assets/insta-3.jpg";
import insta4 from "../assets/insta-4.jpg";
import insta5 from "../assets/insta-5.jpg";
import insta6 from "../assets/insta-6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Insta = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4">
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple text-xl font-semibold capitalize"
      >
        Our Instagram Shop
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-gray-700 font-semibold leading-[50px] capitalize text-[42px] text-center"
      >
        Follow us on Instagram
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 justify-center items-center gap-6 mt-8"
      >
        <img src={insta1} alt="ecommerce website" className="rounded-lg" />
        <img src={insta2} alt="ecommerce website" className="rounded-lg" />
        <img src={insta3} alt="ecommerce website" className="rounded-lg" />
        <img src={insta4} alt="ecommerce website" className="rounded-lg" />
        <img src={insta5} alt="ecommerce website" className="rounded-lg" />
        <img src={insta6} alt="ecommerce website" className="rounded-lg" />
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-themepurple text-white hover:text-black font-semibold py-3 mt-12 uppercase px-8 rounded-lg hover:bg-themeyellow transition duration-500"
      >
        Electra Shop
      </button>
    </div>
  );
};

export default Insta;
