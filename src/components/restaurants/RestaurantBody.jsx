import React from "react";
import RestaurantItem from "./RestaurantItem.jsx";

const dummyData = [
  {
    id: "1a2b3c4d",
    name: "마마스 파스타",
    walkingTime: "IN_FIVE_MINUTES",
    rating: 4,
    tag: ["파스타"],
  },
  {
    id: "2e3f4g5h",
    name: "라파엘로 키친",
    walkingTime: "IN_SAIT",
    rating: 5,
    tag: ["양식", "스테이크", "고급"],
  },
  {
    id: "3i4j5k6l",
    name: "트라토리아 피에노",
    walkingTime: "IN_TEN_MINUTES",
    rating: 3,
    tag: ["이탈리안", "파스타", "코스요리", "데이트"],
  },
  {
    id: "4m5n6o7p",
    name: "오스테리아 서울",
    walkingTime: "TEN_MINUTES_OVER",
    rating: 5,
    tag: ["와인바", "양식"],
  },
  {
    id: "5q6r7s8t",
    name: "리틀 나폴리",
    walkingTime: "IN_FIVE_MINUTES",
    rating: 2,
    tag: ["피자"],
  },
  {
    id: "6u7v8w9x",
    name: "비스트로 상암",
    walkingTime: "IN_SAIT",
    rating: 4,
    tag: ["버거", "브런치"],
  },
  {
    id: "7y8z9a0b",
    name: "파스타팩토리",
    walkingTime: "IN_TEN_MINUTES",
    rating: 3,
    tag: ["파스타", "저녁"],
  },
  {
    id: "8c1d2e3f",
    name: "카사 미아",
    walkingTime: "TEN_MINUTES_OVER",
    rating: 1,
    tag: ["디저트"],
  },
  {
    id: "9g4h5i6j",
    name: "노블 다이닝",
    walkingTime: "IN_FIVE_MINUTES",
    rating: 5,
    tag: ["양식", "코스요리", "고급"],
  },
];

const foodInfo = dummyData;

function RestaurantBody() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodInfo.map((food) => (
          <RestaurantItem key={food.id} foodInfo={food} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantBody;
