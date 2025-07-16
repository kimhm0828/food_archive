import React from 'react'

const RatingFilter = () => {
    return (
        <select className="p-2 text-gray-800 bg-gray-100 rounded"
        data-cy="rating-filter">
            <option value="ALL">All</option>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
        </select>
    )
}

export default RatingFilter
