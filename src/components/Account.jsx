import React, { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AccountContext } from "../context/AccountContext";
import { auth } from "../../firebase-config.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom'

const Account = () => {
  const ContextData = useContext(AccountContext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signout = async () => {
    await signOut(auth);
    ContextData.setName('');
    toast.success('user signed out',{position:'top-center'})
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div className=" bg-white flex flex-col  mx-auto max-w-[500px] w-full p-5 rounded-3xl my-7 shadow-2xl border-2 border-gray-300">
      <h1 className="text-4xl my-4 text-center">User Information!</h1>
      <div className="flex ">
        <h2 className="text-xl">User Name: </h2>
        <h3 className="text-xl font-bold ml-3">{ContextData.name}</h3>
      </div>
      <div className="flex ">
       
        <h2 className="text-xl ">User Email:</h2>
        <h3 className="text-xl font-bold ml-3"> {user?.email}</h3>
      </div>
      <button onClick={signout} className="w-full bg-gradient-to-tr from-violet-500 to-pink-500 p-2 my-5 rounded-xl outline-none text-white text-xl hover:scale-[1.01] ease-in-out transition-all active:scale-[.98] active:duration-75 ">Sign Out</button>

      <ToastContainer />
    </div>
  );
};

export default Account;
