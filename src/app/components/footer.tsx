const Footer = () => {
  return (
    <>
      <footer className="bg-white">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-8 border-t-2">
     
          <div className="max-w-full">
            <h2 className="font-bold text-2xl mb-4 lg:mb-[40px]">Funiro.</h2>
            <p className="leading-6 font-normal text-gray-700">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div>
            <h4 className="text-[#9F9F9F] text-[16px] font-medium mb-4 lg:mb-[40px]">
              Links
            </h4>
            <ul className="space-y-2">
              <li className="text-[#000000] text-[16px] font-medium">Home</li>
              <li className="text-[#000000] text-[16px] font-medium">Shop</li>
              <li className="text-[#000000] text-[16px] font-medium">About</li>
              <li className="text-[#000000] text-[16px] font-medium">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#9F9F9F] text-[16px] font-medium mb-4 lg:mb-[40px]">
              Help
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-700 cursor-pointer">Payment Option</li>
              <li className="hover:text-gray-700 cursor-pointer">Returns</li>
              <li className="hover:text-gray-700 cursor-pointer">Privacy Policies</li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-[#9F9F9F] text-[16px] font-medium mb-4 lg:mb-[40px]">
              Newsletter
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 pb-2 border-gray-300">
          
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="text-[#9F9F9F] text-[14px] font-normal flex-grow px-2 py-1 border rounded-md focus:outline-none"
              />
             
              <button className="font-bold text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-8 px-4 sm:px-8">
          <hr className="mx-auto w-full sm:w-[70%] border-gray-300" />
          <p className="text-center font-normal py-4 text-[14px] sm:text-[16px] text-[#000000]">
            2023 Funiro. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
