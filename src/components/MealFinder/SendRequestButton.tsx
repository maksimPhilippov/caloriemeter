import React, { useCallback, useContext, useState } from "react";
import { ListContext } from "../../types/ListContext";
import FindMealRequest from "../../utils/FindMealRequest";
import { click } from "@testing-library/user-event/dist/click";

export interface SendRequestButtonProp {
  query: string;
}
export default function SendRequestButton(prop: SendRequestButtonProp) {
  const listContext = useContext(ListContext);
  const [pressed, setPressed] = useState(false);

  const releaseButton = () => setPressed(false);
  const click = pressed
    ? () => {}
    : function () {
        console.log("press");
        if (listContext !== null) {
          setPressed(true);
          FindMealRequest(prop.query, listContext.listAdder, releaseButton);
        }
      };

  const buttonClass = pressed ? "button-disabled" : "basic-interactive";
  return (
    <div>
      <button className={buttonClass} onClick={click}>
        find meals
      </button>
    </div>
  );
}
