import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
const Stories = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/public/Json/StoriesCard.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error cards: ", error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-green-100 py-10">
      <h1 className="text-2xl font-semibold text-center text-green-600 italic mb-6 p-5">
        Echoes from Palestine{" "}
        <span className="text-red-500">
          Stories of Struggle, Hope, and Humanity
        </span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl  rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded"
            />
            <div className="p-5 flex-grow text-center">
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">
                {card.category}
              </p>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-sm text-gray-600 mb-5">{card.summary}</p>
              <hr className="mb-5 border-t border-dashed border-gray-400" />
              <button className="mt-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Read More
              </button>
            </div>
            <div className="px-5 pb-4 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <FaUser className="size-6 rounded-full" />
                <span className="mt-2">{card.author}</span>
              </div>
              <span>{card.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
