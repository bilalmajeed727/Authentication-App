import { useState, React, createContext } from "react";

export const AccountContext = createContext();

export const Provider = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [registeEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <AccountContext.Provider
      value={{
        userEmail,
        registeEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        name,
        setName,
        message,
        setMessage,
        setUserEmail,
        userPassword,
        setUserPassword,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};
