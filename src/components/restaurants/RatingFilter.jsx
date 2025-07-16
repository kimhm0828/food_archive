import React from 'react'
import {useRestaurants, useRestaurantsDispatch} from '../../contexts/RestaurantContext'

const RatingFilter = () => {

    const restaurants = useRestaurants();
    const dispatch = useRestaurantsDispatch();

    return (
        <select
            className="p-2 text-gray-800 bg-gray-100 rounded"
            data-cy="rating-filter"
            value={restaurants.rating}
            onChange={event => {
                dispatch({type: 'RATING_FILTER', selectedRating: event.target.value});
                console.log('되나?');

                console.log(event.target.value);

            }}>
            <option value="ALL">별점</option>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
        </select>
    )
}

export default RatingFilter
