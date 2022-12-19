import React from "react";
import BlankNav from "../nav-footer/nav/BlankNav";
import SellerSignupComponent from "./components/sellerSignupComponent";
import "./css/sellerSignup.css";
function SellerSignupContainer() {
  return (
    <>
      <BlankNav />
      <SellerSignupComponent />
    </>
  );
}

export default SellerSignupContainer;
