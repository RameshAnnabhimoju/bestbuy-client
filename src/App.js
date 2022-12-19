import React from "react";
import Home from "./features/user/home/HomeContainer";
import Item from "./features/user/item/ItemContainer";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Account from "./features/user/account/AccountContainer";
import SellerLoginContainer from "./features/seller/sellerLogin/SellerLoginContainer";
import DashboardContainer from "./features/seller/dashboard/DashboardContainer";
import FilteredContainer from "./features/user/filtered/FilteredContainer";
import SignupContainer from "./features/user/signup/SignupContainer";
import OrdersContainer from "./features/user/orders/OrdersContainer";
import SellerSignupContainer from "./features/seller/sellerSignup/sellerSignupContainer";
import ListingsContainer from "./features/seller/listings/ListingsContainer";
import SellerOrdersContainer from "./features/seller/sellerOrders/SellerOrdersContainer";
import PaymentsContainer from "./features/seller/payments/PaymentsContainer";
import SellerAccountContainer from "./features/seller/sellerAccount/SellerAccountContainer";
import Auth from "./Auth";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/filter" element={<FilteredContainer />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<SignupContainer />} />
        <Route path="/orders" element={<OrdersContainer />} />
        <Route path="/seller/login" element={<SellerLoginContainer />} />
        <Route path="/seller/signup" element={<SellerSignupContainer />} />
        <Route
          path="/seller/"
          element={<Auth Component={DashboardContainer} />}
        />
        <Route
          path="/seller/listings"
          element={<Auth Component={ListingsContainer} />}
        />
        <Route
          path="/seller/orders"
          element={<Auth Component={SellerOrdersContainer} />}
        />
        <Route
          path="/seller/payments"
          element={<Auth Component={PaymentsContainer} />}
        />
        <Route
          path="/seller/account"
          element={<Auth Component={SellerAccountContainer} />}
        />
      </Routes>
    </>
  );
}

export default App;
