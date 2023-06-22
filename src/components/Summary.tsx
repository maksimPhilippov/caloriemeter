import React from "react";
import CalorieDisplay from "./CalorieDisplay";

interface SummaryProp {
  mealsCount: number;
  mealsColriesSum: string;
}

export default function Summary(prop: SummaryProp) {
  return (
    <div className="basic-element">
      {prop.mealsCount === 0 ? (
        <p>No food selected </p>
      ) : (
        <p>
          Summary <CalorieDisplay count={prop.mealsColriesSum} />
        </p>
      )}
    </div>
  );
}
