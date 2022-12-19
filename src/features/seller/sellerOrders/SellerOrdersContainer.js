import React from "react";
import SellerOrdersComponent from "./components/SellerOrdersComponent";
import Navbar from "../nav-footer/nav/Navbar";
import Footer from "../nav-footer/footer/footer";
import "./css/sellerOrders.css";
function SellerOrdersContainer() {
  return (
    <>
      <Navbar />
      <SellerOrdersComponent />
      <Footer />
    </>
  );
}

export default SellerOrdersContainer;
