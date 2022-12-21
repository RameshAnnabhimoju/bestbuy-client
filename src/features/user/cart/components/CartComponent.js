import React, { useEffect, useState } from "react";
import bin from "../../../../assets/bin.png";
import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CButtonGroup,
  CCardBody,
  CCardTitle,
  CButton,
} from "@coreui/react";
import "../css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartVisibleToggle } from "../../../api/cartSlice";
import axios from "../../../api/axios";
import {
  getCartItems,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../../../api/cartSlice";
import { createOrder } from "../../../api/orderSlice";

function CartComponent() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.userData?.auth && !cart.loading) {
      dispatch(getCartItems(user.userData.user._id));
    }
  }, []);
  let subTotal = 0;
  if (cart.cartItems.length > 0) {
    subTotal = cart.cartItems.reduce(
      (total, item) =>
        total + parseInt(item.listingPrice) * parseInt(item.quantity),
      0
    );
  }
  function cartUpdateHandler(params) {
    const { type, id, quantity } = params;
    switch (type) {
      case "increase":
        dispatch(
          updateCartItem({
            id: id,
            payload: quantity + 1,
            user: user.userData.user._id,
          })
        );
        break;
      case "decrease":
        if (quantity > 1) {
          dispatch(
            updateCartItem({
              id: id,
              payload: quantity - 1,
              user: user.userData.user._id,
            })
          );
        }
        break;
      default:
        break;
    }
  }
  function removeCartItemHandler(id) {
    dispatch(removeCartItem({ id: id, user: user.userData.user._id }));
  }
  function clearCartHandler() {
    dispatch(clearCart(user.userData.user._id));
  }
  function checkoutHandler() {
    dispatch(createOrder(cart.cartItems));
    dispatch(clearCart(user.userData.user._id));
  }
  function toggleCartVisible() {
    dispatch(cartVisibleToggle(false));
  }
  return (
    <>
      <COffcanvas
        placement="end"
        visible={cart.cartVisible}
        onHide={toggleCartVisible}
      >
        <COffcanvasHeader>
          <COffcanvasTitle className="cart-header">Cart</COffcanvasTitle>

          <CCloseButton className="text-reset" onClick={toggleCartVisible} />
        </COffcanvasHeader>
        <COffcanvasBody>
          {cart.cartItems.length < 1 ? (
            <h3>No Items in Cart</h3>
          ) : (
            <>
              {cart.cartItems.length > 0 &&
                cart.cartItems.map((item) => {
                  return (
                    <div className="cart-card" key={item._id}>
                      <div>
                        <img
                          className="cart-image"
                          src={axios.defaults.baseURL + item.image}
                          alt=""
                        />
                      </div>
                      <CCardBody className="cart-body">
                        <div className="cart-titles">{item.title}</div>
                        <div className="cart-buttons">
                          <CCardTitle>₹ {item.listingPrice}</CCardTitle>
                          <CButtonGroup>
                            <CButton
                              color="secondary"
                              variant="outline"
                              onClick={() =>
                                cartUpdateHandler({
                                  type: "decrease",
                                  id: item._id,
                                  quantity: item.quantity,
                                })
                              }
                            >
                              -
                            </CButton>

                            <CButton color="black" variant="outline" disabled>
                              {item.quantity}
                            </CButton>

                            <CButton
                              color="secondary"
                              variant="outline"
                              onClick={() =>
                                cartUpdateHandler({
                                  type: "increase",
                                  id: item._id,
                                  quantity: item.quantity,
                                })
                              }
                            >
                              +
                            </CButton>
                          </CButtonGroup>
                          <CButton
                            color="danger"
                            onClick={() => removeCartItemHandler(item._id)}
                          >
                            <img id="bin-btn" src={bin} alt="" />
                          </CButton>
                        </div>
                      </CCardBody>
                    </div>
                  );
                })}
            </>
          )}
        </COffcanvasBody>
        <div className="cart-total">
          <CCardTitle>
            Sub-Total ({cart.cartItems.length} Items) : {subTotal}
          </CCardTitle>
          <br />
          <div className="cart-total-buttons">
            <CButton
              color="danger"
              onClick={clearCartHandler}
              disabled={!user.userData?.auth}
            >
              Clear Cart <img id="bin-btn" src={bin} alt="" />
            </CButton>
            <CButton onClick={checkoutHandler} disabled={!user.userData?.auth}>
              Checkout
            </CButton>
          </div>
        </div>
      </COffcanvas>
    </>
  );
}

export default CartComponent;
