"use client";

import { useState } from "react";

const Slideimage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Inner Peace",
      subtitle: "Bad Room",
      image: "/images/slide1.png", // Path to your image in the public folder
    },
    {
      id: 2,
      title: "Cozy Workspace",
      subtitle: "Study Room",
      image: "/images/slide2.png", // Path to your image in the public folder
    },
    {
      id: 3,
      title: "Bright Kitchen",
      subtitle: "Kitchen",
      image: "/images/slide3.webp", // Path to your image in the public folder
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#f8f5f1] min-h-screen">
      {/* Left Section */}
      <div className="flex-1 max-w-md text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">50+ Beautiful rooms inspiration</h1>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
          Explore More
        </button>
      </div>

      {/* Right Section: Carousel */}
      <div className="flex-1 relative max-w-2xl">
        <div
          className="relative h-96 w-full bg-cover bg-center rounded-lg transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded shadow">
            <p className="text-sm text-gray-500">{slides[currentSlide].subtitle}</p>
            <h2 className="text-lg font-semibold">{slides[currentSlide].title}</h2>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideimage;












