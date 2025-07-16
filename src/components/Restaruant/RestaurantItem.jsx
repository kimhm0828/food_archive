import React from 'react'
import IconButton from '../ui/IconButton'

const STAR_MAP = {
    1 : "⭐️",
    2 : "⭐️⭐️",
    3 : "⭐️⭐️⭐️",
    4 : "⭐️⭐️⭐️⭐️",
    5 : "⭐️⭐️⭐️⭐️⭐️"
}

const WALKING_TIME_MAP = {
    IN_SAIT: "상암IT 타워 내",
    IN_FIVE_MINUTES: "걸어서 5분 이내",
    IN_TEN_MINUTES: "걸어서 10분 이내",
    TEN_MINUTES_OVER: "10분 초과"
}

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

          <p className="text-gray-700 mb-1">
            <span className="font-medium">평점:</span> {STAR_MAP[foodInfo.rating]}
          </p>

          <p className="text-gray-700 text-sm">
            <span className="font-medium">도보 시간:{' '}</span>
                {WALKING_TIME_MAP[foodInfo.walkingTime]}
            </p>

             <div className="flex flex-wrap gap-2 mt-3">
                {foodInfo.tag.map((tag, idx) => (
                    <span key={idx}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RestaurantItem