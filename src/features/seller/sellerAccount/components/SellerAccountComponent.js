import React, { useState } from "react";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CFormInput,
  CFormSelect,
} from "@coreui/react";
function SellerAccountComponent() {
  const [activeKey, setActiveKey] = useState(1);
  return (
    <>
      <div className="sellerAccount-background">
        <div className="sellerAccount-container">
          <h2>Seller Account</h2>
          <br />
          <div className="grid">
            <CNav variant="pills" role="tablist" className="flex-column">
              <CNavItem className="nav-link">
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  Account
                </CNavLink>
              </CNavItem>

              <CNavItem className="nav-link">
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  Business
                </CNavLink>
              </CNavItem>

              <CNavItem className="nav-link">
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Payments
                </CNavLink>
              </CNavItem>
            </CNav>

            <CTabContent>
              <CTabPane
                role="tabpanel"
                aria-labelledby="home-tab"
                visible={activeKey === 1}
                className="account-contents"
              >
                <CFormInput
                  type="text"
                  floatingLabel="First Name"
                  placeholder="First Name"
                />
                <br />
                <CFormInput
                  type="text"
                  floatingLabel="Last Name"
                  placeholder="Last Name"
                />
                <br />
                <CFormInput
                  type="email"
                  floatingLabel="Email ID"
                  placeholder="First Name"
                />
                <br />
                <CFormInput
                  type="number"
                  floatingLabel="Mobile"
                  placeholder="mobile"
                />
              </CTabPane>

              <CTabPane
                role="tabpanel"
                aria-labelledby="profile-tab"
                visible={activeKey === 2}
                className="account-contents"
              >
                <CFormInput
                  type="text"
                  floatingLabel="Store Name"
                  placeholder="Store Name"
                />
                <br />
                <CFormInput
                  type="text"
                  floatingLabel="GST/PAN"
                  placeholder="GST/PAN"
                />
                <br />
                <CFormSelect>
                  <option>Shipping Method</option>
                  <option value="1">Fullfilled by Seller</option>
                  <option value="2">Fullfilled by Bestbuy</option>
                </CFormSelect>
              </CTabPane>

              <CTabPane
                role="tabpanel"
                aria-labelledby="contact-tab"
                visible={activeKey === 3}
                className="account-contents"
              >
                <CFormInput
                  className="name-input"
                  type="text"
                  floatingLabel="Legal Name"
                  placeholder="Legal Name"
                  text="Must be 8-20 characters long."
                />
                <br />
                <CFormInput
                  className="name-input"
                  type="text"
                  floatingLabel="Bank Account Number"
                  placeholder="Bank Account Number"
                  text="Must be 8-20 characters long."
                />
                <br />
                <CFormInput
                  className="name-input"
                  type="text"
                  floatingLabel="Bank IFSC Code"
                  placeholder="Bank IFSC Code"
                  text="Must be 8-20 characters long."
                />
                <br />
                <CFormSelect>
                  <option>Select your Bank</option>
                  <option value="1">SBI BANK</option>
                  <option value="2">HDFC BANK</option>
                  <option value="3">ICICI BANK</option>
                  <option value="4">AXIS BANK</option>
                  <option value="5">UNION BANK OF INDIA</option>
                </CFormSelect>
              </CTabPane>
            </CTabContent>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerAccountComponent;
