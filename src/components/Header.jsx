import React from "react";
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaBars, FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "home",
      path: "hero",
    },
    {
      link: "about",
      path: "banner",
    },
    {
      link: "Products",
      path: "products",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <>
      <div
        className="w-full px-16 py-2
       bg-themeyellow lg:flex md:flex hidden
        justify-between items-center gap-6"
      >
        <h1
          className="text-sm font-semibold
           flex justify-center items-center
            gap-2"
        >
          <FaPhoneVolume className="size-[18px]" />
          <span>+256-787760797</span>
        </h1>

        <h1
          className="text-sm font-semibold
           flex justify-center items-center
            gap-2"
        >
          <FaMapMarkerAlt className="size-[18px]" />
          <span>Lubiri Ring Road, Kabaka Njagala.</span>
        </h1>

        <h1
          className="text-sm font-semibold
           flex justify-center items-center
            gap-2"
        >
          <MdEmail className="size-[18px]" />
          <span>contact@miirosadat.com</span>
        </h1>
      </div>

      <nav
        className="w-full px-16 py-6
         bg-gray-100 flex
          justify-between items-center gap-1 sticky top-0 z-50"
      >
        <h1
          className="text-themepurple
         font-bold lg:text-[30px] text-3xl
          underline italic"
        >
          Owino Shop
        </h1>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm
              uppercase font-semibold cursor-pointer px-4 py-2
              rounded-lg hover:bg-themepurple
               hover:text-white"
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {link}
            </Link>
          ))}
        </ul>

        <div
          id="header-icons"
          className="lg:flex hidden
        justify-center items-center gap-6 text-black"
        >
          <FaSearch
            className="w-[20px] h-[20px] transform
             hover:scale-125 transition-transform
             duration-300 cursor-pointer hover:text-themepurple"
          />

          <IoPerson
            className="w-[20px] h-[20px] transform
             hover:scale-125 transition-transform
             duration-300 cursor-pointer hover:text-themepurple"
          />

          <FaHeart
            className="w-[20px] h-[20px] transform
             hover:scale-125 transition-transform text-red-600 
             duration-300 cursor-pointer hover:text-themepurple"
          />

          <div className="relative">
            <FaShoppingCart
              className="w-[20px] h-[20px] transform
                hover:scale-125 transition-transform text-green-600
                duration-300 cursor-pointer hover:text-themepurple"
            />
            <div
              className="bg-red-700 hover:bg-themeyellow
                text-white hover:text-black rounded-full absolute
                -top-3 -right-2 text-[14px] pl-0.5 pr-0.5 font-bold"
            >
              2
            </div>
          </div>
        </div>

        {/* Mobile View Starts here */}
        <div
          className="flex justify-center items-center lg:hidden md:hidden mt-3"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-themepurple text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-themepurple text-3xl cursor-pointer" />
            )}
          </div>
        </div>

        <div
          className={`${isMenuOpen ? "flex" : "hidden"}
           w-full h-fit bg-red-800 p-4
            absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul
            className="flex flex-col justify-center
           items-center gap-2 w-full"
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-white text-sm
                    uppercase font-semibold cursor-pointer
                     px-4 py-2
                    rounded-lg hover:bg-themeyellow
                     hover:text-black"
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
