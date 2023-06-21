import React from "react";

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
        <p>you will get {prop.mealsColriesSum} calories </p>
      )}
    </div>
  );
}
