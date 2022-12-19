import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
} from "@coreui/react";
import { useSelector } from "react-redux";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../api/userSlice";
import { useEffect, useState } from "react";
function LoginComponent({ visible, setVisible }) {
  const navigate = useNavigate();
  const userLoginInitialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [userLoginValues, setUserLoginValues] = useState(
    userLoginInitialValues
  );
  const user = useSelector((state) => state.user);
  function changeHandler(e) {
    const { name, value } = e.target;
    setUserLoginValues({ ...userLoginValues, [name]: value });
  }
  function loginHandler(e) {
    e.preventDefault();
    dispatch(userLogin({ ...userLoginValues }));
  }
  useEffect(() => {
    if (user.userData?.auth) setVisible(false);
    if (window.location.pathname === "/signup") {
      navigate("/");
    }
  }, [user.errors]);
  return (
    <>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        alignment="center"
      >
        <div>
          <CModalHeader>
            <CModalTitle>User Login</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm noValidate onSubmit={loginHandler}>
              <CFormInput
                name="email"
                type="email"
                placeholder="Email ID"
                floatingLabel="Email ID"
                onChange={changeHandler}
                value={userLoginValues.email}
                invalid={user.errors?.email ? true : false}
              />
              {user.errors?.email && (
                <div className="helper-text">{user.errors.email}</div>
              )}
              <br />
              <CFormInput
                name="password"
                type="password"
                placeholder="Password"
                floatingLabel="Password"
                onChange={changeHandler}
                value={userLoginValues.password}
                invalid={user.errors?.password ? true : false}
              />
              {user.errors?.password && (
                <div className="helper-text">{user.errors.password}</div>
              )}
              <br />
              <CButton type="submit" color="primary" className="login-button">
                Login
              </CButton>
            </CForm>
          </CModalBody>

          <CModalFooter className="login-footer">
            <Link to="/signup">New here? Signup</Link>
            Or
            <Link to="/seller/login">Seller Login</Link>
          </CModalFooter>
        </div>
      </CModal>
    </>
  );
}

export default LoginComponent;
