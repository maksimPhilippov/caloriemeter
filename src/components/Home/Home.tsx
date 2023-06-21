import React, { useEffect, useRef } from "react";
import { NutritionalValue } from "../../types/NutritionalValue";
import Meal from "../Meal/Meal";
import MealFinder from "../MealFinder/MealFinder";
import "./Home.scss";

export default function Home() {
  const [mealList, setMealList] = React.useState<NutritionalValue[]>([]);

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
    let newMeals = addMeals.reduce((proved: NutritionalValue[], meal) => {
      if (mealList.find((element) => element.name == meal.name) == undefined) {
        // no such food in mealList
        proved.push(meal);
      }
      return proved;
    }, []);
    if (newMeals.length != 0) {
      let newMealList = mealList.slice(0);
      newMealList.push(...newMeals);
      setMealList(newMealList);
    }
  }

  return (
    <div ref={thisElement} className="home-page">
      {mealList.map((mealItem, index) => (
        <Meal key={index} item={mealItem} index={index} />
      ))}
      <MealFinder listAdder={addNewMeals} />
    </div>
  );
}
