import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="wrapper h-[100px] mx-auto bg-[#ffff] flex flex-col shadow-md">
      <div className="flex justify-between items-center px-4 py-4">

        <div className="flex items-center space-x-2">
          <Image width={50} height={32} src="/images/logo.png" alt="Logo" />
          <Image width={130} height={41} src="/images/name.png" alt="Name" />

          
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
            Home
          </a>
          <a href="/shop" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
            Shop
          </a>
          <a href="/blog" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
            Blog
          </a>
          <a href="/contact" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
            Contact
          </a>
        </nav>


        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden lg:flex items-center space-x-4">
            <Image width={30} height={32} src="/images/logo2.png" alt="Logo" />
            <Image width={30} height={32} src="/images/serch.png" alt="Search" />
          </div>
          <Image width={30} height={32} src="/images/heart.png" alt="Heart" />
          <Link href="/cart">
            <MdOutlineShoppingCart className="text-xl w-[30px] h-[30px] text-gray-700" />
          </Link>

          <button className="md:hidden text-gray-700 text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      <div className="block md:hidden">
        <nav className="flex flex-col space-y-2 px-4">
          <Link href="/">
            
              Home
          
          </Link>
          <Link href="/shop" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
             className="text-[#000000] text-[16px] font-medium hover:text-gray-400"
              Shop
          
          </Link>
          <Link href="/blog"  className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
          
              Blog
           
          </Link>
          <Link href="/contact"  className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
             
              Contact
            
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
