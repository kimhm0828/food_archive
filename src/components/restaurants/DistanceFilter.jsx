import React from 'react'
import { useRestaurants, useRestaurantsDispatch } from '../../contexts/RestaurantContext'

const DistanceFilter = () => {

    const restaurants = useRestaurants();
    const dispatch = useRestaurantsDispatch();

    return (
        <select
            className="p-2 text-gray-800 bg-gray-100 rounded"
            data-cy="rating-filter"
            value={restaurants.rating}
            onChange={event => {
                dispatch({type: 'DISTANCE_FILTER', selectedWalkingTime: event.target.value});
            }}>
            <option value="ALL">거리</option>
            <option value="IN_SAIT">상암IT 타워 내</option>
            <option value="IN_FIVE_MINUTES">걸어서 5분 이내</option>
            <option value="IN_TEN_MINUTES">걸어서 10분 이내</option>
            <option value="TEN_MINUTES_OVER">10분 초과</option>
        </select>
    )
}

export default DistanceFilter
