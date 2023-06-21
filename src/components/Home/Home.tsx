import React, { useEffect, useRef } from "react";
import { NutritionalValue } from "../../types/NutritionalValue";
import Meal from "../Meal/Meal";
import MealFinder from "../MealFinder/MealFinder";

export default function Home() {
  const [mealList, setMealList] = React.useState<NutritionalValue[]>([
    {
      name: "rice",
      mass: 100,
      caloriesCoeficient: 1.3,
    },
  ]);

  const thisElement = useRef<HTMLDivElement>(null);
  const setEventListener = useEffect(() => {
    const ChangeMassListener = (e: Event) => {
      if (isCustomEvent(e)) {
        changeMassEventListener(e);
      }
    };
    thisElement.current?.addEventListener("massChange", ChangeMassListener);
    return () => {
      thisElement.current?.removeEventListener(
        "massChange",
        ChangeMassListener
      );
    };
  });

  function isCustomEvent(e: Event): e is CustomEvent {
    return "detail" in e;
  }

  function changeMassEventListener(event: CustomEvent) {
    let newMealList = mealList.slice(0);
    newMealList[event.detail.index].mass = event.detail.newvalue;
    setMealList(newMealList);
  }

  function addNewMeals(addMeals: NutritionalValue[]) {
    console.log("add");
    console.log(addMeals);
    let newMeals = addMeals.reduce((proved: NutritionalValue[], meal) => {
      if (mealList.find((element) => element.name == meal.name) == undefined) {
        // no such food in mealList
        proved.push(meal);
      }
      return proved;
    }, []);
    console.log(newMeals);
    if (newMeals.length != 0) {
      let newMealList = mealList.slice(0);
      newMealList.push(...newMeals);
      console.log(newMealList);
      setMealList(newMealList);
    }
  }

  return (
    <div ref={thisElement}>
      {mealList.map((mealItem, index) => (
        <Meal key={index} item={mealItem} index={index} />
      ))}
      <MealFinder listAdder={addNewMeals} />
    </div>
  );
}
