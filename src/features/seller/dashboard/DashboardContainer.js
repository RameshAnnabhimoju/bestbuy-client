import React from "react";
import DashboardComponent from "./components/DashboardComponent";
import Navbar from "../nav-footer/nav/Navbar";
import Footer from "../nav-footer/footer/footer";
import "./css/dashboard.css";
function DashboardContainer() {
  return (
    <>
      <Navbar />
      <DashboardComponent />
      <Footer />
    </>
  );
}

export default DashboardContainer;
