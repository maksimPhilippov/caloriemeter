import React from "react";
import FindMealRequest from "../../utils/FindMealRequest";
import { NutritionalValue } from "../../types/NutritionalValue";

interface MealFinderProp {
  listAdder: (items: NutritionalValue[]) => void;
}
export default function MealFinder(prop: MealFinderProp) {
  const [inputText, setInputText] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => FindMealRequest(inputText, prop.listAdder)}>
        find meals
      </button>
    </div>
  );
}
