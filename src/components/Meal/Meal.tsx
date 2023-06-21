import React from "react";
import { NutritionalValue } from "../../types/NutritionalValue";

interface MealProp {
  item: NutritionalValue;
  index: number;
}

export default function Meal(prop: MealProp) {
  const thisElement = React.useRef<HTMLDivElement>(null);

  function validateMass(mass: string): void {
    let value = parseInt(mass);
    if (Number.isNaN(value)) {
      value = 0;
    }

    let massChange = new CustomEvent("massChange", {
      bubbles: true,
      detail: {
        index: prop.index,
        newvalue: value,
      },
    });

    thisElement.current?.dispatchEvent(massChange);
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
        calories: {(prop.item.caloriesCoeficient * prop.item.mass).toFixed(0)}
      </p>
    </div>
  );
}
