import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h3>Login Page</h3>
      <div>
        <label>Username</label>
        <input value="" />
      </div>
      <div>
        <label>Password</label>
        <input value="" type="password" />
      </div>
      <Link to={"/home"}>
        <button>Login</button>
      </Link>
    </div>
  );
};
export default Login;
