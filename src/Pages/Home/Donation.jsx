import React from "react";

const Donation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your donation!");
  };

  return (
    <div className="bg-gradient-to-b from-white to-green-100 px-5 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-4">
        Support for Palestine
      </h1>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Your generous donation helps provide urgent aid and relief for those affected. Stand in solidarity and make a difference today
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="bg-white p-8 rounded-lg shadow-md">
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
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
            >
              Donate
            </button>
          </form>
        </div>

        <div className="text-center">
          <img
            src="/public/assets/kid.jpg"
            alt="Support Palestine"
            className="mx-60 rounded-2xl w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Donation;
