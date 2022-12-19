import React from "react";
import items from "../../../../assets/Cataloge";
import { useSelector } from "react-redux";
import { CCard, CCardHeader, CCardBody, CCardTitle } from "@coreui/react";
import orders from "../../../../assets/orders";
function OrdersComponent() {
  const item = items();
  const order = useSelector((state) => state.order);
  return (
    <div id="orders-container-background">
      <div className="orders-container">
        <h2>My Orders</h2>
        <CCard className="orders">
          <CCardHeader component="h6" className="order-header">
            <div>Ordered on: {order.orderPlaced}</div>
            <div>Total: ₹ {order.Total}</div>
            <div>OrderID: {order.orderId}</div>
          </CCardHeader>

          <CCardBody>
            <CCardTitle>Delivered</CCardTitle>
            <div className="orders-cards">
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
            </div>
          </CCardBody>
        </CCard>
        <CCard className="orders">
          <CCardHeader component="h6" className="order-header">
            <div>Ordered on: {order.orderPlaced}</div>
            <div>Total: ₹ {order.Total}</div>
            <div>OrderID: {order.orderId}</div>
          </CCardHeader>

          <CCardBody>
            <CCardTitle>Dispatched</CCardTitle>
            <div className="orders-cards">
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
              <div className="order-cart-card">
                <div>
                  <img
                    className="order-cart-image"
                    src={item[0].imageUrl}
                    alt=""
                  />
                </div>
                <CCardBody>
                  <div className="order-cart-titles">
                    {item[0].title} is a good chocolate from india can be
                    document is googling this is always a great
                  </div>
                  <div className="order-cart-buttons">
                    <CCardTitle>₹ {item[0].currentPrice}</CCardTitle>
                  </div>
                </CCardBody>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
}

export default OrdersComponent;
