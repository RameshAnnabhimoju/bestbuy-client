import userIcon from "../../../../assets/user.png";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchItemListings } from "../../../api/itemSlice";
import { getOrder } from "../../../api/orderSlice";
import { logout } from "../../../api/sellerSlice";
import "./navbar.css";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CNavItem,
  CNavbarNav,
} from "@coreui/react";
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const seller = useSelector((state) => state.seller);
  function logoutHandler() {
    dispatch(logout());
    navigate("/seller/login");
  }
  const navDispatchLinks = {
    listings: fetchItemListings(seller.sellerData.seller._id),
    orders: getOrder(seller.sellerData.seller._id),
  };
  function navApiDispatchHandler(e) {
    const { name } = e.target;
    dispatch(navDispatchLinks[name]);
  }
  return (
    <>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">BESTBUY.COM</CNavbarBrand>
          <CNavbarNav className="nav-links-container">
            <CNavItem>
              <NavLink className="nav-links" to="/seller">
                Dashboard
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink
                name="listings"
                className="nav-links"
                to="/seller/listings"
                onClick={navApiDispatchHandler}
              >
                Listings
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink
                name="orders"
                className="nav-links"
                to="/seller/orders"
                onClick={navApiDispatchHandler}
              >
                Orders
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink className="nav-links" to="/seller/payments">
                Payments
              </NavLink>
            </CNavItem>
          </CNavbarNav>
          <CDropdown>
            <CDropdownToggle color="ghost">
              <img className="nav-search" src={userIcon} alt="" />
              Hi, {seller.sellerData.seller.firstName}
            </CDropdownToggle>

            <CDropdownMenu>
              <CDropdownItem href="#">Account</CDropdownItem>
              <CDropdownItem onClick={logoutHandler}>Logout</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CContainer>
      </CNavbar>
    </>
  );
}
