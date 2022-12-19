import React from "react";
import OrderComponent from "./components/OrdersComponent";
import Navbar from "../navbar-footer/NavbarComponent";
import Footer from "../navbar-footer/FooterComponent";
import "./css/orders.css";
function OrdersContainer() {
  return (
    <>
      <Navbar />
      <OrderComponent />
      <Footer />
    </>
  );
}

export default OrdersContainer;
