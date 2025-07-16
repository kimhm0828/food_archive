import React from 'react'
import IconButton from '../ui/IconButton'

function RestaurantItem({foodInfo}) {

    return (
    <div className="relative flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-4 mb-4 border border-gray-200 hover:shadow-lg transition-all">
        <div className="absolute top-3 right-3 z-10">
            <div className="flex gap-2">
                <IconButton icon={'✏️'}/>
                <IconButton icon={'🗑'} />
            </div>
        </div>
        
        <img
            src={foodInfo.imageUrl || "https://placehold.co/600x400"} // 기본 이미지
            alt={foodInfo.name}
            className="w-full sm:w-60 h-40 mt-8 object-cover"
        />

        <div className="sm:w-60 p-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{foodInfo.name}</h2>
            <div className="flex flex-wrap gap-2 mb-3">
                {foodInfo.tag.map((tag, idx) => (
                    <span key={idx}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        #{tag}
                    </span>
                ))}
          </div>

          <p className="text-gray-700 mb-1">
            <span className="font-medium">평점:</span> {foodInfo.rating} ⭐
          </p>

          <p className="text-gray-700 text-sm">
            <span className="font-medium">도보 시간:{' '}</span>
            {foodInfo.walkingTime === 'within5'
              ? '5분 이내'
              : foodInfo.walkingTime === 'within10'
              ? '10분 이내'
              : '10분 이상'}
            </p>
        </div>
    </div>
  )
}

export default RestaurantItem