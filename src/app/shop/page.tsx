import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FaShareAlt, FaExchangeAlt, FaHeart } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

// Product data array
const products = [
  {
    id: 1,
    image: "/images/pr1.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 2,
    image: "/images/pr2.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 3,
    image: "/images/pr3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 4,
    image: "/images/pr4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "49849",
    discount: "New",
  },
  {
    id: 1,
    image: "/images/pr1.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 2,
    image: "/images/pr2.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 3,
    image: "/images/pr3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 4,
    image: "/images/pr4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "49849",
    discount: "New",
  },
  {
    id: 1,
    image: "/images/pr1.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 2,
    image: "/images/pr2.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 3,
    image: "/images/pr3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 4,
    image: "/images/pr4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "49849",
    discount: "New",
  },
  {
    id: 1,
    image: "/images/pr1.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 2,
    image: "/images/pr2.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 3,
    image: "/images/pr3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 4,
    image: "/images/pr4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "49849",
    discount: "New",
  },
];

const renderProducts = () => {
  return (
    <div className="flex flex-wrap m-20 bg-white">
      {products.map((product) => (
        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <div className="relative w-full h-full bg-white rounded-lg overflow-hidden group">
            {/* Image */}
            <div className="w-full h-[301px] relative">
              <Image
                width={200}
                height={100}
                quality={100}
                alt={product.name}
                className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-110"
                src={product.image}
              />
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-2 right-2 bg-[#E97171] text-white text-sm font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  {product.discount}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 bg-[#F4F5F7]">
              <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                {product.name}
              </h3>
              <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                {product.description}
              </h2>
              <p className="mt-1 ml-[4px] font-semibold text-[20px]">
                {product.price}{" "}
                {product.originalPrice && (
                  <del className="text-gray-500">{product.originalPrice}</del>
                )}
              </p>
            </div>

            {/* Hover Effect - Buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="space-x-4 text-white">
                <button className="px-2 text-[#B88E2F] py-2 bg-[#FFFFFF] rounded-lg">
                  Add to Cart
                </button>
                <div className="flex space-x-2 mt-4">
                  <button className="text-white hover:text-gray-300 flex items-center">
                    <FaShareAlt className="mr-2" />
                    Share
                  </button>
                  <button className="text-white hover:text-gray-300 flex items-center">
                    <FaExchangeAlt className="mr-2" />
                    Compare
                  </button>
                  <button className="text-white hover:text-gray-300 flex items-center">
                    <FaHeart className="mr-2" />
                    Like
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function FilterSortBar() {
  return (
    <div>
      {/* Add an image at the top */}
      <div className="w-full h-[400px] relative">
        <Image
          src="/images/shopbanner.png" // Path to your banner image
          alt="Shop Banner"
          layout="fill"
          objectFit="cover"
          
        />
      </div>

      {/* FilterSort Bar */}
      <div className="bg-[#F9F1E7] py-4 px-6 flex items-center justify-between flex-wrap">
        {/* Filter Section */}
        <div className="flex items-center space-x-4 flex-wrap">
          {/* Filter Icon */}
          <button className="flex items-center text-gray-600">
            <FontAwesomeIcon icon={faFilter} className="mr-1" />
            Filter
          </button>
          {/* View Icons */}
          <button className="text-gray-600">
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button className="text-gray-600">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <span className="text-sm text-gray-600">|</span>

          {/* Showing Results */}
          <span className="text-sm text-gray-600">Showing 1–16 of 32 results</span>
        </div>

        {/* Sort Section */}
        <div className="flex items-center space-x-4 flex-wrap">
          {/* Show Option */}
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Show</span>
            <input
              type="number"
              className="w-12 border border-gray-300 rounded-md text-center text-sm py-1"
              value="16"
              readOnly
            />
          </div>
          {/* Sort Option */}
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Sort by</span>
            <select className="border border-gray-300 rounded-md text-sm py-1 px-2">
              <option>Default</option>
              <option>Price</option>
              <option>Popularity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Section with White Background and Top Margin */}
      <div className="bg-white py-12 cursor-pointer">
        {renderProducts()}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center  w-full max-w-[392px] mx-auto mb-[50px] cursor-pointer">
        <div className="flex gap-[38px]">
          <div className="w-[60px] h-[60px] rounded-[10px] border p-2 text-[20px] bg-[#B88E2F] flex justify-center items-center">
            1
          </div>
          <div className="w-[60px] h-[60px] rounded-[10px] border p-2 text-[20px] bg-[#F9F1E7] flex justify-center items-center">
            2
          </div>
          <div className="w-[60px] h-[60px] rounded-[10px] border p-2 text-[20px] bg-[#F9F1E7] flex justify-center items-center">
            3
          </div>
          <div className="w-[98px] h-[60px] rounded-[10px] border p-2 text-[20px] bg-[#F9F1E7] flex justify-center items-center">
            Next
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-around p-8 bg-[#FAF3EA] flex-wrap">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <span className="text-4xl text-black dark:text-white">
            <GoTrophy />
          </span>
          <div>
            <h3 className="font-bold">High Quality</h3>
            <p className="text-[#898989]">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <span className="text-4xl">
            <LuBadgeCheck />
          </span>
          <div>
            <h3 className="font-bold">Genuine Products</h3>
            <p className="text-[#898989]">Guaranteed original items</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <span className="text-4xl">
            <FaShippingFast />
          </span>
          <div>
            <h3 className="font-bold">Fast Delivery</h3>
            <p className="text-[#898989]">Delivered in 2-5 days</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <span className="text-4xl">
            <MdOutlineSupportAgent />
          </span>
          <div>
            <h3 className="font-bold">24/7 Support</h3>
            <p className="text-[#898989]">Contact us anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
