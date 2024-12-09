import React from "react";
import Image from "next/image";


const Product = () => {
  return (
    <div>
      {/* Section Heading */}
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          {/* Centered Heading */}
          <h1 className="text-[40px] font-bold text-gray-800 text-center mb-12">
            Our Products
          </h1>
          {/* Product Grid */}
          <div className="flex flex-wrap -m-4">
            {/* Product Card 1 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white  rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px] relative">
                  {/* Image */}
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr1.png"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-[#E97171] text-white text-sm font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    -30%
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                  <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                    Syltherine
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                    Stylish cafe chair
                  </h2>
                  <p className="mt-1 ml-[4px] font-semibold text-[20px]">
                    Rp 2.500.000{" "}
                    <del className="text-gray-500">Rp 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px]  relative">
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr2.png"
                  />
                </div>
                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                    Syltherine
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                    Stylish cafe chair
                  </h2>
                  <p className="mt-1 ml-[4px] font-semibold text-[20px]">
                    Rp 2.500.000{" "}
                    <del className="text-gray-500">Rp 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white  rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px] relative">
                  {/* Image */}
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr3.png"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-[#E97171] text-white text-sm font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    -50%
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                Lolito
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                  Luxury big sofa
                  </h2>
                  <p className="mt-1 ml-[2px] font-semibold text-[18px]">
                  Rp 7.000.000 
                    <del className="text-gray-500 ml-[4px]"> Rp 14.000.000</del>
                  </p>
                </div>
              </div>
            </div>
            {/* Product Card 4 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white  rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px] relative">
                  {/* Image */}
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr4.png"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-sm font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    New
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                Respira
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                  Outdoor bar table and stool
                  </h2>
                  <p className="mt-1 ml-[4px] font-semibold text-[20px]">
                  Rp 500.000{" "}
                   
                  </p>
                </div>
              </div>
            </div>
            {/* Product Card 5 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px]  relative">
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr5.png"
                  />
                </div>
                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                Grifo
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                  Night lamp
                  </h2>
                  <p className="mt-1 ml-[4px] font-semibold text-[20px]">
                  Rp 1.500.000{" "}
                
                  </p>
                </div>
              </div>
            </div>
            {/* Product Card 6 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white  rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px] relative">
                  {/* Image */}
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr6.png"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-sm font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    New
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                Muggo
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                  Small mug
                  </h2>
                  <p className="mt-1 ml-[4px] font-semibold text-[20px]">
                  Rp 150.000
                  </p>
                </div>
              </div>
            </div>
            {/* Product Card 7 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px] relative">
                  {/* Image */}
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr7.png"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-[#E97171] text-white text-sm font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    -50%
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                Pingky
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                  Cute bed set
                  </h2>
                  <p className="mt-1 ml-[2px] font-semibold text-[18px]">
                  Rp 7.000.000{" "}
                    <del className="text-gray-500 ml-[4px]">Rp 14.000.000</del>
                  </p>
                </div>
              </div>
            </div>
            {/* Product Card 8 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="w-[285px] h-[446px] bg-white rounded-lg overflow-hidden">
                {/* Image */}
                <div className="w-[285px] h-[301px] relative">
                  {/* Image */}
                  <Image
                    width={200}
                    height={100}
                    quality={100}
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/pr8.png"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-sm font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    New
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-[#3A3A3A] text-[24px] font-semibold tracking-widest title-font mb-1">
                Potty
                  </h3>
                  <h2 className="text-[#898989] text-[16px] title-font text-lg font-medium">
                  Minimalist flower pot
                  </h2>
                  <p className="mt-1 ml-[4px] font-semibold text-[20px]">
                  Rp 500.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  mt-6">
            <button className="ml-[20px] px-6 py-2 w-[245px] h-[48px]  text-[16px] font-semibold text-[#B88E2F] hover:bg-blue-600 border-2 border-[#B88E2F]">
              Show More
            </button>
          </div>
        </div>
      </section>

<div className="wrapper h-[370px] bg-[#FCF8F3]">


<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-[40px] mb-4 font-bold text-[#3A3A3A]">
      50+ Beautiful rooms 
      inspiration
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
      Our designer already made a lot of beautiful prototipe of rooms that inspire you
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#B88E2F] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Explore More
        </button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2">
 
      <Image   
      
      width={70}
      height={50}
      
        className="object-cover object-center rounded w-[150px]"
        alt="hero"
        src="/images/sec.png"
      />


      
    </div>
  </div>
</section>

</div>


    </div>
  );
};

export default Product;
