import React, { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import { Navigate } from "react-router-dom";

const PrivatRoute = ({ children }) => {
  const { currentUser, loader } = useContext(AuthProvider);
  if (loader) {
    return;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to={"/logIn"} state={location?.pathname}></Navigate>;
};

export default PrivatRoute;
