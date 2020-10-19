import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  //For register
  const register = () => {
    //Login
  };
  //For sign in
  const signIn = () => {
    //Login
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://cdn.oneesports.gg/wp-content/uploads/2020/03/Discord-1024x576.jpg" />
      </div>
      <div className="login__buttons">
        <Button onClick={register}>Register</Button>
        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
