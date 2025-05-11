import React from "react";
import CountUp from "react-countup";

const CounterScroll = () => {
  return (
    <div className="px-16 py-12 bg-green-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-4">
        Impact in Numbers
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
        Discover how our collective voice is creating measurable change around
        the world
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="bg-gradient-to-br from-green-100 to-green-300 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 w-full h-48">
          <h2 className="text-6xl font-bold mt-5 mb-2">
            <CountUp end={1500} duration={2} />+
          </h2>
          <p className="text-gray-600">Voices That Matter</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-300 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300  w-full h-48">
          <h2 className="text-6xl font-bold  mt-5 mb-2">
            <CountUp end={2265} duration={2} />+
          </h2>
          <p className="text-gray-600">Rising Awareness</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-300 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 w-full h-48">
          <h2 className="text-6xl font-bold  mt-5 mb-2">
            <CountUp end={4480} duration={2} />+
          </h2>
          <p className="text-gray-600">Strength in Unity</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-300 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 w-full h-48">
          <h2 className="text-6xl font-bold mt-5 mb-2">
            <CountUp end={9875} duration={2} />+
          </h2>
          <p className="text-gray-600">Global Support Rising</p>
        </div>
      </div>
    </div>
  );
};

export default CounterScroll;
