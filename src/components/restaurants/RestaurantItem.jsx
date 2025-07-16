import React from "react";
import { useNavigate } from "react-router-dom";
import { DISTANCE } from "../../constants/distance.js";
import IconButton from "../ui/IconButton.jsx";
import { RAITING_ICON } from "../../constants/star.js";
import React from "react";
import IconButton from "../ui/IconButton.jsx";
import { useRestaurantsDispatch } from "../../contexts/RestaurantContext.jsx";

const STAR_MAP = {
  1: RAITING_ICON.ONE_STAR,
  2: RAITING_ICON.TWO_STAR,
  3: RAITING_ICON.THREE_STAR,
  4: RAITING_ICON.FOUR_STAR,
  5: RAITING_ICON.FIVE_STAR,
};

const WALKING_TIME_MAP = {
  0: DISTANCE.IN_SAIT,
  1: DISTANCE.IN_FIVE_MINUTES,
  2: DISTANCE.IN_TEN_MINUTES,
  3: DISTANCE.TEN_MINUTES_OVER,
};

function RestaurantItem({ foodInfo }) {
  const dispatch = useRestaurantsDispatch();
  console.log(foodInfo);

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-4 mb-4 border border-gray-200 hover:shadow-lg transition-all">
      <div className="absolute top-3 right-3 z-10">
        <div className="flex gap-2">
          <IconButton
            icon={"✏️"}
            onClick={() =>
              navigate("/form", {
                state: {
                  actionTitle: "수정",
                  restaurant: foodInfo,
                },
              })
            }
          />
          <IconButton
            icon={"🗑"}
            onClick={() => dispatch({ type: "DELETE", id: foodInfo.id })}
          />
        </div>
      </div>

      <img
        src={foodInfo.photo || "https://placehold.co/600x400"} // 기본 이미지
        alt={foodInfo.name}
        className="w-full sm:w-60 h-40 mt-8 object-cover"
      />

      <div className="sm:w-60 p-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {foodInfo.name}
        </h2>

        <p className="text-gray-700 mb-1">
          <span className="font-medium">평점:</span> {RAITING_ICON[foodInfo.rating]}
        </p>

        <p className="text-gray-700 text-sm">
          <span className="font-medium">도보 시간: </span>
          {DISTANCE[foodInfo.walkingTime]}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {Array.isArray(foodInfo.tag) &&
            foodInfo.tag.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantItem;
