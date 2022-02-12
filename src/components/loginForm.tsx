import React from "react";
import ReactFormGenerator from "react-formik-form-generator";
import { loginFormData } from "../mockData/mockData";
import { LoginFormContainer } from "./_style";

const LoginForm = () => {
  const onSubmit = (values: {}) => {
    alert(JSON.stringify(values));
    console.log("Login Form Values", values);
  };

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <ReactFormGenerator
        formData={loginFormData}
        buttonTitle={"Login"}
        onSubmit={onSubmit}
      />
    </LoginFormContainer>
  );
};

export default LoginForm;
