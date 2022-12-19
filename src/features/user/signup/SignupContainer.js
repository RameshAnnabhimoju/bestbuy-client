import SignupComponent from "./components/SignupComponent";
import Navbar from "../navbar-footer/NavbarComponent";
import Footer from "../navbar-footer/FooterComponent";
import React from "react";

function SignupContainer() {
  return (
    <>
      <Navbar />
      <SignupComponent />
      <Footer />
    </>
  );
}

export default SignupContainer;
