import React from "react";
import SellerAccountComponent from "./components/SellerAccountComponent";
import Navbar from "../nav-footer/nav/Navbar";
import Footer from "../nav-footer/footer/footer";
import "./css/sellerAccount.css";
function SellerAccountContainer() {
  return (
    <>
      <Navbar />
      <SellerAccountComponent />
      <Footer />
    </>
  );
}

export default SellerAccountContainer;
