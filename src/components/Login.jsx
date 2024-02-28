import React, { useState, useContext } from "react";
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
    <div className=" bg-white flex flex-col  mx-auto max-w-[500px] w-full p-5 rounded-3xl my-7 shadow-2xl border-2 border-gray-300">
      <div className="flex flex-col gap-3">
        <div className="my-2" >
        <h2 className="text-4xl font-semibold ">Welcome Back!</h2>
        <span className="text-2xl ">Login Here</span>
        </div>
        <div className="flex flex-col text-lg" >
          <label >Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 rounded-md border-2 border-gray-400  mt-1 outline-none"
            onChange={(e) => {
              ContextData.setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col text-lg">
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter Your Password"
            className="p-3 rounded-md border-2 border-gray-400 mt-1 outline-none"
            onChange={(e) => {
              ContextData.setUserPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="my-5 text-xl">
        <div>
          <button className="w-full bg-gradient-to-tr from-violet-500 to-pink-500 py-3 px-3 rounded-xl outline-none text-white text-xl hover:scale-[1.01] ease-in-out transition-all active:scale-[.98] active:duration-75 " onClick={login}>
            Login
          </button>
        </div>
        <div>{ContextData.message}</div>
        <p className="mt-5">
          Already have an Account?
          <span className="ml-5 text-xl font-semibold underline">
            <Link to="/">Register</Link>
          </span>
        </p>

      </div>

      <ToastContainer />
    
    </div>
  );
};

export default Login;
