import { NutritionalValue } from "../types/NutritionalValue";
import requestItem from "../types/requestItem";

function tokenize(requestString: string): string[] {
  return requestString
    .split(" ")
    .map(
      (token) => token.trim() //delete spaces
    )
    .filter((token) => token.length != 0); // delete empty strings
}

function isTokenValid(token: string) {
  let match = token.match(/\d(kg|lb|g)/);
  if (match === null) {
    return true;
  } else {
    return false;
  }
}

export default async function FindMealRequest(
  requestString: string,
  adder: (items: NutritionalValue[]) => void
) {
  let tokens = tokenize(requestString);
  let query = tokens.filter((token) => isTokenValid(token)).join(" ");

  fetch("https://api.api-ninjas.com/v1/nutrition?query=" + query, {
    headers: {
      "X-Api-Key": "o83iN0OBHRqWd14nNEtbmw==Gm7yAxhcawET75xO",
    },
  })
    .then((meals) => meals.json())
    .then((mealsInfo: requestItem[]) => {
      let refinedMealsInfo = mealsInfo.map((mealInfo) => {
        let newMealInfo: NutritionalValue = {
          name: mealInfo.name,
          mass: mealInfo.serving_size_g,
          caloriesCoeficient: mealInfo.calories / mealInfo.serving_size_g,
        };
        return newMealInfo;
      });
      adder(refinedMealsInfo);
    });
}
