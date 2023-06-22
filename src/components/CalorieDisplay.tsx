import React from "react";

interface CalorieDisplayProp {
  count: string | number;
}

export default function CalorieDisplay(prop: CalorieDisplayProp) {
  return <span className="calorie-display">Calories: {prop.count}</span>;
}
