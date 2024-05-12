import React, { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import { Navigate } from "react-router-dom";

const PrivatRoute = ({ children }) => {
  const { currentUser, loader } = useContext(AuthProvider);
  if (loader) {
    return (
      <div className="h-[70vh] w-full flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to={"/logIn"} state={location?.pathname}></Navigate>;
};

export default PrivatRoute;
