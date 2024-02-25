import React, { useState } from "react";
import "./Account.css";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { AccountContext } from "../context/AccountContext";
import { auth } from "../../firebase-config.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const ContextData = useContext(AccountContext);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signout = async () => {
    await signOut(auth);
    ContextData.setName('');
    toast.success('user signed out',{position:'top-center'})
  };
  return (
    <div className="account">
      <h1>User Information</h1>
      <div>
        <h2>User Name: </h2>
        <h3>{ContextData.name}</h3>
      </div>
      <div>
        {" "}
        <h2>User Email:</h2>
        <h3> {user?.email}</h3>
      </div>
      <button onClick={signout}>Sign Out</button>

      <ToastContainer />
    </div>
  );
};

export default Account;
