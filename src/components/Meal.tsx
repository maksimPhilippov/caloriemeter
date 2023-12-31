import React from "react";
import { NutritionalValue } from "../types/NutritionalValue";
import CalorieDisplay from "./CalorieDisplay";

interface MealProp {
  item: NutritionalValue;
  setNewMass: (mass: number) => void;
}

export default function Meal(prop: MealProp) {
  const thisElement = React.useRef<HTMLDivElement>(null);

  function validateMass(mass: string): void {
    let value = parseInt(mass);
    if (Number.isNaN(value)) {
      value = 0;
    }

    prop.setNewMass(value);
  }

  return (
    <div ref={thisElement} className="meal-item basic-element">
      <p>{prop.item.name}</p>
      <label>
        {" "}
        mass:
        <input
          className="basic-interactive"
          type="text"
          value={prop.item.mass}
          onChange={(e) => validateMass(e.target.value)}
        />
      </label>
      <p>
        <CalorieDisplay count={prop.item.caloriesCoeficient * prop.item.mass} />
      </p>
    </div>
  );
}
