import React, { useState, useContext } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import { AccountContext } from "../../src/context/AccountContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const ContextData = useContext(AccountContext);

  const navigate = useNavigate();

  // States

  //Register User Function
  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        ContextData.registeEmail,
        ContextData.registerPassword
      );

      toast.success("Registered Successfully!",{position: "top-center"});
      setTimeout(() => {
        navigate("account");
      }, 2000);
    } catch (error) {
      toast.error(error.message,{position: "top-center"});
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <h2>Register User</h2>
          <div className="input_container">
            <div>
              <label>Enter Your Full Name</label>
              <input
                type="text"
                placeholder="Enter Your name"
                className="input_feild"
                onChange={(e) => {
                  ContextData.setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Enter Your Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input_feild"
                onChange={(e) => {
                  ContextData.setRegisterEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Enter Password</label>
              <input
                type="text"
                placeholder="Password.."
                className="input_feild"
                onChange={(e) => {
                  ContextData.setRegisterPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <button className="register_btn" onClick={registerUser}>
            Register
          </button>
          <div>{ContextData.message}</div>
          <p className="login">
            Already have an Account?
            <span>
              <Link to="login">Login</Link>
            </span>
          </p>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Register;
