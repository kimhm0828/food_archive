import React from "react";
import TopControls from "./TopControls";
import { navigate } from "react-router-dom";
import RestaurantBody from "./restaurants/RestaurantBody.jsx";

const Home = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <button
          onClick={() => navigate("/form")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          맛집 등록
        </button>
        <RestaurantBody />
      </div>
    </div>
  );
};

export default Home;
