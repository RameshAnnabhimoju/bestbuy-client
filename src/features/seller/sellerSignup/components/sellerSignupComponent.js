import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sellerSignup } from "../../../api/sellerSlice";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CFormInput,
  CButton,
  CFormSelect,
  CSpinner,
  CForm,
  CAlert,
  CAlertLink,
} from "@coreui/react";
function SellerSignupComponent() {
  const [confirmPasswordEl, setConfirmPasswordEl] = useState("");
  const [button, setButton] = useState(true);
  const seller = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const sellerSignupElementsInitial = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    storeName: "",
    GSTPAN: "",
    shippingMethod: "",
    legalName: "",
    bankAccountNumber: "",
    bankIFSC: "",
    bankName: "",
  };
  const [sellerSignupElements, setSellerSignupElements] = useState(
    sellerSignupElementsInitial
  );

  const [activeKey, setActiveKey] = useState(1);
  function changeHandler(e) {
    const { name, value } = e.target;
    setSellerSignupElements({ ...sellerSignupElements, [name]: value });
  }
  function createAccountHandler(e) {
    e.preventDefault();
    if (sellerSignupElements.password === confirmPasswordEl) {
      dispatch(sellerSignup({ ...sellerSignupElements }));
    }
  }
  useEffect(() => {
    if (seller.sellerData?._id) {
      setSellerSignupElements(sellerSignupElementsInitial);
      setButton(false);
    }
  }, [seller.sellerData?._id]);

  return (
    <div className="sellerSignup-background">
      <div className="sellerSignup-container">
        <h2>Create seller account</h2>
        <br />
        {seller.sellerData?._id && (
          <CAlert color="success">
            Your Account has been created successfully . Please
            <CAlertLink href="/seller/login"> LOGIN </CAlertLink> using the
            email and password.
          </CAlert>
        )}
        {seller.errors && (
          <CAlert color="danger">
            Invalid Details, please check the details and try again.
          </CAlert>
        )}
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              required={true}
              href="#"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              Account Details
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink
              href="#"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              Business Details
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink
              href="#"
              active={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              Payment Details
            </CNavLink>
          </CNavItem>
        </CNav>
        <CForm onSubmit={createAccountHandler} noValidate>
          <CTabContent>
            <CTabPane
              role="tabpanel"
              aria-labelledby="home-tab"
              visible={activeKey === 1}
            >
              <br />
              <div className="seller-signup-tabs">
                <div>
                  <CFormInput
                    name="firstName"
                    onChange={changeHandler}
                    value={sellerSignupElements.firstName}
                    className="name-input"
                    type="text"
                    floatingLabel="First Name"
                    placeholder="First Name"
                    invalid={seller.errors?.firstName?.message ? true : false}
                  />
                  {seller.errors?.firstName?.message && (
                    <div className="helper-text">
                      {seller.errors.firstName.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormInput
                    name="lastName"
                    onChange={changeHandler}
                    value={sellerSignupElements.lastName}
                    className="name-input"
                    type="text"
                    floatingLabel="Last Name"
                    placeholder="Last Name"
                    invalid={seller.errors?.lastName?.message ? true : false}
                  />
                  {seller.errors?.lastName?.message && (
                    <div className="helper-text">
                      {seller.errors.lastName.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormInput
                    name="email"
                    onChange={changeHandler}
                    value={sellerSignupElements.email}
                    className="name-input"
                    type="email"
                    floatingLabel="Email ID"
                    placeholder="Email ID"
                    invalid={seller.errors?.email?.message ? true : false}
                  />
                  {seller.errors?.email?.message && (
                    <div className="helper-text">
                      {seller.errors.email.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormInput
                    name="mobile"
                    onChange={changeHandler}
                    value={sellerSignupElements.mobile}
                    className="name-input"
                    type="text"
                    floatingLabel="Mobile"
                    placeholder="Mobile"
                    invalid={seller.errors?.mobile?.message ? true : false}
                  />
                  {seller.errors?.mobile?.message && (
                    <div className="helper-text">
                      {seller.errors.mobile.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormInput
                    name="password"
                    onChange={changeHandler}
                    value={sellerSignupElements.password}
                    className="name-input"
                    type="password"
                    floatingLabel="Password"
                    placeholder="Password"
                    invalid={seller.errors?.password?.message ? true : false}
                  />
                  {seller.errors?.password?.message && (
                    <div className="helper-text">
                      {seller.errors.password.message}
                    </div>
                  )}
                </div>

                <div>
                  <CFormInput
                    name="confirmPasswordEl"
                    onChange={(e) => setConfirmPasswordEl(e.target.value)}
                    value={confirmPasswordEl}
                    className="name-input"
                    type="password"
                    floatingLabel="Confirm Password"
                    placeholder="Confirm Password"
                    invalid={seller.errors?.password?.message ? true : false}
                  />
                  {seller.errors?.password?.message && (
                    <div className="helper-text">
                      {seller.errors.password.message}
                    </div>
                  )}
                </div>
                <div />

                <CButton onClick={() => setActiveKey(2)}>Save & Next</CButton>
              </div>
            </CTabPane>

            <CTabPane
              role="tabpanel"
              aria-labelledby="profile-tab"
              visible={activeKey === 2}
            >
              <br />
              <div className="seller-signup-tabs">
                <div>
                  <CFormInput
                    name="storeName"
                    onChange={changeHandler}
                    value={sellerSignupElements.storeName}
                    className="name-input"
                    type="text"
                    floatingLabel="Store Name"
                    placeholder="Store Name"
                    invalid={seller.errors?.storeName?.message ? true : false}
                  />
                  {seller.errors?.storeName?.message && (
                    <div className="helper-text">
                      {seller.errors.storeName.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormInput
                    name="GSTPAN"
                    onChange={changeHandler}
                    value={sellerSignupElements.GSTPAN}
                    className="name-input"
                    type="text"
                    floatingLabel="GST/PAN"
                    placeholder="GST/PAN"
                    invalid={seller.errors?.GSTPAN?.message ? true : false}
                  />
                  {seller.errors?.GSTPAN?.message && (
                    <div className="helper-text">
                      {seller.errors.GSTPAN.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormSelect
                    name="shippingMethod"
                    onChange={changeHandler}
                    value={sellerSignupElements.shippingMethod}
                    invalid={
                      seller.errors?.shippingMethod?.message ? true : false
                    }
                  >
                    <option>Shipping Method</option>
                    <option value="seller">Fullfilled by Seller</option>
                    <option value="bestbuy">Fullfilled by Bestbuy</option>
                  </CFormSelect>
                  {seller.errors?.shippingMethod?.message && (
                    <div className="helper-text">
                      {seller.errors.shippingMethod.message}
                    </div>
                  )}
                </div>
                <div></div>
                <div></div>
                <CButton onClick={() => setActiveKey(3)}>Save & Next</CButton>
              </div>
            </CTabPane>

            <CTabPane
              role="tabpanel"
              aria-labelledby="contact-tab"
              visible={activeKey === 3}
            >
              <br />
              <div className="seller-signup-tabs">
                <div>
                  <CFormInput
                    name="legalName"
                    onChange={changeHandler}
                    value={sellerSignupElements.legalName}
                    className="name-input"
                    type="text"
                    floatingLabel="Legal Name"
                    placeholder="Legal Name"
                    invalid={seller.errors?.legalName?.message ? true : false}
                  />
                  {seller.errors?.legalName?.message && (
                    <div className="helper-text">
                      {seller.errors.legalName.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormInput
                    name="bankAccountNumber"
                    onChange={changeHandler}
                    value={sellerSignupElements.bankAccountNumber}
                    className="name-input"
                    type="text"
                    floatingLabel="Bank Account Number"
                    placeholder="Bank Account Number"
                    invalid={
                      seller.errors?.bankAccountNumber?.message ? true : false
                    }
                  />
                  {seller.errors?.bankAccountNumber?.message && (
                    <div className="helper-text">
                      {seller.errors.bankAccountNumber.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormInput
                    name="bankIFSC"
                    onChange={changeHandler}
                    value={sellerSignupElements.bankIFSC}
                    className="name-input"
                    type="text"
                    floatingLabel="Bank IFSC Code"
                    placeholder="Bank IFSC Code"
                    invalid={seller.errors?.bankIFSC?.message ? true : false}
                  />
                  {seller.errors?.bankIFSC?.message && (
                    <div className="helper-text">
                      {seller.errors.bankIFSC.message}
                    </div>
                  )}
                </div>
                <div>
                  <CFormSelect
                    name="bankName"
                    onChange={changeHandler}
                    value={sellerSignupElements.bankName}
                    invalid={seller.errors?.bankIFSC?.message ? true : false}
                  >
                    <option>Select your Bank</option>
                    <option value="SBI BANK">SBI BANK</option>
                    <option value="HDFC BANK">HDFC BANK</option>
                    <option value="ICICI BANK">ICICI BANK</option>
                    <option value="AXIS BANK">AXIS BANK</option>
                    <option value="UNION BANK OF INDIA">
                      UNION BANK OF INDIA
                    </option>
                  </CFormSelect>
                  {seller.errors?.bankIFSC?.message && (
                    <div className="helper-text">
                      {seller.errors.bankIFSC.message}
                    </div>
                  )}
                </div>
                <div />
                {button && (
                  <CButton type="submit" disabled={seller.loading}>
                    Create Account
                    {seller.loading && <CSpinner component="span" size="sm" />}
                  </CButton>
                )}
              </div>
            </CTabPane>
          </CTabContent>
        </CForm>
      </div>
    </div>
  );
}

export default SellerSignupComponent;
