import searchIcon from "../../../assets/search.png";
import userIcon from "../../../assets/user.png";
import cartIcon from "../../../assets/shopping-cart.png";
import Login from "../login/LoginContainer";
import Cart from "../cart/CartContainer";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartVisibleToggle } from "../../api/cartSlice";
import { fetchItemsByfilter, setFilters } from "../../api/itemSlice";
import { useNavigate } from "react-router-dom";
import "./css/navbar.css";
import { logout } from "../../api/userSlice";
import { Link } from "react-router-dom";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CForm,
  CFormInput,
  CButton,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CNavItem,
  CNavLink,
  CNavbarNav,
} from "@coreui/react";
export default function Navbar() {
  const searchInput = useRef();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const items = useSelector((state) => state.item);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loginVisible, setLoginVisible] = useState(false);
  function logoutHandler() {
    dispatch(logout());
  }
  const logginButton = (
    <>
      <CButton
        color="primary"
        variant="ghost"
        onClick={() => setLoginVisible(!loginVisible)}
      >
        <img className="nav-search" src={userIcon} alt="" />
        LOGIN
      </CButton>
    </>
  );
  const userProfileButton = (
    <>
      <CDropdown>
        <CDropdownToggle color="ghost">
          <img className="nav-search" src={userIcon} alt="" />
          Hi, {user.userData.user?.firstName}
        </CDropdownToggle>

        <CDropdownMenu>
          <CDropdownItem href="#">Account</CDropdownItem>
          <CDropdownItem href="#">My orders</CDropdownItem>
          <CDropdownItem onClick={logoutHandler}>Logout</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  );
  function navForm(e) {
    e.preventDefault();
    if (!searchInput?.current?.value) return;
    const query = new URLSearchParams({
      ...items.filters,
      // title: `/${searchInput.current.value}/i`,
      title: searchInput.current.value,
    }).toString();
    dispatch(fetchItemsByfilter(query));
  }
  function navbarCategory(e) {
    const { name } = e.target;
    dispatch(setFilters({ category: name }));
    const query = new URLSearchParams({ category: name }).toString();
    dispatch(fetchItemsByfilter(query));
    setTimeout(() => {
      navigate("/filter");
    }, 100);
  }
  return (
    <>
      <Login visible={loginVisible} setVisible={setLoginVisible} />
      <Cart />
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="/">BESTBUY.COM</CNavbarBrand>
          <CNavbarNav className="nav-links-container">
            <CNavItem>
              <CNavLink
                className="nav-links"
                onClick={navbarCategory}
                name="mobile"
              >
                Mobile
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                className="nav-links"
                onClick={navbarCategory}
                name="tablet"
              >
                Tablet
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                className="nav-links"
                onClick={navbarCategory}
                name="laptop"
              >
                Laptops
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                className="nav-links"
                onClick={navbarCategory}
                name="audio"
              >
                Audio
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                className="nav-links"
                onClick={navbarCategory}
                name="watch"
              >
                Watches
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex" onSubmit={navForm}>
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search by Title"
              ref={searchInput}
            />

            <CButton type="submit" color="primary" variant="ghost">
              <img className="nav-search" src={searchIcon} alt="" />
            </CButton>
            {user.userData?.auth ? userProfileButton : logginButton}
            <CButton
              color="primary"
              variant="ghost"
              onClick={() => {
                if (cart.cartVisible) {
                  dispatch(cartVisibleToggle(false));
                } else {
                  dispatch(cartVisibleToggle(true));
                }
              }}
            >
              <img className="nav-search" src={cartIcon} alt="" />
            </CButton>
          </CForm>
        </CContainer>
      </CNavbar>
    </>
  );
}
