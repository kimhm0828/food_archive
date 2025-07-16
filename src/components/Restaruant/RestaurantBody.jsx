import React from 'react'
import RestaurantItem from './RestaurantItem'

const foodInfo = [
    {
        id : 'uuid',
        name: '이름',
        walkingTime: 'within5',
        rating: '5',
        tag: ['양식', '파스타']
    },
     {
        id : 'uuid2',
        name: '이름1',
        walkingTime: 'within10',
        rating: '4',
        tag: ['한식', '김치찌개']
    },
]
console.log(foodInfo);


function RestaurantBody() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {foodInfo.map(food => <RestaurantItem key={food.id} foodInfo={food}/> )}
        </div>
    </div>
  )
}

export default RestaurantBody