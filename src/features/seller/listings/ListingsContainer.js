import React from "react";
import ListingsComponent from "./components/ListingsComponent";
import Navbar from "../nav-footer/nav/Navbar";
import Footer from "../nav-footer/footer/footer";
import "./css/listing.css";
function ListingsContainer() {
  return (
    <>
      <Navbar />
      <ListingsComponent />
      <Footer />
    </>
  );
}

export default ListingsContainer;
