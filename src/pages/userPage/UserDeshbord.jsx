import React, { useContext } from "react";
import { FaBuilding } from "react-icons/fa";
import { AuthProvider } from "../../Authentication/AuthenticationProvider";

const UserDeshbord = () => {
  const { currentUser } = useContext(AuthProvider);
  return <h1>upcoming ............</h1>;
};

export default UserDeshbord;
