import React from 'react'
import { NutritionalValue } from '../../types/NutritionalValue'

export default function Home() {
  const [mealList, setMealList] = React.useState<[NutritionalValue]>(
    [
      {
        name: "rice",
        mass: 100,
        calories: 130,
      },
    ]
  )
  return (
    <div>Home</div>
  )
}
