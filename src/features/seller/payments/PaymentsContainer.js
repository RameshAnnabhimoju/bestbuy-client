import React from "react";
import PaymentsComponent from "./components/PaymentsComponent";
import Navbar from "../nav-footer/nav/Navbar";
import Footer from "../nav-footer/footer/footer";
import "./css/payments.css";
function PaymentsContainer() {
  return (
    <>
      <Navbar />
      <PaymentsComponent />
      <Footer />
    </>
  );
}

export default PaymentsContainer;
