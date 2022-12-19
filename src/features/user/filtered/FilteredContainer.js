import React from "react";
import FilteredComponent from "./components/FilteredComponent";
import Navbar from "../navbar-footer/NavbarComponent";
import Footer from "../navbar-footer/FooterComponent";
import "./css/filtered.css";
function FilteredContainer() {
  return (
    <>
      <Navbar />
      <FilteredComponent />
      <Footer />
    </>
  );
}

export default FilteredContainer;
