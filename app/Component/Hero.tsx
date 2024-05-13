import React from "react";
import HeroImage from "@/public/POS preview 1.png";
import bgimg from "@/public/Mask group.png"
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <section className="relative bg-[#ff5722] text-white">
        <div className="absolute inset-0 overdlow-vissible opacity-20 ">
          <img
            src={bgimg.src}
            alt="Background pattern"
            className="object-cover w-full h-full aspect-auto"
            width="1440"
            height="800"
           
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Navbar />
          <div className="flex flex-wrap  -mx-4 mt-8 lg:mt-16 items-center">
            <div className=" w-full flex flex-col justify-center align-middle items-center lg:w-1/2 px-4 mb-8 lg:mb-0 relative">
              <h1 className="text-5xl font-bold leading-tight mb-4">
                Join our Ecosystem and rule the market
              </h1>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-[#FF5722] hover:bg-gray-100 transition-colors">
                Get it now
              </button>
            </div>
            {/* Hero image */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-transparent overdlow-vissible relative">
                <img
                  src={HeroImage.src}
                  alt="Dashboard"
                  className="w-full object-cover aspect-auto"
                  width="600"
                  height="400"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
