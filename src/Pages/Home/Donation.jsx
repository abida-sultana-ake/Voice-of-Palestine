import React from "react";

const Donation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your donation!");
  };

  return (
    <div className="bg-gradient-to-b from-white to-green-100 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-4">
        Support for Palestine
      </h1>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Your generous donation helps provide urgent aid and relief for those
        affected. Stand in solidarity and make a difference today.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Donate Now</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
            <input
              type="number"
              placeholder="Amount (৳)"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
              min="1"
            />
            <textarea
              placeholder="Message (Optional)"
              className="w-full border border-gray-300 rounded px-4 py-2"
              rows="4"
            />
            <button
              type="submit"
              className="relative inline-block px-5 py-2.5 rounded font-medium text-white group"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-600 to-green-500"></span>
              <span className="absolute inset-0 w-full h-full mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-600 to-green-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-600 to-green-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-600 from-green-500"></span>
              <span className="relative">Donate</span>
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/kid.jpg"
            alt="Support Palestine"
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Donation;