import RestaurantItem from "./RestaurantItem.jsx";
import { useRestaurants } from "../../contexts/RestaurantContext.jsx";

function RestaurantBody() {
  const { data } = useRestaurants();

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((food) => (
          <RestaurantItem key={food.id} foodInfo={food} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantBody;
