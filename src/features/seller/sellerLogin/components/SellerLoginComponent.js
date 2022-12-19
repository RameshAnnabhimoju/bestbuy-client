import React, { useEffect, useState } from "react";
import { CFormInput, CButton, CSpinner, CForm } from "@coreui/react";
import store from "../../../../assets/online-store.png";
import buy from "../../../../assets/buy.png";
import buying from "../../../../assets/buying.png";
import delivery from "../../../../assets/delivery.png";
import delivered from "../../../../assets/delivered.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sellerLogin } from "../../../api/sellerSlice.js";
function SellerLoginComponent() {
  const seller = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const [sellerLoginValues, setSellerLoginValues] = useState(initialState);
  function changeHandler(e) {
    const { name, value } = e.target;
    setSellerLoginValues({ ...sellerLoginValues, [name]: value });
  }
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    dispatch(sellerLogin({ ...sellerLoginValues }));
    setSellerLoginValues({ ...initialState });
  }
  useEffect(() => {
    if (seller.sellerData?.auth) {
      navigate("/seller");
    }
  });
  return (
    <div className="seller-login-container">
      <div className="left-container">
        <h1 className="title">BESTBUY.COM</h1>
        <div className="icons">
          <img className="icon" src={store} alt="" />
          <img className="icon" src={buy} alt="" />
          <img className="icon" src={buying} alt="" />
          <img className="icon" src={delivery} alt="" />
          <img className="icon" src={delivered} alt="" />
        </div>
        <h1 className="description">Sell hastle free on BESTBUY.COM</h1>
      </div>
      <div className="right-container">
        <br />
        <h1>Seller login</h1>
        <br />
        <CForm onSubmit={submitHandler} noValidate>
          <div>
            <CFormInput
              name="email"
              type="text"
              floatingLabel="Email ID"
              placeholder="name@example.com"
              value={sellerLoginValues.email}
              onChange={changeHandler}
              invalid={seller.errors?.email ? true : false}
            />
            {seller.errors?.email && (
              <div className="helper-text">{seller.errors.email}</div>
            )}
          </div>
          <br />
          <div>
            <CFormInput
              name="password"
              type="password"
              floatingLabel="Password"
              placeholder="Password"
              value={sellerLoginValues.password}
              onChange={changeHandler}
              invalid={seller.errors?.password ? true : false}
            />
            {seller.errors?.password && (
              <div className="helper-text">{seller.errors.password}</div>
            )}
          </div>
          <br />
          <div className="seller-buttons">
            <CButton
              type="submit"
              color="primary"
              className="seller-login-button"
            >
              Login
              {seller.loading && <CSpinner component="span" size="sm" />}
            </CButton>
            <h4>Or</h4>
            <CButton color="warning" onClick={() => navigate("/seller/signup")}>
              Become a Seller
            </CButton>
          </div>
        </CForm>
      </div>
    </div>
  );
}

export default SellerLoginComponent;
