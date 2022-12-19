import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Auth(props) {
  const seller = useSelector((state) => state.seller);
  const navigate = useNavigate();
  useEffect(() => {
    if (!seller.sellerData?.auth) {
      navigate("/seller/login");
    }
  });
  const { Component } = props;
  return (
    <div>
      <Component />
    </div>
  );
}

export default Auth;
