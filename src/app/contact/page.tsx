import React from 'react'
import Image from 'next/image' 
import { MdAccessTime, MdCall, MdLocationOn, MdOutlineSupportAgent } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'
import { GoTrophy } from 'react-icons/go'
import { LuBadgeCheck } from 'react-icons/lu'

export default function 
() {
  return (

    <div>
      


     <div className="w-full h-[400px] relative">
      <Image
        className="object-cover"
        src="/images/cart (2).png"
        alt="Banner"
         objectFit="cover"
          layout="fill"
      />
      </div>
      <div className="flex flex-col items-center bg-white py-12">
  {/* Heading */}
  <h1 className="text-4xl font-semibold text-[#000000] mb-8">Get In Touch With Us</h1>
  <p className="text-center font-normal text-[#9F9F9F] leading-[24px]">
    For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
  </p>
  <div className="flex flex-col lg:flex-row bg-white mt-[100px] p-8 w-full max-w-5xl">
    {/* Contact Details */}
    <div className="flex-1 space-y-6 pr-6">
      {/* Location */}
      <div className="flex items-start space-x-4">
        <MdLocationOn className="text-3xl text-[#000000]" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">
            236 5th SE Avenue,<br /> New York NY10000, <br /> United States
          </p>
        </div>
      </div>
      {/* Phone */}
      <div className="flex items-start space-x-4">
        <MdCall className="text-3xl text-[#000000]" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
          <p className="text-[#000000]">
            Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      {/* Timing */}
      <div className="flex items-start space-x-4">
        <MdAccessTime className="text-3xl text-[#000000]" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
          <p className="text-[#000000]">
            Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    {/* Form */}
    <div className="flex-1 pl-6 mt-8 lg:mt-0">
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        {/* Subject */}
        <div>
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the subject"
          />
        </div>
        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-[236px] bg-[#B88E2F] border-1 text-white p-3 rounded-sm font-medium hover:bg-[#ffc43b] transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>


 <div className="flex justify-around p-8 bg-[#FAF3EA] flex-wrap  mt-2">
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

  
  )
}
