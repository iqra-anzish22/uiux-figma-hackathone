import React from "react";
import Image from "next/image";
import { MdDelete, MdOutlineSupportAgent } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { LuBadgeCheck } from "react-icons/lu";

export default function Cart() {
  return (
    <div>
      <div className="w-full h-[400px] relative">
        <Image
          className="object-cover"
          src="/images/sip.png"
          alt="Banner"
          objectFit="cover"
          layout="fill"
        />

        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-50"
          src="/images/shipc.png"
          alt="Banner"
          width={100}
          height={100}
        />
      </div>

      <Image
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12"
        src="/images/ship2.png"
        alt="Banner"
        width={100}
        height={100}
      />


<div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-row justify-between items-start">
      {/* Cart Items */}
      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9F1E7]">
              <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]">Product</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#000000]">Subtotal</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 flex items-center space-x-4">
                <Image
                  src="/images/Asgaard sofa 5.png"
                  alt="Asgaard sofa"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <span className="text-[#9F9F9F] font-medium">Asgaard sofa</span>
              </td>
              <td className="px-6 py-4 text-[#9F9F9F]">Rs. 250,000.00</td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-12 border rounded-md py-2 px-2 text-center text-gray-700"
                />
              </td>
              <td className="px-6 py-4 text-[#9F9F9F]">Rs. 250,000.00</td>
              <td className="px-6 py-4 text-[#9F9F9F]">
                <button className="text-[#B88E2F] hover:text-red-700">
                  <MdDelete className="w-5 h-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="w-[393px] h-[390px] mb-20">
        <div className="bg-[#F9F1E7] p-10">
          <h2 className="text-lg font-semibold text-[32px] text-center text-[#000000] mb-8">Cart Totals</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-black mb-8">Subtotal:</span>
            <span className="text-[#9F9FF] text-[16px] font-medium mb-8">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center mb-8">
            <span className="text-gray-600 mb-8">Total:</span>
            <span className="text-[#B88E2F] font-bold mb-8">Rs. 250,000.00</span>
          </div>
          <button className="w-[150px]  ml-20 bg-[#F9F1E7] text-[#000000] border-2 border-gray-500 font-normal py-2 px-2 rounded-xl hover:bg-orange-600">
            Check Out
          </button>
        </div>
      </div>
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
