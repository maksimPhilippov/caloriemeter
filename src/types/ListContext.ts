import { createContext } from "react";
import { NutritionalValue } from "./NutritionalValue";

export interface ListContextType {
  listAdder: (items: NutritionalValue[]) => void;
}

export const ListContext = createContext<ListContextType | null>(null);
