import React from "react";
import { reviewdata } from "../export";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Slider = SliderImport.default ?? SliderImport;

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="testimonials"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple text-xl font-open-sans font-semibold capitalize"
      >
        1300+ Customer Reviews
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="350"
        className="text-black text-[42px] leading-[50px] text-center font-open-sans font-semibold capitalize"
      >
        Our Customer Love Us
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="450"
        className="w-full lg:w-[80%] mt-10"
      >
        <Slider className="w-full" {...settings}>
          {reviewdata.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full w-[100px] m-auto mb-4"
              />
              <div className="flex flex-row justify-center items-center gap-1">
                <FaStar className="text-green-500" />
                <FaStar className="text-green-500" />
                <FaStar className="text-green-500" />
                <FaStar className="text-green-500" />
                <FaStar className="text-green-500" />
              </div>
              <p
                className="text-center
              text-gray-600
              text-lg mb-4"
              >
                {item.para}
              </p>
              <div className="flex justify-center items-center gap-5">
                <FaQuoteLeft className="text-themepurple text-7xl" />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-black text-xl capitalize font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-gray-900 capitalize">{item.post}</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
