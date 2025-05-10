import React, { useEffect, useState } from "react";
const AboutUs = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/public/Json/AboutUs.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fethcing cards:", error));
  }, []);

  return (
    <div className="px-6 py-12 bg-green-50 text-center">
      <h1 className="text-4xl text-green-600 font-bold  mb-6">About Us</h1>

      <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-10">
        <span className="text-red-500">Voices of Palestine</span> is a platform
        dedicated to sharing untold stories, struggles, and hopes of the
        Palestinian people. Our mission is to amplify their voices and preserve
        their truth through stories, visuals, and global solidarity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card bg-gradient-to-br from-green-100 via-green-200 to-green-300 shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
