import React from "react";
import { NutritionalValue } from "../types/NutritionalValue";
import Meal from "./Meal";
import MealFinder from "./MealFinder";
import Summary from "./Summary";
import { ListContext } from "../types/ListContext";

export default function Home() {
  const [mealList, setMealList] = React.useState<NutritionalValue[]>([]);

  function listSetMass(mass: number, index: number) {
    let newMealList = mealList.slice(0);
    newMealList[index].mass = mass;
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
    <ListContext.Provider value={{ listAdder: addNewMeals }}>
      <div className="home-page">
        {mealList.map((mealItem, index) => (
          <Meal
            key={index}
            item={mealItem}
            setNewMass={(newmass) => listSetMass(newmass, index)}
          />
        ))}
        <Summary
          mealsCount={mealList.length}
          mealsColriesSum={mealList
            .reduce((sum, meal) => sum + meal.caloriesCoeficient * meal.mass, 0)
            .toFixed(0)}
        />
        <MealFinder listAdder={addNewMeals} />
      </div>
    </ListContext.Provider>
  );
}
