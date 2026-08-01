import React from "react";
import { useEffect } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import { Link } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
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
      id="contact"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* 1st box goes here */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full lg:px-20 px-10 
           grid lg:grid-cols-6 md:grid-cols-3
            grid-cols-2 justify-center items-center
            gap-10 bg-themepurple"
      >
        <img
          src={client1}
          alt="client1"
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client2}
          alt="client2"
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client3}
          alt="client3"
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client4}
          alt="client4"
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client5}
          alt="client5"
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client6}
          alt="client6"
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
      </div>

      {/* 2nd box goes here */}
      {/* 2nd box goes here */}
      <div
        className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 
        flex flex-col lg:flex-row justify-center items-center gap-12"
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center
            items-start gap-10 grow"
        >
          <div
            className="flex flex-col
           justify-center items-start gap-4"
          >
            <h1
              className="text-4xl
            text-themepurple underline italic"
            >
              Owino Shop
            </h1>
            <p className="text-gray-500 text-justify">
              This is where the footer content for the shop will go.
              <br /> So this is a placeholder for now. You can add more
              <br /> details about the shop, contact information,
              <br /> or any other relevant content here.
            </p>
          </div>
          <div
            className="flex flex-col
           justify-center items-start gap-4"
          >
            <h1
              className="text-xl
            text-black font-semibold capitalize"
            >
              Download Our App
            </h1>
            <div
              className="flex 
             justify-center items-center gap-4"
            >
              <img src={google} alt="google" />
              <img src={apple} alt="apple" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center"
        >
          <h1
            className="text-black
            text-xl font-semibold capitalize"
          >
            Useful Links
          </h1>
          <ul
            className="mt-8 flex flex-col
           justify-center items-start gap-2
            text-gray-500"
          >
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
          </ul>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center"
        >
          <h1
            className="text-black
            text-xl font-semibold capitalize"
          >
            Useful Links
          </h1>
          <ul
            className="mt-8 flex flex-col
           justify-center items-start gap-2
            text-gray-500"
          >
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              className="text-gray-500
              cursor-pointer hover:text-black"
            >
              Home
            </li>
          </ul>
        </div>
      </div>

      {/* 3rd box goes here */}
      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
            <img src={pay1} alt="pay1" className="w-[50px] rounded-lg" />
            <img src={pay2} alt="pay2" className="w-[50px] rounded-lg" />
            <img src={pay3} alt="pay3" className="w-[50px] rounded-lg" />
            <img src={pay4} alt="pay4" className="w-[50px] rounded-lg" />
          </div>
          <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow">
            <h1 className="text-black font-semibold text-2xl">
              Subscribe to Newsletter
            </h1>
            <div>
              <input
                type="email"
                placeholder="Enter valid Email"
                className="lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg"
              />
              <button
                className="bg-themepurple text-white w-full
               lg:w-auto px-6 py-3 rounded-r-lg font-semibold 
                hover:bg-purple-700 hover:text-black"
              >
                SUBMIT
              </button>
            </div>
          </div>

          <div className="lg:w-[20%] w-full">
            <p className="text-gray-500 lg:text-end text-center">
              &copy; {new Date().getFullYear()} Owino Shop. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
