import React from "react";
import { NutritionalValue } from "../types/NutritionalValue";
import SendRequestButton from "./SendRequestButton";

interface MealFinderProp {
  listAdder: (items: NutritionalValue[]) => void;
}
export default function MealFinder(prop: MealFinderProp) {
  const [inputText, setInputText] = React.useState("");

  return (
    <div className="basic-element">
      <input
        className="basic-interactive"
        placeholder="input food"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <SendRequestButton query={inputText} />
    </div>
  );
}
