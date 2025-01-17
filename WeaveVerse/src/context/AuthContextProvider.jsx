import React, { useState } from "react";
import AuthContext from "./AuthContext";

// Initial values of the form
const signupValues = {
  username: "",
  email: "",
  password: "",
};

const AuthContextProvider = ({ children }) => {
  const [Account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupValues);  // Directly set the initial state to signupValues

  const toggleAccount = () => {
    setAccount(Account === "signup" ? "login" : "signup");
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevState) => ({
      ...prevState,
      [name]: value, // Correctly updating the state with the name and value
    }));
  };

  return (
    <AuthContext.Provider value={{ Account, signup, toggleAccount, onInputChange }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
