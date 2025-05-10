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
          <button className="btn btn-success lg:my-7 my-3">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
