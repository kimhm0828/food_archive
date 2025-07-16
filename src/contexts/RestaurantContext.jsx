import { createContext, useContext, useReducer } from "react";

const dummyData = [
  {
    id: "1a2b3c4d",
    name: "마마스 파스타",
    walkingTime: "IN_FIVE_MINUTES",
    rating: "FOUR_STAR",
    tag: ["파스타"],
  },
  {
    id: "2e3f4g5h",
    name: "라파엘로 키친",
    walkingTime: "IN_SAIT",
    rating: "FIVE_STAR",
    tag: ["양식", "스테이크", "고급"],
  },
  {
    id: "3i4j5k6l",
    name: "트라토리아 피에노",
    walkingTime: "IN_TEN_MINUTES",
    rating: "THREE_STAR",
    tag: ["이탈리안", "파스타", "코스요리", "데이트"],
  },
  {
    id: "4m5n6o7p",
    name: "오스테리아 서울",
    walkingTime: "TEN_MINUTES_OVER",
    rating: "FIVE_STAR",
    tag: ["와인바", "양식"],
  },
  {
    id: "5q6r7s8t",
    name: "리틀 나폴리",
    walkingTime: "IN_FIVE_MINUTES",
    rating: "TWO_STAR",
    tag: ["피자"],
  },
  {
    id: "6u7v8w9x",
    name: "비스트로 상암",
    walkingTime: "IN_SAIT",
    rating: "FOUR_STAR",
    tag: ["버거", "브런치"],
  },
  {
    id: "7y8z9a0b",
    name: "파스타팩토리",
    walkingTime: "IN_TEN_MINUTES",
    rating: "THREE_STAR",
    tag: ["파스타", "저녁"],
  },
  {
    id: "8c1d2e3f",
    name: "카사 미아",
    walkingTime: "TEN_MINUTES_OVER",
    rating: "ONE_STAR",
    tag: ["디저트"],
  },
  {
    id: "9g4h5i6j",
    name: "노블 다이닝",
    walkingTime: "IN_FIVE_MINUTES",
    rating: "FIVE_STAR",
    tag: ["양식", "코스요리", "고급"],
  }
];

// 음식점 정보에 대한 context 생성 및 사용
export const RestaurantContext = createContext();
export const useRestarants = () => useContext(RestaurantContext);

// eslint-disable-next-line react-refresh/only-export-components
export const RestaurantDispatchContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, dispatch] = useReducer(reducer, {
    data: dummyData,
    walkingTimeFilter: "ALL",
    ratingFilter: "ALL",
  });

  return (
    <RestaurantContext.Provider value={restaurants}>
      <RestaurantDispatchContext.Provider value={dispatch}>
        {children}
      </RestaurantDispatchContext.Provider>
    </RestaurantContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRestaurantsDispatch = () =>
  useContext(RestaurantDispatchContext);

const reducer = (restaurants, action) => {
  const { data, walkingTimeFilter, ratingFilter } = restaurants;

  switch (action.type) {
    case "ADD": {
      const { newRestaurant } = action;
      return {
        data: [...data, newRestaurant],
        walkingTimeFilter,
        ratingFilter,
      };
    }

    case "UPDATE": {
      const { updateRestaurant } = action;
      const updatedRestaurants = data.map((restaurant) =>
        restaurant.id === updateRestaurant.id
          ? { ...updateRestaurant }
          : restaurant,
      );
      return { data: updatedRestaurants, walkingTimeFilter, ratingFilter };
    }

    case "DELETE": {
      const { id } = action;
      const deletedRestaurants = data.filter(
        (restaurant) => restaurant.id !== id,
      );
      return { data: deletedRestaurants, walkingTimeFilter, ratingFilter };
    }

    case "RATING_FILTER": {
      return { data, walkingTimeFilter, ratingFilter: action.selectedRaiting };
    }

    case "DISTANCE_FILTER": {
      return {
        data,
        walkingTimeFilter: action.selectedWalkingTime,
        ratingFilter,
      };
    }
  }
};
