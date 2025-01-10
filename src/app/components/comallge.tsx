const Collage = () => {
    const images = [
      "/images/col1.jpg", 
      "/images/col2.png", 
      "/images/Rectangle 41.png", 
      "/images/Rectangle 45.png", 
      "/images/Rectangle 40.png", 
      "/images/col6.png", 
      "/images/col4.png", 
      "/images/Rectangle 44.png", 
    ];
  
    return (
      <div className="bg-white py-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-lg text-gray-500">Share your setup with</h2>
          <h1 className="text-3xl font-bold text-black mt-2">#FuniroFurniture</h1>
        </div>
  
        {/* Collage */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Top-left image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[0]}
              alt="Collage Item 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Top-right image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[1]}
              alt="Collage Item 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Middle-left image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[2]}
              alt="Collage Item 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Middle-center image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[3]}
              alt="Collage Item 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Middle-right image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[4]}
              alt="Collage Item 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Bottom-left image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[5]}
              alt="Collage Item 6"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Bottom-center image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[6]}
              alt="Collage Item 7"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Bottom-right image */}
          <div className="w-[200px] h-[200px]">
            <img
              src={images[7]}
              alt="Collage Item 8"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Collage;
  