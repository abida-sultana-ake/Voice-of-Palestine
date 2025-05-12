import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router"; 

const Stories = () => {
  const [cards, setCards] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("/public/Json/StoriesCard.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error cards: ", error));
  }, []);

  const visibleCards = visible ? cards : cards.slice(0, 6);

  return (
    <div className="bg-gradient-to-b from-white to-green-100 pt-10">
      <h1 className="text-2xl font-semibold text-center text-green-600 italic p-5">
        Echoes from Palestine{" "}
        <span className="text-red-500">
          Stories of Struggle, Hope, and Humanity
        </span>
      </h1>
      <p className="text-sm font-semibold text-center text-gray-500 italic mb-6 px-5">
        From the daily hardships under occupation to moments of joy, resistance,
        and unity,
        <br /> these narratives shine a light on the strength of Palestinian
        identity and the unbreakable spirit of its people.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden flex flex-col"
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
              <h2 className="text-lg font-semibold text-gray-800 min-h-[70px]">
                {card.title}
              </h2>
              <p className="text-sm text-gray-600 mb-5 min-h-[60px]">
                {card.summary}
              </p>
              <hr className="mb-5 border-t border-dashed border-gray-400" />
              <Link to={`/StoryDetails/${card.id}`}>
                <button className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-800 transition-colors duration-300 ease-out border-2 border-green-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-green-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Read More</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </button>
              </Link>
            </div>
            <div className="px-5 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <FaUser className="size-6 rounded-full" />
                <span className="mt-2">{card.author}</span>
              </div>
              <span>{card.date}</span>
            </div>
          </div>
        ))}
      </div>

      {cards.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisible(!visible)}
            className="relative px-6 py-2 mb-5 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-green-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-green-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-green-400 -rotate-12"></span>
            <span className="relative">
              {visible ? "Show Less" : "See All"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Stories;