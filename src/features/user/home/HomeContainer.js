import React from "react";
import Navbar from "../navbar-footer/NavbarComponent";
import Carousel from "./components/CarouselComponent";
import HomeItems from "./components/HomeItemsComponent";
import Footer from "../navbar-footer/FooterComponent";
import "./css/home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <h3>BEST DEALS FROM YOUR FAVORITE CATEGORIES</h3>
      <HomeItems />
      <Footer />
    </>
  );
};

export default Home;
