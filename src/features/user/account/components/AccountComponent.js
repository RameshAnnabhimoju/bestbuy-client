import React from "react";
import users from "../../../../assets/users";
import { CFormInput, CButton } from "@coreui/react";
import edit from "../../../../assets/editing.png";
function AccountComponent() {
  const user = users();
  return (
    <div className="account-container-background">
      <div className="account-container">
        <div className="profile-header">
          <h1>Account Details</h1>
          <CButton color="primary" variant="ghost">
            <img className="account-edit" src={edit} alt="" />
          </CButton>
        </div>
        <br />
        <h4>Profile</h4>
        <div className="profile-name">
          <CFormInput
            className="name-input"
            type="text"
            id="firstname-input"
            floatingLabel="First Name"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.firstName}
            disabled
          />
          <CFormInput
            className="name-input"
            type="text"
            id="lastname-input"
            floatingLabel="Last Name"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.lastName}
          />
          <CFormInput
            className="name-input"
            type="email"
            id="email-input"
            floatingLabel="Email ID"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.email}
          />
          <CFormInput
            className="mobile-input"
            type="number"
            id="mobile-input"
            floatingLabel="Mobile"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.mobile}
          />
        </div>
        <br />
        <h4>Address</h4>
        <div className="profile-name">
          <CFormInput
            className="name-input"
            type="text"
            id="hno-input"
            floatingLabel="House No."
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.address.hno}
          />
          <CFormInput
            className="name-input"
            type="text"
            id="area-input"
            floatingLabel="Area"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.address.area}
          />
          <CFormInput
            className="name-input"
            type="text"
            id="city-input"
            floatingLabel="City"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.address.city}
          />
          <CFormInput
            className="name-input"
            type="text"
            id="state-input"
            floatingLabel="State"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.address.state}
          />
          <CFormInput
            className="name-input"
            type="text"
            id="country-input"
            floatingLabel="Country"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.address.country}
          />
          <CFormInput
            className="name-input"
            type="number"
            id="pincode-input"
            floatingLabel="Pincode"
            placeholder="name@example.com"
            text="Must be 8-20 characters long."
            value={user.address.pincode}
          />
        </div>
        <br />
        <CButton>Update</CButton>
      </div>
    </div>
  );
}

export default AccountComponent;
