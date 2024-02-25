import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import { AccountContext } from "../context/AccountContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const ContextData = useContext(AccountContext);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        ContextData.userEmail,
        ContextData.userPassword
      );
      toast.success("Login Successful!" ,{position:'top-center'});
      setTimeout(() => {
        navigate("/account");
      }, 2000);
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <h2>Login User</h2>
          <div className="input_container">
            <div>
              <label>Enter Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  ContextData.setUserEmail(e.target.value);
                }}
                className="input_feild"
              />
            </div>
            <div>
              <label>Enter Password</label>
              <input
                type="text"
                placeholder="Password.."
                onChange={(e) => {
                  ContextData.setUserPassword(e.target.value);
                }}
                className="input_feild"
              />
            </div>
          </div>
          <button className="login_btn" onClick={login}>
            Login
          </button>
          <p className="login">
            Don't have an account?{" "}
            <span>
              <Link to="/">Register</Link>
            </span>
          </p>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
