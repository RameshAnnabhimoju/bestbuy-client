import React from "react";
import AccountComponent from "./components/AccountComponent";
import Navbar from "../navbar-footer/NavbarComponent";
import Footer from "../navbar-footer/FooterComponent";
import "./css/account.css";
function Account() {
  return (
    <>
      <Navbar />
      <AccountComponent />
      <Footer />
    </>
  );
}

export default Account;
