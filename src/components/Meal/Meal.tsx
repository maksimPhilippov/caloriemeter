import React from "react";
import { NutritionalValue } from "../../types/NutritionalValue";

interface MealProp {
  item: NutritionalValue;
}

export default function Meal(prop: MealProp) {
  const [changingMass, setChangingMass] = React.useState(prop.item.mass);

  function validateMass(mass: string): void {
    let value = parseInt(mass);
    if (Number.isNaN(value)) {
      value = 0;
    }
    setChangingMass(value);
  }

  const massCoeficient = changingMass / prop.item.mass;

  return (
    <div className="Meal">
      <p>{prop.item.name}</p>
      <input
        type="text"
        value={changingMass}
        onChange={(e) => validateMass(e.target.value)}
      />
      <p>{prop.item.calories * massCoeficient}</p>
    </div>
  );
}
