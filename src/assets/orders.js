import React from "react";
import items from "../assets/Cataloge";
function orders() {
  const item = items();
  return {
    ...item[0],
    orderPlaced: "4 October 2022",
    Total: "2652",
    orderId: "2545698782154",
  };
}

export default orders;
