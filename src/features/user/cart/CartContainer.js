import React from "react";
import CartComponent from "./components/CartComponent";
function Cart({ visible, setVisible }) {
  return (
    <>
      <CartComponent visible={visible} setVisible={setVisible} />
    </>
  );
}

export default Cart;
