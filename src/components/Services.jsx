import React from "react";
import { useEffect } from "react";
import payment from "../assets/payment.png";
import shipping from "../assets/shipping.png";
import refund from "../assets/return.png";
import gift from "../assets/gift.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
      className="w-full lg:px-20 px-5 pt-[0px] pb-[80px]
   grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center 
   gap-10"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="120"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={shipping} className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Worldwide Shipping</h1>
        <p className="text-[17px] text-gray-500">
          We do shipping all over the world
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="120"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={payment} className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">
          100% Secure payments
        </h1>
        <p className="text-[17px] text-gray-500">
          Our payment system is very secure.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="120"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={refund} className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Get a discount</h1>
        <p className="text-[17px] text-gray-500">
          We also offer a discounted price.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="120"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={gift} className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Apply for gift</h1>
        <p className="text-[17px] text-gray-500">
          We do shipping all over the world
        </p>
      </div>
    </div>
  );
};

export default Services;
