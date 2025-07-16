import { useState } from 'react'
import RestaurantBody from './components/Restaruant/RestaurantBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RestaurantBody></RestaurantBody>
  )
}

export default App
