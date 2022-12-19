import React, { useEffect, useState } from "react";
import { CFormInput, CButton, CAlert, CSpinner } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../../api/userSlice";
function SignupComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userInitialVales = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    hno: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  };
  const [userValues, setUserVales] = useState(userInitialVales);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [button, setButton] = useState(true);
  function changeHandler(e) {
    const { name, value } = e.target;
    setUserVales({ ...userValues, [name]: value });
  }
  function signupHandler() {
    dispatch(createUser({ ...userValues }));
  }
  useEffect(() => {
    if (user.userData?._id) {
      setUserVales(userInitialVales);
      setButton(false);
      setConfirmPassword("");
    }
  }, [user.userData._id]);
  console.log(button);
  return (
    <div className="account-container-background">
      <div className="account-container">
        <div className="profile-header">
          <h1>Signup</h1>
        </div>
        {!button && (
          <CAlert color="success">
            Your Account has been created successfully . authauth LOGIN using
            the email and password.
          </CAlert>
        )}
        <br />
        <h4>Profile Details</h4>
        <div className="profile-name">
          <div>
            <CFormInput
              name="firstName"
              className="name-input"
              type="text"
              id="firstname-input"
              floatingLabel="First Name"
              placeholder="First Name"
              value={userValues.firstName}
              onChange={changeHandler}
              invalid={user.errors?.firstName?.message ? true : false}
            />
            {user.errors?.firstName?.message && (
              <div className="helper-text">{user.errors.firstName.message}</div>
            )}
          </div>
          <div>
            <CFormInput
              name="lastName"
              className="name-input"
              type="text"
              id="lastname-input"
              floatingLabel="Last Name"
              placeholder="Last Name"
              value={userValues.lastName}
              onChange={changeHandler}
              invalid={user.errors?.lastName?.message ? true : false}
            />
            {user.errors?.lastName?.message && (
              <div className="helper-text">{user.errors.lastName.message}</div>
            )}
          </div>
          <div>
            <CFormInput
              name="email"
              className="name-input"
              type="email"
              id="email-input"
              floatingLabel="Email ID"
              placeholder="Email ID"
              value={userValues.email}
              onChange={changeHandler}
              invalid={user.errors?.email?.message ? true : false}
            />
            {user.errors?.email?.message && (
              <div className="helper-text">{user.errors.email.message}</div>
            )}
          </div>
          <div>
            <CFormInput
              name="mobile"
              className="name-input"
              type="text"
              id="mobile-input"
              floatingLabel="Mobile"
              placeholder="Mobile"
              value={userValues.mobile}
              onChange={changeHandler}
              invalid={user.errors?.mobile?.message ? true : false}
            />
            {user.errors?.mobile?.message && (
              <div className="helper-text">{user.errors.mobile.message}</div>
            )}
          </div>

          <div>
            <CFormInput
              name="password"
              className="name-input"
              type="password"
              id="password-input"
              floatingLabel="Password"
              placeholder="Password"
              value={userValues.password}
              onChange={changeHandler}
              invalid={user.errors?.password?.message ? true : false}
            />
            {user.errors?.password?.message && (
              <div className="helper-text">{user.errors.password.message}</div>
            )}
          </div>

          <CFormInput
            name="confirmPassword"
            className="name-input"
            type="password"
            id="confirm-password-input"
            floatingLabel="Confirm Password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <br />
        <h4>Address Details</h4>
        <div className="profile-name">
          <div>
            <CFormInput
              name="hno"
              className="name-input"
              type="text"
              id="hno-input"
              floatingLabel="House No."
              placeholder="House No"
              value={userValues.hno}
              onChange={changeHandler}
              invalid={user.errors?.hno?.message ? true : false}
            />
            {user.errors?.hno?.message && (
              <div className="helper-text">{user.errors.hno.message}</div>
            )}
          </div>

          <div>
            <CFormInput
              name="area"
              className="name-input"
              type="text"
              id="area-input"
              floatingLabel="Area"
              placeholder="Area"
              value={userValues.area}
              onChange={changeHandler}
              invalid={user.errors?.area?.message ? true : false}
            />
            {user.errors?.area?.message && (
              <div className="helper-text">{user.errors.area.message}</div>
            )}
          </div>

          <div>
            <CFormInput
              name="city"
              className="name-input"
              type="text"
              id="city-input"
              floatingLabel="City"
              placeholder="City"
              value={userValues.city}
              onChange={changeHandler}
              invalid={user.errors?.city?.message ? true : false}
            />
            {user.errors?.city?.message && (
              <div className="helper-text">{user.errors.city.message}</div>
            )}
          </div>

          <div>
            <CFormInput
              name="state"
              className="name-input"
              type="text"
              id="state-input"
              floatingLabel="State"
              placeholder="State"
              value={userValues.state}
              onChange={changeHandler}
              invalid={user.errors?.state?.message ? true : false}
            />
            {user.errors?.state?.message && (
              <div className="helper-text">{user.errors.state.message}</div>
            )}
          </div>
          <div>
            <CFormInput
              name="country"
              className="name-input"
              type="text"
              id="country-input"
              floatingLabel="Country"
              placeholder="Country"
              value={userValues.country}
              onChange={changeHandler}
              invalid={user.errors?.country?.message ? true : false}
            />
            {user.errors?.country?.message && (
              <div className="helper-text">{user.errors.country.message}</div>
            )}
          </div>
          <div>
            <CFormInput
              name="pincode"
              className="name-input"
              type="text"
              id="pincode-input"
              floatingLabel="Pincode"
              placeholder="Pincode"
              value={userValues.pincode}
              onChange={changeHandler}
              invalid={user.errors?.pincode?.message ? true : false}
            />
            {user.errors?.pincode?.message && (
              <div className="helper-text">{user.errors.pincode.message}</div>
            )}
          </div>
        </div>
        <br />
        {button && (
          <CButton
            type="button"
            disabled={user.loading}
            onClick={signupHandler}
          >
            Signup
            {user.loading && <CSpinner component="span" size="sm" />}
          </CButton>
        )}
      </div>
    </div>
  );
}

export default SignupComponent;
