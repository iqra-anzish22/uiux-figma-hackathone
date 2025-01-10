import React from "react";
import Image from "next/image";
import { FaShareAlt, FaExchangeAlt, FaHeart } from "react-icons/fa";


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
    discount: "",
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
    originalPrice: "",
    discount: "New",
  },
  {
    id: 5,
    image: "/images/pr5.png",
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    discount: "",
  },
  {
    id: 6,
    image: "/images/pr6.png",
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    discount: "New",
  },
  {
    id: 7,
    image: "/images/pr7.png",
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 8,
    image: "/images/pr8.png",
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    discount: "New",
  },
];

const Product = () => {
  return (
    <div>
      {/* Section Heading */}
      <section className="text-gray-600 body-font bg-white cursor-pointer">
        <div className="container px-5 py-24 mx-auto">
          {/* Centered Heading */}
          <h1 className="text-[40px] font-bold text-gray-800 text-center mb-12">
            Our Products
          </h1>
          {/* Product Grid */}
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="relative w-[285px] h-[446px] bg-white rounded-lg overflow-hidden group">
                  {/* Image */}
                  <div className="w-[285px] h-[301px] relative">
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
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
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
          <div className="flex justify-center mt-6">
            <button className="ml-[20px] px-6 py-2 w-[245px] h-[48px] text-[16px] font-semibold text-[#B88E2F] hover:bg-[#97731f] hover:text-white border-2 border-[#B88E2F]">
              Show More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
