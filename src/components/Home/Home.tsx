import React from "react";
import { NutritionalValue } from "../../types/NutritionalValue";
import Meal from "../Meal/Meal";

export default function Home() {
  const [mealList, setMealList] = React.useState<[NutritionalValue]>([
    {
      name: "rice",
      mass: 100,
      caloriesCoeficient: 1.3,
    },
  ]);
  return (
    <div>
      {mealList.map((mealItem) => (
        <Meal item={mealItem} />
      ))}
    </div>
  );
}
