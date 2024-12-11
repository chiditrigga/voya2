import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { HiMenu } from "react-icons/hi";
// import { IoMdArrowDropdown } from "react-icons/io";

import Home from "../assets/House.svg";

import Wallet from "../assets/Wallet.svg";
import List from "../assets/ListChecks.svg";
import Coins from "../assets/HandCoins.svg";
import Bell from "../assets/Bell.svg";
import Basket from "../assets/Basket.svg";
import Plus from "../assets/PlusSquare.svg";
import Ellipse from "../assets/Ellipse 775.svg";
import Logo2 from "../assets/logo2.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full">
      <div className="w-full px-3 xl:px-6 py-2 flex justify-between items-center">
        {/* Logo and Search */}
        <div className="flex items-center space-x-4">
          <div>
            <Image className="w-10" src={Logo2} alt="" />
          </div>
          <div className="relative hidden sm:flex">
            {/* <FaSearch className="absolute top-3 left-3 text-gray-400" /> */}
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100  focus:outline-none"
            />
          </div>
        </div>

        {/* Links for larger screens */}
        <div className="hidden lg:flex  lg:space-x-3 xl:space-x-7 items-center">
          <a
            href="#"
            className="  items-center text-gray-700 hover:text-blue-600"
          >
            <Image src={Home} alt="home" className="w-6 mx-auto" />
            Home
          </a>
          <a
            href="#"
            className=" items-center text-gray-700 hover:text-blue-600"
          >
            <Image src={Wallet} alt="home" className="w-6 mx-auto" />
            Wallet
          </a>
          <a
            href="#"
            className=" items-center text-gray-700 hover:text-blue-600 font-semibold"
          >
            <Image src={List} alt="home" className="w-6 mx-auto" />
            Plan a trip
          </a>
          <a
            href="#"
            className=" items-center text-gray-700 hover:text-blue-600"
          >
            <Image src={Coins} alt="home" className="w-6 mx-auto" />
            Commission for life
          </a>
          <button className="bg-[#0D6EFD] text-white px-2 xl:px-4 py-1 rounded-sm hover:bg-blue-600">
            Subscribe
          </button>
          <a
            href="#"
            className=" items-center text-gray-700 hover:text-blue-600"
          >
            <Image src={Bell} alt="home" className="w-6 mx-auto" />
            Notification
          </a>
          <a
            href="#"
            className=" items-center text-gray-700 hover:text-blue-600"
          >
            <Image src={Basket} alt="home" className="w-6 mx-auto" />
            Carts
          </a>
          <a
            href="#"
            className=" items-center text-gray-700 hover:text-blue-600"
          >
            <Image src={Plus} alt="home" className="w-6 mx-auto" />
            Create
          </a>
          <div className="flex items-center space-x-1">
            <Image src={Ellipse} alt="Profile" className="rounded-full w-8 h-8" />
            {/* <IoMdArrowDropdown className="text-gray-700" /> */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {/* <HiMenu className="text-2xl text-gray-700" /> */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="p-4 space-y-2">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Image src={Home} alt="home" className="w-6 me-1" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Image src={Wallet} alt="home" className="w-6 me-1" />
              Wallet
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600 font-semibold"
            >
              <Image src={List} alt="home" className="w-6 me-1" />
              Plan a trip
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Image src={Coins} alt="home" className="w-6 me-1" />
              Commission for life
            </a>
            <button className="w-full bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Image src={Bell} alt="home" className="w-6 me-1" />
              Notification
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Image src={Basket} alt="home" className="w-6 pe-1" />
              Carts
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Image src={Plus} alt="home" className="w-6 pe-1" />
              Create
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
