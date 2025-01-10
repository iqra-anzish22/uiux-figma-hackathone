import React from "react";
import Image from "next/image";
import { FaUser, FaCalendarAlt, FaTag, FaSearch, FaShippingFast } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function () {
  return (
    <div>
      <div className="w-full h-[400px] relative">
        <Image
          className="object-cover"
          src="/images/blog.png"
          alt="Banner"
          objectFit="cover"
          layout="fill"
        />

        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-50"
          src="/images/Group 55.png"
          alt="Banner"
          width={100}
          height={100}
        />
      </div>

      <Image
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12"
        src="/images/hb.png"
        alt="Banner"
        width={100}
        height={100}
      />

      <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
        {/* Blog Section */}
        <div className="col-span-2 space-y-8">
          {/* Blog 1 */}
          <div className="bg-white p-4 ml-10 mt-10">
            <img
              src="/images/blog1.png"
              alt="Blog 1"
              className="rounded-md w-[617px] h-[400px] object-cover mb-4"
            />
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaUser className="mr-2 text-[#9F9F9F]" />
                <span>Admin</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-[#9F9F9F] " />
                <span>Jan 1, 2025</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2 text-[#9F9F9F]" />
                <span>Wood</span>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4 text-[#000000]">
              Going all-in with millennial design
            </h2>
            <p className="text-[#9F9F9F] mt-2 text-center justify-center leading-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Pellentesque elit
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
            <button className="mt-4 text-black py-1 px-4 border-b-4 border-">
              Read More
            </button>
          </div>

          {/* Blog 2 */}



          <div className="bg-white p-4 ml-10">
            <img
              src="/images/blog2.png"
              alt="Blog 1"
              className="rounded-md w-[617px] h-[400px] object-cover mb-4"
            />
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaUser className="mr-2 text-[#9F9F9F]" />
                <span>Admin</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-[#9F9F9F] " />
                <span>Jan 1, 2025</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2 text-[#9F9F9F]" />
                <span>Wood</span>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4 text-[#000000]">
            Exploring new ways of decorating
            </h2>
            <p className="text-[#9F9F9F] mt-2 text-center justify-center leading-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices.. Pellentesque elit
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
            <button className="mt-4 text-black py-1 px-4 border-b-4 border-">
              Read More
            </button>
          </div>

          <div className="bg-white p-4 ml-10">
            <img
              src="/images/blog3.png"
              alt="Blog 1"
              className="rounded-md w-[617px] h-[400px] object-cover mb-4"
            />
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaUser className="mr-2 text-[#9F9F9F]" />
                <span>Admin</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-[#9F9F9F] " />
                <span>Jan 1, 2025</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2 text-[#9F9F9F]" />
                <span>Wood</span>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4 text-[#000000]">
            Handmade pieces that took time to make
            </h2>
            <p className="text-[#9F9F9F] mt-2 text-center justify-center leading-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus 
              risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
              turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
              pulvinar mattis nunc sed blandit libero. Pellentesque elit
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
            <button className="mt-4 text-black py-1 px-4 border-b-4 border-">
              Read More
            </button>
          </div>
        
        </div>

        {/* Sidebar Section */}
        <aside className="space-y-8 mt-10">
          {/* Search Bar */}
          <div className="bg-white p-4 ">
          <div className="flex items-center border border-[#9F9F9F] rounded p-2">
  <input
    type="text"
    className="w-full outline-none"
  />
  <FaSearch className="text-black ml-6 font-light" />
</div>

          </div>

          {/* Categories */}
          <div className="bg-white p-4 ">
            <h3 className="text-lg font-semibold text-[#000000] mb-10">Categories</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-[#9F9F9F]">
                <span className="mb-10">Crafts</span>
                <span>2</span>
              </li>
              <li className="flex justify-between text-[#9F9F9F]">
                <span className="mb-10">Design</span>
                <span>8</span>
              </li>
              <li className="flex justify-between text-[#9F9F9F]">
                <span className="mb-10">Handmade</span>
                <span>7</span>
              </li>
              <li className="flex justify-between text-[#9F9F9F]">
                <span className="mb-10">Interior</span>
                <span>1</span>
              </li>
              <li className="flex justify-between text-[#9F9F9F]">
                <span className="mb-10">Wood</span>
                <span>6</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4  mb-1-">
            <h3 className="text-lg font-semibold mb-10">Recent Posts</h3>
            <ul className="space-y-4">
  <li className="flex items-center space-x-4 mb-10">
    <img
      src="/images/rb1.png"
      alt="Post 1"
      className="rounded-md w-20 h-20"
    />
    <div>
      <p className="text-black font-semibold">Going all-in with <br /> millennial design</p>
      <p className="text-sm text-[#9F9F9F]">03 Aug 2022</p>
    </div>
  </li>
  <li className="flex items-center space-x-4 mb-10">
    <img
      src="/images/rb2.png"
      alt="Post 2"
      className="rounded-md  w-20 h-20"
    />
    <div>
      <p className="text-black font-semibold ">Exploring new ways <br /> of decorating</p>
      <p className="text-sm text-[#9F9F9F]">03 Aug 2022</p>
    </div>
  </li>
  <li className="flex items-center space-x-4 mb-10">
    <img
      src="/images/rb3.png"
      alt="Post 3"
      className="rounded-md w-20 h-20"
    />
    <div>
      <p className="text-black font-semibold mt-2">Handmade pieces <br /> that took time to make</p>
      <p className="text-sm text-[#9F9F9F] mt-2">J03 Aug 2022</p>
    </div>
  </li>
  <li className="flex items-center space-x-4">
    <img
      src="/images/rb4.png"
      alt="Post 4"
      className="rounded-md w-20 h-20"
    />
    <div>
      <p className="text-black font-semibold mt-2">Modern home <br /> in Milan</p>
      <p className="text-sm text-[#9F9F9F] mt-2">03 Aug 2022</p>
    </div>
  </li>
  <li className="flex items-center space-x-4">
    <img
      src="/images/rb5.png"
      alt="Post 5"
      className="rounded-md w-20 h-20"
    />
    <div>
      <p className="text-black font-semibold mt-2">Colorful office <br /> redesign</p>
      <p className="text-sm text-[#9F9F9F] mt-2">03 Aug 2022</p>
    </div>
  </li>
</ul>

          </div>
        </aside>
      </div>

      <div className="flex justify-center items-center  w-full max-w-[392px] mx-auto mb-[50px]">
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
