import { createContext, useContext, useReducer } from "react";

const dummyData = [
  {
    id: "1a2b3c4d",
    name: "마마스 파스타",
    walkingTime: 1,
    rating: 4,
    tag: ["파스타"],
  },
  {
    id: "2e3f4g5h",
    name: "라파엘로 키친",
    walkingTime: 0,
    rating: 5,
    tag: ["양식", "스테이크", "고급"],
  },
  {
    id: "3i4j5k6l",
    name: "트라토리아 피에노",
    walkingTime: 2,
    rating: 3,
    tag: ["이탈리안", "파스타", "코스요리", "데이트"],
  },
  {
    id: "4m5n6o7p",
    name: "오스테리아 서울",
    walkingTime: 3,
    rating: 5,
    tag: ["와인바", "양식"],
  },
  {
    id: "5q6r7s8t",
    name: "리틀 나폴리",
    walkingTime: 1,
    rating: 2,
    tag: ["피자"],
  },
  {
    id: "6u7v8w9x",
    name: "비스트로 상암",
    walkingTime: 0,
    rating: 4,
    tag: ["버거", "브런치"],
  },
  {
    id: "7y8z9a0b",
    name: "파스타팩토리",
    walkingTime: 2,
    rating: 3,
    tag: ["파스타", "저녁"],
  },
  {
    id: "8c1d2e3f",
    name: "카사 미아",
    walkingTime: 3,
    rating: 1,
    tag: ["디저트"],
  },
  {
    id: "9g4h5i6j",
    name: "노블 다이닝",
    walkingTime: 1,
    rating: 5,
    tag: ["양식", "코스요리", "고급"],
  },
  {
    id: "0k7l8m9n",
    name: "델리지오소",
    walkingTime: 0,
    rating: 3,
    tag: ["양식", "코스요리", "고급"],
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const RestaurantContext = createContext();

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
export const useRestaurants = () => useContext(RestaurantContext);

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