import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[30vh] md:h-[45vh] lg:h-[60vh]">
        <div className=" relative w-full">
          <img
            src="/assets/b1.jpg"
            className="w-full h-full object-cover blur-sm"
            alt="Banner"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="bg-opacity-50 p-6 rounded-lg max-w-2xl mt-25">
          <h1 className="text-xl  text-green-600 md:text-4xl font-bold mb-4">
            Welcome to <span className="text-red-500">Voices of Palestine</span>
            <br />
            <span className="text-green-600 ">
              Stories that the world must hear
            </span>
          </h1>
          <p className="text-xs text-gray-600 md:text-lg">
            A platform to preserve the memories, truths, and hopes of
            Palestinians through stories, voice, and solidarity
          </p>
          <button
            href=""
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl my-24 group"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
