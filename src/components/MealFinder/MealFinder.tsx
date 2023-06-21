import React from "react";
import FindMealRequest from "../../utils/FindMealRequest";
import { NutritionalValue } from "../../types/NutritionalValue";

interface MealFinderProp {
  listAdder: (items: NutritionalValue[]) => void;
}
export default function MealFinder(prop: MealFinderProp) {
  const [inputText, setInputText] = React.useState("");

  return (
    <div className="basic-element">
      <input
        className="basic-interactive"
        placeholder="input some food here"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="basic-interactive"
        onClick={() => FindMealRequest(inputText, prop.listAdder)}
      >
        find meals
      </button>
    </div>
  );
}
