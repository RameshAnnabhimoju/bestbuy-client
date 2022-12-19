import React from "react";
import LoginComponent from "./components/LoginComponent";
const Login = ({ visible, setVisible }) => {
  return (
    <div>
      <LoginComponent visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Login;
