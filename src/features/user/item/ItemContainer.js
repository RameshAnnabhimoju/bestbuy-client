import Navbar from "../navbar-footer/NavbarComponent";
import ItemDetails from "./components/ItemComponent";
import Reviews from "./components/ReviewsComponent";
import Footer from "../navbar-footer/FooterComponent";
import "./css/item.css";
export default function Item() {
  return (
    <>
      <Navbar />
      <div className="background">
        <div className="container">
          <ItemDetails />
          <Reviews />
        </div>
      </div>
      <Footer />
    </>
  );
}
