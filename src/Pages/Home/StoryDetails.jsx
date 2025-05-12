import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/public/Json/StoriesCard.json")
      .then((res) => res.json())
      .then((data) => {
        const foundStory = data.find((item) => item.id.toString() === id);
        setStory(foundStory);
      })
      .catch((err) => console.error("Error fetching story details:", err));
  }, [id]);

  if (!story) {
    return (
      <div className="text-center mt-10 text-gray-600 text-lg">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
        <div>
            <h1 className="text-4xl text-center text-green-700 m-10">Stories of Palestine</h1>
        </div>
      <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-white to-green-100  mb-12 shadow-md rounded-lg mt-10">
        <button
          onClick={() => navigate(-1)}
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group mb-6"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-600 group-hover:h-full"></span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            ← Back
          </span>
        </button>

        <img
          src={story.image}
          alt={story.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{story.title}</h1>
        <p className="text-sm text-gray-500 italic mb-4">
          {story.category} | {story.date}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">{story.summary}</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {story.categoryDetails}
        </p>
        <p className="text-right text-sm text-gray-600">— {story.author}</p>
      </div>
    </div>
  );
};

export default StoryDetails;
